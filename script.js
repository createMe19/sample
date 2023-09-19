$(document).ready(function () {
	$("#txtEmail").blur(function () {
		var exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var email = $("#txtEmail").val();

		if (exp.test(email) == true) {
			$(this).css("border", "2px solid green");
		} else {
			$(this).css("border", "2px solid red");
		}
	});
    $("#txtEmail1").blur(function () {
		var exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var email = $("#txtEmail1").val();

		if (exp.test(email) == true) {
			$(this).css("border", "2px solid green");
		} else {
			$(this).css("border", "2px solid red");
		}
	});

	$("#pswd").blur(function () {
		var pass = $("#pswd").val();
		var r = /(?=^.{8}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		if (r.test(pass) == true) {
			$(this).css("border", "2px solid green");
		} else {
			$(this).css("border", "2px solid red");
		}
	});

    $("#pswd1").blur(function () {
		var pass = $("#pswd1").val();
		var r = /(?=^.{8}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		if (r.test(pass) == true) {
			$(this).css("border", "2px solid green");
		} else {
			$(this).css("border", "2px solid red");
		}
	});

    $("#txtName").blur(function () {
		var pass = $("#txtName").val();
        var r=/^[a-zA-Z ]*$/;
		if (r.test(pass) == false || pass.length=="") {
			$(this).css("border", "2px solid red");
		} else {
			$(this).css("border", "2px solid green");
		}
	});

	$(".fa").mouseenter(function () {
		$("#pswd").prop("type", "text");
		$(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
	});

	$(".fa").mouseleave(function () {
		$("#pswd").attr("type", "password");
		$(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
	});

    $(".fa").mouseenter(function () {
		$("#pswd1").prop("type", "text");
		$(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
	});

	$(".fa").mouseleave(function () {
		$("#pswd1").attr("type", "password");
		$(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
	});

	$("#signUp").click(function () {
		// alert("hello");
		$("#left-hide").fadeIn(1000);
		$("#left-div").hide();
		$("#right-div").hide();
		$("#right-hide").slideDown();

	});
	$("#signIn").click(function () {
		// alert("hello");
		$("#left-div").fadeIn(1000);
		$("#left-hide").hide();
		$("#right-hide").hide();
		$("#right-div").slideDown();

	});


});