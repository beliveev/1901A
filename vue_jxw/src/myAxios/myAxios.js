import axios from 'axios'
import { Loading } from 'element-ui';
import { Indicator, Toast } from 'mint-ui';
axios.defaults.baseURL = '/api';// api/apppost
let loadingInstance
let f;

//拦截器
//1请求
//2响应
axios.interceptors.request.use(config=>{
    console.log('拦截器 config:',config);
    // f=Math.random()>0.5;
    //console.log('f:',f)
    // if(f){
    //     Indicator.open({
    //         text: 'mintui加载中...',
    //         spinnerType: 'fading-circle'
    //     });
    // }else{
    //     loadingInstance = Loading.service({
    //         fullscreen:false,
    //         text:'elementui加载中...'
    //     })
    // }
    Indicator.open({
                text: '请稍后加载中...',
                spinnerType: 'fading-circle'});
             

    let url=config.url;
    console.log('')
    if(url==="/delObj"||url==="/addPostObj"||url==="/addPostStr"){
        let token=sessionStorage.token;
        console.log('1111token:',token);
        if(token){
            config.headers.token=token;
            return config;
        }else{
            Toast({
                message:"请先登录",
                position:"bottom",
                duration:1000
            });
            setTimeout(()=>{
                location.href="/#/login"
            },1100);
            return;
        }
    }else{
        return config;
    }
},err=>{
    // if(f){
    //     Indicator.close();
    // }else{
    //     loadingInstance.close();
    // }
    Indicator.close();
    // console.log("00009999000");
    return Promise.reject(err)
})

axios.interceptors.response.use(res=>{
    //console.log('res:',res)
    // if(f){
    //     Indicator.close();
    // }else{
    //     loadingInstance.close();
    // }
    Indicator.close();
    return res
},err=>{
    // if(f){
    //     Indicator.close();
    // }else{
    //     loadingInstance.close();
    // }
    Indicator.close();
    return Promise.reject(err)
})

export default axios