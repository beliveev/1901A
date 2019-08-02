<template>
  <div class="tiku">
    <div class="device-window wrap-box question-bank">
      <!--屏幕内大容器-->
      <div class="content">
        <!--默认可视区域-->
        <!--头部-->         
        <mt-header fixed title="智能题库">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button slot="right">
            <van-icon name="manager" v-if="username" @click="showPopup"/>
          </mt-button>
        </mt-header>
            <van-popup
      v-model="show"
      position="right"
      round
      :style="{ height: '70%',width:'40%',background:'cyan',paddingTop:'.3rem' }"
    >
    <router-link to="/" tag="div" class="usermenu">
      个人信息
    </router-link>
    <router-link to="/" tag="div" class="usermenu">
      APP首页
    </router-link>
    <router-link to="/tiku" tag="div" class="usermenu">
      智能题库
    </router-link>
    <router-link to="/jxmarket" tag="div" class="usermenu">
      简学商城
    </router-link>
    <router-link to="/listens" tag="div" class="usermenu">
      我的订单
    </router-link>
    <router-link to="/" tag="div" class="usermenu">
      用户安全
    </router-link>
    <router-link to="/inline" tag="div" class="usermenu">
      在线客服
    </router-link>
    <div class="usermenu">
      关于我们
    </div>
    <div class="usermenu" @click="toOut">
      退出
    </div>
    </van-popup>
        <section>
          <div class="ctrlheight">
            <div class="question-bank-wrap">
				<!-- <div class="itm-box">
					<div class="itm dd" v-for="item in arr" :key="item.id">
						<h3 class="fullname">{{item.fullname}}</h3>
						<p class="morefull">{{item.morefull}}</p>
						<div class="names">
							<span class="sid" v-for="s in item.names" :key="s.sid">
								{{s.text}}
							</span>
						</div>
					</div>
				</div> -->
              <div class="itm-box">
                <div class="itm dd">
                  <h3 fullname="一级建造师">一级建造师</h3>
                  <p></p>
                  <div class="names">
                    <span sid="16073">建设工程经济</span>
                    <span sid="16074">建设工程项目管理</span>
                    <span sid="16075">建设工程法规及相关知识</span>
                    <span sid="16076">市政公用工程管理与实务</span>
                    <span sid="16077">机电安装工程管理与实务</span>
                    <span sid="16078">建筑工程管理与实务</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="ACI心理咨询师">ACI心理咨询师</h3>
                  <p>ACI国际注册心理咨询师题库</p>
                  <div class="names">
                    <span sid="17682">ACI国际注册心理咨询师</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="ACI营养师">ACI营养师</h3>
                  <p>ACI国际注册营养师智能题库</p>
                  <div class="names">
                    <span sid="17873">ACI国际注册营养师</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="一级注册消防工程师">一级注册消防工程师</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12317">实务</span>
                    <span sid="12318">综合</span>
                    <span sid="12319">案例</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="二级建造师">二级建造师</h3>
                  <p></p>
                  <div class="names">
                    <span sid="15371">建设工程法规及相关知识</span>
                    <span sid="15372">建设工程施工管理</span>
                    <span sid="15373">建筑工程管理与实务</span>
                    <span sid="15374">市政公用工程管理与实务</span>
                    <span sid="15375">机电工程管理与实务</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="执业中药师题库">执业中药师题库</h3>
                  <p>知识点与题目结合，一对一强化</p>
                  <div class="names">
                    <span sid="11155">中药学专业知识（一）</span>
                    <span sid="11156">中药学专业知识（二）</span>
                    <span sid="11157">中药学综合知识与技能</span>
                    <span sid="11158">药事管理与法规</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="执业西药师题库">执业西药师题库</h3>
                  <p>知识点结合题目，一对一强化</p>
                  <div class="names">
                    <span sid="11159">西药学专业知识（一）</span>
                    <span sid="11160">西药学专业知识（二）</span>
                    <span sid="11161">西药学综合知识与技能</span>
                    <span sid="11162">药事管理与法规</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="汉语言文学专业专科">汉语言文学专业专科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12865">中国现代文学作品选</span>
                    <span sid="12868">中国古代文学作品选（一）</span>
                    <span sid="12879">毛泽东思想和中国特色社会主义理论体系</span>
                    <span sid="12880">思想道德修养与法律基础</span>
                    <span sid="12898">中国当代文学作品选</span>
                    <span sid="14656">外国文学作品选</span>
                    <span sid="14938">中国古代文学作品选（二）</span>
                    <span sid="14939">古代汉语</span>
                    <span sid="15087">现代汉语</span>
                    <span sid="18949">文学概论</span>
                    <span sid="19844">写作（一）</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="汉语言文学专业本科">汉语言文学专业本科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12861">中国古代文学史（一）</span>
                    <span sid="12863">中国古代文学史（二）</span>
                    <span sid="12864">中国现代文学史</span>
                    <span sid="12866">马克思主义基本原理概论</span>
                    <span sid="12867">中国近现代史纲要</span>
                    <span sid="14749">汉字学概论</span>
                    <span sid="14834">语言学概论</span>
                    <span sid="14897">外国文学史</span>
                    <span sid="18936">传播学概论</span>
                    <span sid="19557">训诂学</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="行政管理专业专科">行政管理专业专科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12848">大学语文</span>
                    <span sid="12849">公文写作与处理</span>
                    <span sid="12877">毛泽东思想和中国特色社会主义理论体系</span>
                    <span sid="12878">思想道德修养与法律基础</span>
                    <span sid="14600">行政管理学</span>
                    <span sid="14755">人力资源管理（一）</span>
                    <span sid="14765">现代管理学</span>
                    <span sid="15012">政治学概论</span>
                    <span sid="19018">管理心理学</span>
                    <span sid="19138">法学概论</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="行政管理专业本科">行政管理专业本科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12770">行政组织理论</span>
                    <span sid="12831">公共政策</span>
                    <span sid="12832">马克思主义基本原理概论</span>
                    <span sid="12833">中国近现代史纲要</span>
                    <span sid="14477">社会学概论</span>
                    <span sid="14623">行政管理学</span>
                    <span sid="14625">领导科学</span>
                    <span sid="14641">当代中国政治制度</span>
                    <span sid="18956">财务管理学</span>
                    <span sid="19530">公务员制度</span>
                    <span sid="19820">西方政治制度</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="人力资源管理专业专科">人力资源管理专业专科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12920">人力资源管理三</span>
                    <span sid="12921">工作分析</span>
                    <span sid="13366">毛泽东思想和中国特色社会主义理论体系概论</span>
                    <span sid="13394">思想道德修养和法律基础</span>
                    <span sid="14767">劳动关系与争议处理</span>
                    <span sid="14792">社会保障概论</span>
                    <span sid="15415">经济法概论</span>
                    <span sid="15549">管理学原理</span>
                    <span sid="18971">人员测评技术</span>
                    <span sid="19457">人力资源开发</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="人力资源管理专业本科">人力资源管理专业本科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12904">人力资源开发与管理</span>
                    <span sid="12905">工作分析与评价</span>
                    <span sid="13399">中国近现代史纲要</span>
                    <span sid="13401">马克思主义基本原理概论</span>
                    <span sid="14635">行政管理学</span>
                    <span sid="14770">人力资源政策与法规</span>
                    <span sid="16309">社会学概论</span>
                    <span sid="18942">人员素质测评理论与方法</span>
                    <span sid="19458">人力资源管理研究方法与案例分析</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="工商企业管理专业专科">工商企业管理专业专科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12899">政治经济学</span>
                    <span sid="12901">大学语文</span>
                    <span sid="13397">毛泽东思想和中国特色社会主义理论体系概论</span>
                    <span sid="13398">思想道德修养和法律基础</span>
                    <span sid="14634">中国税制</span>
                    <span sid="15026">经济法概论</span>
                    <span sid="16310">人力资源管理（一）</span>
                    <span sid="16311">市场营销学</span>
                    <span sid="18941">企业会计学</span>
                    <span sid="19466">国民经济统计概论</span>
                    <span sid="19823">基础会计学</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="工商企业管理专业本科">工商企业管理专业本科</h3>
                  <p></p>
                  <div class="names">
                    <span sid="12896">组织行为学</span>
                    <span sid="12897">企业管理咨询</span>
                    <span sid="13395">中国近现代史纲要</span>
                    <span sid="13396">马克思主义基本原理概论</span>
                    <span sid="14655">企业管理概论</span>
                    <span sid="15407">管理学原理</span>
                    <span sid="15459">企业经营战略概论</span>
                    <span sid="16312">市场营销学</span>
                    <span sid="19069">金融理论与实务</span>
                    <span sid="19474">财政与金融</span>
                    <span sid="19908">国际贸易理论与实务</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="项目管理专业本科">项目管理专业本科</h3>
                  <p>项目管理专业本科题库</p>
                  <div class="names">
                    <span sid="12829">马克思主义基本原理概论</span>
                    <span sid="12830">中国近现代史纲要</span>
                  </div>
                </div>
                <div class="itm dd">
                  <h3 fullname="项目管理专业专科">项目管理专业专科</h3>
                  <p>项目管理专业专科题库</p>
                  <div class="names">
                    <span sid="12827">毛泽东思想和中国特色社会主义理论体系概论</span>
                    <span sid="12828">思想道德修养与法律基础</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  </div>
