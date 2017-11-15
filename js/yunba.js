$(function(){

	console.log(); 


// setInterval(function(){
// 	for(i=0;i<4;i++){
// 		if($(".modal-body-reg input").eq(i).val()==""||$(".modal-body-reg input").eq(4).checked==0){
// 			$(".btn-creat").addClass("disabled");
			
// 			return false;
// 		}else{
// 			$(".btn-creat").removeClass("disabled");
			
// 		}

// 	}
// }, 1000);

// $(".modal-body-reg input").eq(0).on("blur",function(){
	
	
// })
function validation($this,reg){
	reg_space=/^\s$/;
	if($this.val()==""){
		
		$(".warning").html("不能为空哦！");

	}else{	
		// x0=reg_space.test($this.val());
		// if(x0){
		// 	console.log("不要空格");
		// }else{
			x=reg.test($this.val());
			if(x){
			
			
			}else{
				
				$(".warning").html("不符合格式");

			}
		// }
		
	}
}


$(".modal-body-reg input").eq(4 ).on('click',function (){
	if( $(this).is(":checked") ){
		$('.btn-creat').removeClass('disabled');
		$('.btn-creat').on("click",function(){
			reg_space=/^\s$/;
			reg_email = /^\w+@[0-9a-z]+\.[a-z]{2,3}$/g;
			reg_user =/^.[^\s]{1,8}$/
			reg_pass =/^.[^\s]{6,18}$/
			validation($(".modal-body-reg input").eq(0),reg_email);
			validation($(".modal-body-reg input").eq(1),reg_user);
			validation($(".modal-body-reg input").eq(2),reg_pass);
			if($(".modal-body-reg input").eq(3).val()==$(".modal-body-reg input").eq(2).val()){}else{
			
				$(".warning").html("密码前后不一样");

			}
		})
	}else{
		$('.btn-creat').addClass('disabled');
	}
})
	
$(".home-show-video").on("click",function(){
	$(".video")[0].play();
	$(".fixed-video").css({"display":"block"})
})	
$(".fixed-video span").on("click",function(){
	$(".video")[0].pause();
	$(".fixed-video").css({"display":"none"});

})
})