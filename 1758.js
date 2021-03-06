@charset "utf-8"; 
/*==========全局设置==========*/
ul,li{list-style:none; margin:0; padding:0;}
img{border:none; margin:0; padding:0;}
a, a:hover, a:link, a:visited,a:hover,a:active { color:black;text-decoration:none;}
.left{float:left;}
.right{float:right;}
.clearFloat{clear:both;} 
.bottom{position:absolute; bottom:0; left:0;}
.mdmenu a {
display: block;
float: left;
width: 20%;
height: 40px;
text-align: center;
font-size: 1em;
line-height: 40px;
color: #fff;
}

.ico_girl{width:17px; height:24px; display:inline-block; background:url(../images/girl.png) 0 0 no-repeat; overflow:hidden;}
.ico_boy{width:20px; height:21px; display:inline-block; background:url(../images/boy.png) 0 0 no-repeat; overflow:hidden;}
.ico_v{width:24px; height:24px; display:inline-block; background:#F7AD00 url(../images/v.png) center no-repeat; color:#FFFFFF; border-radius:24px; -moz-border-radius:24px; overflow:hidden; }
.ico_v2{width:24px; height:24px; display:inline-block; background:url(../images/ico_v2.png) center no-repeat; background-size:100%; -moz-background-size:100%; overflow:hidden; }
.ico_star{width:24px; height:24px; display:inline-block; background:url(../images/ico_star.png) center no-repeat; background-size:100%; -moz-background-size:100%; overflow:hidden; }

.ico_crown{width:24px; height:19px; display:inline-block; background:url(../images/guan.png) 0 0 no-repeat; overflow:hidden;} /*王冠*/
.ico_lipin{width:38px; height:38px; display:inline-block; background:url(../images/ico_lipin.png) 0 0 no-repeat; overflow:hidden;} /*礼品*/
.ico_num{width:38px; height:38px; line-height:38px; text-align:center; display:inline-block; background:url(../images/ico_numbg.png) 0 0 repeat; font-style:normal; color:#FFFFFF; font-size:20px; font-weight:lighter; overflow:hidden;} 
/*红心和评价*/
.ico_head1,.ico_head2{width:35px; height:30px; display:inline-block; /*background:url(../images/icoList.png) 0 0 no-repeat;*/ overflow:hidden;}
.ico_head2{background-position:0 -35px;}
.ico_head3{width:32px; height:28px; display:inline-block; background:url(../images/n-cxihuan-2-tw.png) 0 0 no-repeat; overflow:hidden;}
.ico_pj1,.ico_pj2{width:35px; height:34px; display:inline-block; background:url(../images/icoList.png) -40px 0 no-repeat; overflow:hidden;}
.ico_pj2{background-position:-40px -35px;}
.ico_pj3{width:32px; height:28px; display:inline-block; background:url(../images/ico_pj3.png) 0 0 no-repeat; overflow:hidden;}

.ico_handle{width:29px; height:24px; display:inline-block; background:url(../images/ico_handle.png) 0 0 no-repeat; overflow:hidden;}
.ico_circles{width:17px; height:17px; display:inline-block; background:#C0C0C0; border-radius:50%; overflow:hidden;}

.mark_mm{white-space:nowrap; background:#F16149; padding:2px 4px; color:#fff}

.btn_orange,.btn_white{white-space:nowrap; padding:0 10px; text-align:center; display:inline-block; border-radius:4px; -moz-border-radius:4px; box-shadow:0px 1px 0px #888888; -moz-box-shadow:0px 1px 0px #888888;}
.btn_orange{min-width:61px; height:30px; line-height:30px; font-size:15px; border:solid 1px #E78626; color:#fff; background:url(../images/btn_orange.png) 0 0 repeat-x; }
.btn_white{height:30px; line-height:30px; font-size:15px; color:#000; background:url(../images/bar2.png) 0 0 repeat-x; border:solid 1px #D3D3D5}
.btn_download{width:70px; height:30px; line-height:30px; display:inline-block; text-align:center; font-size:15px; color:#ffffff; background:#5FB336; border-radius:8px; -moz-border-radius:8px; letter-spacing:4px;}
/*注意，ico_position对象的父节点必须要使用了position:relative才可以*/
/*<span class="ico_position"><i class="ico_v"></i><i class="ico_v"></i></span>*/
.ico_position{position:absolute; right:-4px; bottom:-4px;}
.ico_position2{position:absolute; right:-4px; bottom:13px;}
.ico_position i{margin:0 0 0 2px;}

/*------------------------全民热玩-修改-------------------------------*/
.gameBox{margin:17px 5px 7px 6px; padding:0; background-color:#FFFFFF; border-radius:5px; -moz-border-radius:5px; box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888; font-size:16px; overflow:hidden;}
.gameTitle_1,.gameTitle_2,.gameTitle_3,.gameTitle_4,.gameTitle_5{position:absolute; left:0; top:70%; margin-top:-38px; width:14px; padding:4px; border-radius:4px; -moz-border-radius:4px; display:inline-block; color:#fff; font-size:12px; font-weight:bold; line-height:12px;}

.gameBox .gameInfo{padding:6px 25px 15px 82px; position:relative; border-bottom:solid 1px #CCCCCC; overflow:hidden;}
.gameBox .gameImg{position:absolute; left:6px; top:8px;}
.gameBox .gameImg img{border-radius:8px; -moz-border-radius:8px;width:70px;}
.gameBox .gameName{font-size:20px; font-weight:lighter; }
.gameBox .gameplayers{margin:0; padding:5px 0 0 0;}
.gameBox .gameplayers img{width:35px; border-radius:6px; -moz-border-radius:6px; display:block;}
.gameBox .gameplayers a{margin:0 3px; float:left}
.gameBox .gameDetail img{position:absolute; top:50%; right:15px; margin-top:-15px; width:15px; height:25px; display:inline-block;}

.gameSuperPlaer{min-height:60px; position:relative; margin:0 5px; padding:7px 0px 7px 30px; border-bottom:solid 1px #CCCCCC; }
.superPlayer{width:45%; float:left;}
.superPlayer img{width:100%;}
.superInfo{width:53%; float:left; margin-left:2%; font-size:16px;}
.superFrom{margin:5px 0; color:#909090; font-size:14px; font-weight:lighter;}
.gameTitle_2{background:#F28518; }

.gameReply{position:relative; margin:0 10px; padding:20px 0 20px 30px;}
.gameTitle_3{background:#099979; }

.gameOthers{border-top:solid 1px #CCCCCC; background-color:#F5F5F5; border-radius:0 0 5px 5px;}
.gameOthers ul{background-color:#F5F5F5; width:100%;}
.gameOthers li{float:left; margin-left:-1px; width:33%; padding:5px 0; text-align:center; background-color:#F5F5F5; border-left:solid 1px #CCCCCC;color:#808080 }
.gameOthers li a{color:#ACACAC}
.gameOthers li span{display:block;}
.gameOthers .first{border-radius:0 0 0 5px; -moz-border-radius:0 0 0 5px;}
.gameOthers .last{border-radius:0 0 5px 0; -moz-border-radius:0 0 5px 0;}

/*-----------------------------------达人主页-制作-----------------------------------*/
.header { url(../images/daren_banner.png) repeat;height:20px; width:100%;}
.header img{float:left;height:20px;margin:4px 10px 2px 17px;}
.header h3{line-height: 1.5;}
.main{padding:6px;}

.darenDetail{margin:15px 0 30px 0; padding:1px 15px 5px 12px; background-color:#FFFFFF; border-radius:5px; -moz-border-radius:5px; box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888; font-size:16px; color:#666666}
.darenDetail .darenInfo{position:relative; padding-left:86px;}
.darenDetail .darenHead{width:75px; height:75px; position:absolute; left:0; top:-20px; background-color:#FFFFFF; border:solid 3px #fff; border-radius:10px; -moz-border-radius:10px;}
.darenDetail .darenHead img{width:100%; border-radius:10px; -moz-border-radius:10px;}
.darenDetail .darenGZ{min-height:70px;}
.darenInfo .darenNameSex{font-weight:bold; font-size:16px; }
.darenInfo .darenNameSex .darenSex{font-size:16px; color:#18A3E3; font-weight:lighter;}
.darenNameSex i{ margin:0 5px -5px 5px;}

.darenInfo .fans{font-size:15px; margin-top:6px;}
.darenInfo .atten{float:right;white-space:nowrap; width:90px; height:30px; line-height:30px; margin-bottom:-12px; background:url(../images/bar2.png) 0 0 repeat-x; text-align:center; font-size:17px; display:inline-block; border:solid 1px #C8C8CA; color:#000; border-radius:5px; -moz-border-radius:5px; overflow:hidden;}
.darenDetail .darenJS{font-size:16px; margin:5px auto;}
.darenDetail .playOnline{ position:relative; padding-left:35px; display:inline-block;top:-5px;}
.darenDetail .playOnline a{float:left; width:21%; margin:2%; font-size:10px; text-align:center; }
.darenDetail .playOnline a img{width:100%;  border-radius:10px; -moz-border-radius:10px; }
.gameTitle_4{background:#6ACC29; margin-top:-30px; }

.banenr img{width:100%; border-radius:5px; -moz-border-radius:5px; box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888; }

.darenMore{height:60px; padding-right:165px; font-size:20px; color:#666666; line-height:60px; position:relative; overflow:hidden;}
.darenMore .change{position:absolute; right:0; top:50%; margin-top:-30px;}
.darenMore .change img{height:40px;padding-top: 10px;}

.friendList li{float:left; width:19%; margin:1%; padding:1.9%; background:#fff; border-radius:1px; -moz-border-radius:1px; /*box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888;*/ color:#808080;box-shadow: 1px 1px 2px rgba(0,0,0,0.45); overflow:hidden;}
.friendList .darenHead2{display:block;}
.friendList .darenHead2 img{width:100%} 
.friendList .addButton{white-space:nowrap; text-overflow:ellipsis; overflow:hidden;height:20px}
.friendList .button img{width: 100%;}
.friendList li a{color:#000;}
.addButton {display:block; text-align:center; padding:5px; line-height:20px; font-size:15px;}
.addButton img{width:100%}
.darenList li{float:left; width:27%; margin:1.6%; padding:1.53%; background:#fff; border-radius:1px; -moz-border-radius:1px; /*box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888;*/ color:#808080;box-shadow: 1px 1px 2px rgba(0,0,0,0.45); overflow:hidden;}
.darenList li a{color:#000;}
.darenList .darenHead2{display:block;}
.darenList .darenHead2 img{width:100%} 
.darenList .darenNameSex2,.darenList .playOnline{white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
.darenNameSex2{display:block; text-align:center; padding:5px; height:20px; line-height:20px; font-size:15px;}
.darenNameSex2 img{height:15px; margin-left:5px;}
.darenNameSex2 i{ margin:0 0 -5px 5px;}
.darenList .playOnline{display:block; font-size:13px;}
.darenList .playOnline .ganmeName{/*margin-left:5px;*/ white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}

/*----------------------------------个人主页-粉丝-----------------------------------*/
.playerBanner{width:100%; position:relative; margin:0; padding:0;}
.playerBanner img{width:100%; margin:0; padding:0;}
.playerBanner .headCount{position:absolute; top:50%; right:10px; width:55px; height:80px; margin-top:-60px; background:rgba(31,8,16,0.8); border-radius:30px; -moz-border-radius:30px; color:#FF4133; text-align:center;}
.playerBanner .headCount i{margin-top:10px; margin-left:5px;}

/*------ 个人主页头部信息 start */
.playerInfo{margin:0; margin-top:-40px; position:relative; z-index:10;}
.playerInfo_cont{background:#fff; padding:10px;padding-bottom: 0px;}
.playerInfo .NameSex{padding:0 0 0 120px; height:40px; line-height:37px; background:url(../images/Transparent.png) 0 0 repeat; font-size:14px;}
.playerInfo .NameSex i{margin:-3px 3px;}
.playerInfo .head{position:absolute; top:-19px;}
.playerInfo .head img{border-radius:10px; -moz-border-radius:10px; width:100px; }
.playerInfo .lygz{margin-left:130px; min-height:35px; margin-top:0px; }
.playerInfo .lygz a{width:50px; }
.playerInfo .jianjie{font-size:14px; margin:10px 0; color:#666666}
.playerInfo .laifang{position:relative; padding-left:30px; display:inline-block; width: 90%;}
.playerInfo .laifang a{float:left; width:55px; margin:5px; font-size:10px; text-align:center; color:#808080; position:relative;}
.playerInfo .laifang a img{width:100%; border-radius:12px; -moz-border-radius:12px; }
.playerInfo .laifang .playerName{}
.gameTitle_5{background:#F28518; margin-top:-30px; margin-left:5px;}
/*------ 个人主页头部信息 end*/

/*------ 游戏详情页头部信息 start */
.appInfo{margin:0; margin-top:-40px; position:relative; z-index:10;}
.appInfo_cont{background:#fff; padding:10px;}
.appInfo .NameSex{padding:0 0 0 120px; height:40px; line-height:37px; background:url(../images/Transparent.png) 0 0 repeat; font-size:14px;}
.appInfo .NameSex i{margin:-3px 3px;}
.appInfo .head{position:absolute; top:-30px;}
.appInfo .head img{border-radius:10px; -moz-border-radius:10px; width:100px; }
.appInfo .lygz{margin-left:110px; min-height:35px; margin-top:-5px; }
.appInfo .lygz a{width:30%; margin:0 7% 0 0;}
.appInfo .jianjie{font-size:16px; margin:10px 0; color:#666666}
.appInfo .laifang{position:relative; padding-left:30px; display:inline-block; }
.appInfo .laifang a{float:left; width:20%; margin:5px 2%; font-size:10px; text-align:center; color:#808080; position:relative;}
.appInfo .laifang a img{width:100%; border-radius:12px; -moz-border-radius:12px; }
.appInfo .laifang .playerName{}
.gameTitle_5{background:#F28518; margin-top:-30px; margin-left:5px;}
/*------ 游戏详情页头部信息 end*/

.playerTab{border-bottom:solid 1px #CCCCCC; font-size:16px; background-color:#FFFFFF}
.playerTab ul{width:100%;}
.playerTab li{float:left; width:50%; padding:10px 0; text-align:center; background:url(../images/line.png) left center no-repeat; background-size:1px 60%;-moz-background-size:1px 50%; margin-left:-1px;}
.playerTab li a{color:#808080}
.playerTab li span{display:block; hite-space:nowrap;}
.playerTab li.current{border-bottom:solid 2px #F28518; color:#F28518}
.playerTab li.current a{color:#F28518}

.playerOnline{min-height:100px; padding:15px 35px 15px 115px; background-color:#FAFAFA; font-size:15px; font-weight:lighter; position:relative; border-bottom:solid 1px #E0E0E0; }
.playerOnline .playerHead{position:absolute; left:7px; top:50%; margin-top:-50px;}
.playerOnline img{border-radius:8px; -moz-border-radius:8px;}

.playerOnline .playNow{width:100%; font-size:15px;}
.playerOnline .playNow div{height:25px; margin:5px 0;}
.playerOnline .playNow .pName{height:30px; line-height:30px; font-size:17px;}
.playerOnline .playNow .addrFs{ color:#666666}
.playerOnline .playNow .fensi{margin-left:30px;}

.playerOnline .gameDetail{position:absolute; top:50%; right:10px; margin-top:-15px; width:19px; height:30px; display:inline-block;}
.load{background:#DDDDDD; height:40px; line-height:40px; text-align:center; font-size:16px; color:#999}
/*----------------------------------个人主页-战绩-----------------------------------*/
.dtMain{/*padding:10px;*/}
.dtMain .title_small{color:#666666; font-size:16px; margin:0;}

.dtMain .Tongwan,.dtMain .userPlayInfo{margin:10px 0 20px 0; background-color:#fff; border-radius:5px; -moz-border-radius:5px; box-shadow:0px 4px 4px #888888; -moz-box-shadow:0px 4px 4px #888888;  display:inline-block; font-size:15px;}
.dtMain .userPlayInfo{width:100%;}
.dtMain .userPlayInfo .cont{padding:2%;}

.dtMain .date_PJ{display:block; padding:5px 0; line-height:30px; color:#808080; font-size:13px;}
.dtMain .date_PJ .date{white-space:nowrap;}
.dtMain .date_PJ .pj{float:right;}
.dtMain .date_PJ .pj i{margin-left:35px; margin-right:3px; margin-bottom:-10px;}

.Tongwan{width:96%; padding:2%;}
.Tongwan a{float:left; width:18%; margin:2%; font-size:10px; text-align:center; color:#808080}
.Tongwan a img{width:100%;  border-radius:12px; -moz-border-radius:12px; }

.userPlayInfo .gameShow{min-height:100px; padding:0 85px 0 110px; font-size:15px; font-weight:lighter; position:relative; }
.userPlayInfo .gameShow .gameLogo{position:absolute; left:0; top:50%; margin-top:-50px;}
.userPlayInfo .gameShow .gameLogo img{border-radius:8px; -moz-border-radius:8px;}

.userPlayInfo .playNow{width:100%; font-size:15px;}
.userPlayInfo .playNow div{height:25px; margin:5px 0;}
.userPlayInfo .playNow .gName{height:30px; line-height:30px; font-size:17px;}
.userPlayInfo .playNow .sumTime{ color:#666666}

.userPlayInfo .gameShow .tjzj{position:absolute; top:50%; right:0; margin-top:-15px; display:inline-block;}
.userPlayInfo .liuyan{background:#F0F0F0; color:#808080; padding:7px; margin:10px 0;}
.userPlayInfo .showinfo{font-size:17px;}
.userPlayInfo .showinfo p{line-height:120%; margin:5px 0;}
.userPlayInfo .showinfo img{margin:2%; width:45%;}
.userPlayInfo .more{color:#8A8A8A; text-align:center; background:#F5F5F5; border-top:solid 1px #E0E0E0; border-radius:0 0 5px 5px; -moz-border-radius:5px; padding:10px 0; }
.userPlayInfo .more a{color:#000000}


/* -------------------- 11页面 ----------------------*/
.showplayTab{border-bottom:solid 1px #C1C1C1; font-size:16px; background-color:#FFFFFF; margin-bottom:15px; box-shadow:0px 1px 0px #AAA5A0}
.showplayTab ul{width:100%;}
.showplayTab li{float:left; width:20%; padding:10px 0; margin:0 5%; text-align:center; margin-left:-1px;}
.showplayTab li a{color:#a3a3a3}
.showplayTab li.current{border-bottom:solid 2px #ff9400; color:#ff9400}
.showplayTab li.current a{color:#ff9400}

.ganmePlayInfo{background:#fff; margin-bottom:15px; border-bottom:solid 1px #fff; box-shadow:1px 1px 2px rgba(0,0,0,0.45);margin-top: 7px;}
.ganmePlayInfo .cont{padding:5px; padding-left:90px; position:relative;}
.ganmePlayInfo .gameShow{min-height:75px; padding:5px 5px 5px 90px; font-size:15px; font-weight:lighter; position:relative; }
.ganmePlayInfo .gameShow .user_header{width:75px; height:75px; position:absolute; left:5px; top:70%; margin-top:-50px; z-index:100}
.ganmePlayInfo .gameShow .user_header img{width:100%; border-radius:50%; -moz-border-radius:50%;}
.ganmePlayInfo .playNow{width:100%; font-size:19px;}
/*.ganmePlayInfo .playNow div{height:25px; margin:6px 0;}*/
.ganmePlayInfo .playNow .gName{height:40px; line-height:40px; font-size:1em;}
.ganmePlayInfo .gameShow .gamedown{position:absolute; top:50%; right:5px; margin-top:-20px; display:inline-block;}
.ganmePlayInfo .gameShow .gamedown a{color:#fff}

.ganmePlayInfo .timeBar{position:absolute; left:42px; top:-30px; height:290px; width:3px; background:#DDDDDD; height:82%}
.ganmePlayInfo .playershow{position:absolute; left:-62px; top:50%; margin-top:-12px; width:28px; height:15px;}
.ganmePlayInfo .currentday{position:absolute; left:-56px; top:50%; margin-top:-5px; width:80px; font-size:15px; color:#C0C0C0; z-index:50}
.ganmePlayInfo .currentday i{margin-right:2px; float:left;}

.ganmePlayInfo .playing_users{padding:5px; position:relative}
.ganmePlayInfo .playing_users{display:block; border:solid 1px #D4D4D4;height: 40px;}
.ganmePlayInfo .playing_users a{float:left; width:40px; margin-right:2px; margin-bottom:3px}/*width:50px; margin:3px;*/
.ganmePlayInfo .playing_users img{width:100%; border-radius:50%; -moz-border-radius:50%;}

.userLeaveBox{margin:10px 0 0 0; padding:5px; border:solid 1px #CCCCCC; position:relative;}
.userLeaveBox .gameimg{float:left; /*width:40%;*/ max-width:100px; max-height: 64px; overflow:hidden;}
/*.userLeaveBox .gameimg img{width:100%;}*/
.userLeaveBox .leaveInfo{/*float:left; width:57%;*/  margin-left:110px; color:#000}
.userLeaveBox .lenveTxt{/*font-size:19px; font-weight:bold; color:#000;*/ height: 43px; overflow:hidden; }
.userLeaveBox .infoFrom{color:#5c5c5c;}

.ganmePlayInfo .user_pingjia{height: 18px; margin:5px 0 10px 0; position:relative; text-align:right;}
.ganmePlayInfo .user_pingjia i{ position:relative; top:7px; margin-right:5px; margin-left:15px;}
.ganmePlayInfo .user_pingjia img{ width: 18px;}

.ganmePlayInfo .more{color:#8A8A8A; text-align:center; background:#F5F5F5; border-top:solid 1px #E0E0E0; border-radius:0 0 5px 5px; -moz-border-radius:5px; padding:10px 0;}


/*----------------排行 -----------------*/
.paihangTab{margin:10px 0 0 0;}
.paihangTab{background:#EAEAEA; color:#898989; font-size:16px; }
.paihangTab ul{width:100%;}
.paihangTab li{float:left; width:50%; text-align:center; padding:10px 0; text-align:center; }
.paihangTab li a{color:#808080; letter-spacing:20px; margin-left:20px;}
.paihangTab li.current{background:#fff; color:#000}
.paihangTab li.current a{color:#F28518}

.paihangList{background:#fff;}
.paihangList li{min-height:60px; padding:10px 15px 10px 120px; font-size:15px; font-weight:lighter; position:relative; border-bottom:solid 1px #E0E0E0; }
.paihangList .sortNum{width:30px; height:30px; line-height:40px; display:inline-block; text-align:center; font-size:23px; font-weight:bold; overflow:hidden; position:absolute; left:10px; top:56%; margin-top:-20px;}
.paihangList .sortNum img{width:100%; display:block;}
.paihangList .playerHead{width:50px; height:50px; position:absolute; left:50px; top:50%; margin-top:-24px;}
.paihangList .playerHead img{width:100%; border-radius:8px; -moz-border-radius:8px;}
.paihangList .playTime {margin-top: 10px;margin-left: -10px;}
.paihangList .playTime .userName{display:block; font-size:14px; color:#000}
.paihangList .playTime .onlineTime{display:block; font-size:16px; color:#642318}
.paihangList .detail{position:absolute; top:50%; right:5px; margin-top:-15px; width:19px; height:30px; display:inline-block;}

/*排行2*/
.paihangList2 li{padding-right:50px;}
.paihangList .ph_gameHead{width:100px; height:60px; position:absolute; right:5px; margin-top:-42px; display:inline-block; overflow:hidden}
.paihangList .ph_gameHead img{width:100%;}


/*礼包*/
.leftRate{
	height:2px;
	float:left;
	width:120px;
	border-radius:10px;
	border:1px solid #ddd;
	background-color:#ddd;
	}
	.giftMess{
		width:100%;
		padding-left:7px;
		float:left;
		clear:both;
		border-top:1px #ddd solid;
	}
	.giftMessHref{
		width:78%;
		margin-top:5px;
		margin-bottom:3px;
		clear:left;
		float:left;
	}
	.giftMessHref span{
		float:left;
		clear:right;
		font-size:12px;
	}
	.giftMessHrefMiddle{
		margin-top:5px;
		float:left;
		clear:both;
		color:gray;
	}
	
	.leftRateShow{
	margin-top:-1px;
	margin-left:-1px;
	border-radius:10px;
	border:2px #FF9900 solid;
	}
	.giftMessHrefMiddle span{
	margin-top:-2px;
	margin-left:3px;
	font-size:10px;
	color:#FF9900;
	float:left;
	}
	.giftMessHrefBottom{
		margin-top:2px;
		color:gray;
		font-size:10px;
		float:left;
		clear:both;
	}
	.giftMess input[type="button"]{
	width:50px;
	height:30px;
	margin-top:10px;
	margin-right:15px;
	font-size:13px;
	background-color:#ddd;
	border:1px solid #ddd;
	float:right;
	clear:right;
	}
	.jihuoCode{
		width:100%;
		height:30px;
		margin-top:5px;
		//border:1px solid blue;
		//text-align:center;
		clear:both;
		}
		
	.jihuoCode span{
		width:65%;
		margin-left:10%;
		line-height:30px;
		height:30px;
		//text-align:center;
		float:left;
		color:orange;
		background-color:gray;
		//border:1px solid red;
	}/*
	.jihuoCode span {
		margin-top: 5px;
		width: 50%;
		height: 30px;
		color: orange;
		background-color: gray;
	}*/
	.jihuoCode img{
		width:15%;
		height:30px;
	}
	

	.WX-quicklyLog-wrapper {
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 999;
text-align: center;
}
.WX-quicklyLog-btn:visited {
color: #FFF;
}

.WX-quicklyLog-btn {
display: inline-block;
border: #d77801 solid 1px;
border-color: #e86b0f;
margin: 0 0 0 5px;
padding: 0 10px;
line-height: 25px;
font-size: .75rem;
vertical-align: middle;
color: #FFF;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
background-color: #ff8200;
}

.WX-quicklyLog-txt {
display: inline-block;
font-size: .9375rem;
color: #FFF;
}
.WX-quicklyLog-txt span{
color: wheat;
}
.WX-quicklyLog-close {
display: inline-block;
margin-left: 5px;
}
.WX-quicklyLog-txt img {
margin: 0 10px -10px 0;
width: 32px;
height: 28px;
}
#tinybox{position:absolute; display:none; padding:0px; background:transparent; z-index:2000;}
#tinymask{position:absolute; display:none; top:0; left:0; height:100%; width:100%; background:#000000; z-index:1500;}
#tinycontent{background:transparent; font-size:1.1em;}