</template>

<script>
import { Header,MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
let arr=[
	{
		id:"tk01",
		fullname:"一级建造师",
		morefull:"",
		names:[
			{sid:16073,text:"建设工程经济"},
			{sid:16074,text:"建设工程项目管理"},
			{sid:16075,text:"建设工程法规及相关知识"},
			{sid:16076,text:"市政公用工程管理与实务"},
			{sid:16077,text:"机电安装工程管理与实务"},
			{sid:16078,text:"建筑工程管理与实务"},
			]
	},
	{
		id:"tk02",
		fullname:"ACI心理咨询师",
		morefull:"ACI国际注册心理咨询师题库",
		names:[
			{sid:17682,text:"ACI国际注册心理咨询师"},
			]
	},
	{
		id:"tk03",
		fullname:"ACI营养师",
		morefull:"ACI国际注册营养师智能题库",
		names:[
			{sid:17873,text:"ACI国际注册营养师"},
			]
	},
	{
		id:"tk04",
		fullname:"一级注册消防工程师",
		morefull:"",
		names:[
			{sid:12317,text:"实务"},
			{sid:12318,text:"综合"},
			{sid:12319,text:"案例"},
			]
	},
	{
		id:"tk05",
		fullname:"二级建造师",
		morefull:"",
		names:[
			{sid:15371,text:"建设工程法规及相关知识"},
			{sid:15372,text:"建设工程施工管理"},
			{sid:15373,text:"建筑工程管理与实务"},
			{sid:15374,text:"市政公用工程管理与实务"},
			{sid:15375,text:"机电工程管理与实务"},
			]
	},
	{
		id:"tk06",
		fullname:"执业中药师题库",
		morefull:"知识点与题目结合，一对一强化",
		names:[
			{sid:11155,text:"中药学专业知识（一）"},
			{sid:11156,text:"中药学专业知识（二）"},
			{sid:11157,text:"中药学综合知识与技能"},
			{sid:11158,text:"药事管理与法规"},
			]
	},
	{
		id:"tk07",
		fullname:"执业西药师题库",
		morefull:"知识点与题目结合，一对一强化",
		names:[
			{sid:11159,text:"西药学专业知识（一）"},
			{sid:11160,text:"西药学专业知识（二）"},
			{sid:11161,text:"西药学综合知识与技能"},
			{sid:11162,text:"药事管理与法规"},
			]
	},
	{
		id:"tk08",
		fullname:"汉语言文学专业专科",
		morefull:"",
		names:[
			{sid:12865,text:"中国现代文学作品选"},
			{sid:12868,text:"中国古代文学作品选（一）"},
			{sid:12879,text:"毛泽东思想和中国特色社会主义理论体系"},
			{sid:12880,text:"思想道德修养与法律基础"},
			{sid:12898,text:"中国当代文学作品选"},
			{sid:14656,text:"外国文学作品选"},
			{sid:14938,text:"中国古代文学作品选（二）"},
			{sid:14939,text:"古代汉语"},
			{sid:15087,text:"现代汉语"},
			{sid:18949,text:"文学概论"},
			{sid:19844,text:"写作（一）"},
      ]
	},
	{
		id:"tk09",
		fullname:"汉语言文学专业本科",
		morefull:"",
		names:[
			{sid:12861,text:"中国古代文学史（一）"},
			{sid:12863,text:"中国古代文学史（二）"},
			{sid:12864,text:"中国现代文学史"},
			{sid:12866,text:"马克思主义基本原理概论"},
			{sid:12867,text:"中国近现代史纲要"},
			{sid:14749,text:"汉字学概论"},
			{sid:14834,text:"语言学概论"},
			{sid:14897,text:"外国文学史"},
			{sid:18936,text:"传播学概论"},
			{sid:19557,text:"训诂学"},
      ]
	},
	{
		id:"tk10",
		fullname:"行政管理专业专科",
		morefull:"",
		names:[
			{sid:12848,text:"大学语文"},
			{sid:12849,text:"公文写作与处理"},
			{sid:12877,text:"毛泽东思想和中国特色社会主义理论体系"},
			{sid:12878,text:"思想道德修养与法律基础"},
			{sid:14600,text:"行政管理学"},
			{sid:14755,text:"人力资源管理（一）"},
			{sid:14765,text:"现代管理学"},
			{sid:15012,text:"政治学概论"},
			{sid:19018,text:"管理心理学"},
			{sid:19138,text:"法学概论"},
      ]
	},
	{
		id:"tk11",
		fullname:"行政管理专业本科",
		morefull:"",
		names:[
			{sid:12770,text:"行政组织理论"},
			{sid:12831,text:"公共政策"},
			{sid:12832,text:"马克思主义基本原理概论"},
			{sid:12833,text:"中国近现代史纲要"},
			{sid:14623,text:"行政管理学"},
			{sid:14625,text:"领导科学"},
			{sid:14641,text:"当代中国政治制度"},
			{sid:18956,text:"财务管理学"},
			{sid:19530,text:"公务员制度"},
			{sid:19820,text:"西方政治制度"},
      ]
	},
	{
		id:"tk12",
		fullname:"人力资源管理专业专科",
		morefull:"",
		names:[
			{sid:12920,text:"人力资源管理三"},
			{sid:12921,text:"工作分析"},
			{sid:13366,text:"毛泽东思想和中国特色社会主义理论体系概论"},
			{sid:13394,text:"思想道德修养和法律基础"},
			{sid:14767,text:"劳动关系与争议处理"},
			{sid:14792,text:"社会保障概论"},
			{sid:15415,text:"经济法概论"},
			{sid:15549,text:"管理学原理"},
			{sid:18971,text:"人员测评技术"},
			{sid:19457,text:"人力资源开发"},
      ]
	},
	{
		id:"tk13",
		fullname:"人力资源管理专业本科",
		morefull:"",
		names:[
			{sid:12904,text:"人力资源开发与管理"},
			{sid:12905,text:"工作分析与评价"},
			{sid:13399,text:"中国近现代史纲要"},
			{sid:13401,text:"马克思主义基本原理概论"},
			{sid:14635,text:"行政管理学"},
			{sid:14770,text:"人力资源政策与法规"},
			{sid:16309,text:"社会学概论"},
			{sid:18942,text:"人员素质测评理论与方法"},
			{sid:19458,text:"人力资源管理研究方法与案例分析"},
      ]
	},
	]
export default {
  name: "tiku",
  data() {
    return {
    show:false,
	  msg: "tiku",
    arr:arr,
    username:sessionStorage.username
    };
  },
 mounted () {
    let wrapper = document.querySelector('.question-bank-wrap')
    let scroll = new BScroll(wrapper)
  },
  components: {
	  Header
  },
  methods: {
    showPopup(){
      this.show = true;
    },
    toOut(){
      console.log("del username")
        this.show = false;
      MessageBox.confirm('确定是否退出用户登录?').then(action => {
        sessionStorage.removeItem("username");
        this.$router.push('/')
        this.user = null;
      },err=>{return});
    },
  }
};
</script>

<style scoped>
.content{
	height: 100%;
	overflow: hidden;
  padding-top: 0.4rem;
  font-size: .16rem
}
.usermenu{
  font-size: .2rem;
  background-color: cyan;
  opacity: 0.8;
  padding: .05rem .2rem;
  margin: .1rem 0;
  color: #000;
  white-space: nowrap;
}
.usermenu:hover{
  opacity: 1;
  text-decoration: underline;
}
.ctrlheight{
	background-color: #fff;
}
.question-bank-wrap{
	height: 7rem;
}
.itm-box{
	background-color: #f0f0f0;
}
.itm{
	padding: .08rem;
	margin-top: .14rem;
	border-top: solid 1px #e3e3e3;
	border-bottom: solid 1px #e3e3e3;
	background-color: #fff;
}
.itm>p{
	color: gray;
}
.itm .names{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.itm .names span{
	display: inline-block;
	white-space: nowrap;
  padding: .06rem;
	font-size: .12rem;
	border: solid 1px #e3e3e3;
	border-radius: .03rem;
	margin: .06rem;
}
</style>