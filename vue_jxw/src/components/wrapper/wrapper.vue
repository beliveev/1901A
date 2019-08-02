<template>
	<div class="wrapper">
		<div class="header">
        	<jxwheader></jxwheader>	
		</div>
        <div class="jxwmain">
			<div class="banner">
               <jxwswipe></jxwswipe>
			</div>
			<div class="iconbar">
           	   <jxwicontab></jxwicontab>	
			</div>
			<div class="modulecaption">
				<jxwcaption></jxwcaption>
			</div>	
			<div class="modulecaptionpage">
				<jxwcaptionpage></jxwcaptionpage>
			</div>
		   
		</div>
		<div class="footer">
		    <jxwfooter></jxwfooter>
		</div>
	</div>
</template>

<script>
	import jxwheader from '../jxwheader/jxwheader'
	import jxwfooter from '../jxwfooter/jxwfooter'
	import jxwswipe from '../jxwswipe/jxwswipe'
	import jxwicontab from '../jxwicontab/jxwicontab'
	import jxwcaption from '../jxwcaption/jxwcaption'
	import jxwcaptionpage from '../jxwcaptionpage/jxwcaptionpage'

	export default {
		name: 'wrapper',
		data() {
			return {
				msg: 'wrapper'
			}
		},
		components: {
			jxwheader,
			jxwfooter,
			jxwswipe,
			jxwicontab,
			jxwcaption,
			jxwcaptionpage
		}
	}
</script>

<style scoped>
 .wrapper{
	 background-color: #e3e3e3;
	 box-sizing: border-box;
	 font-size: .16rem;
 }
 .wrapper .header{
	 position: sticky;
	 top: 0;
	 z-index: 2;
 }
 .wrapper .footer{
	 padding: 0.16rem;
 }
 .modulecaption,
 .modulecaptionpage{
	 margin-top: 0.12rem;
 }
</style>