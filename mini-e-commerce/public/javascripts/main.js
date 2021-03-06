var register,login,addcommodity,addCart, delCart;

register = function(){
	var data  = {};
	data.username = $('#username').val();
	data.password = $('#password').val();
	data.password1 = $('#password1').val();

	$.ajax({
		url: 'register',
		type: 'POST',
		data: data,
		success: function(data, status){
			if(status == 'success'){
				location.href = 'login';
			}
		},
		error: function(data, status){
			location.href = 'register';
		}
	});
};

login = function(){
	var data = {};
	data.username = $('#username').val();
	data.password = $('#password').val();

	$.ajax({
		url: 'login',
		type: 'POST',
		data: data,
		success: function(data, status){
			if(status == 'success'){
				location.href = 'home';
			}
		},
		error: function(data, status){
			location.href='login';
		}
	});
};


addcommodity = function(){
	var data = {};
	data.name = $('#name').val();
	data.price = $('#price').val();

	$.ajax({
		url: 'addcommodity',
		type: 'POST',
		data: data,
		success: function(data, status){
			location.href='home';
		},
		error: function(data, status){
			location.href='addcommodity';
		}
	});
};

addCart = function(_id){
	var data = {};
	data._id = _id;
	$.ajax({
		url: 'addCart',
		type: 'POST',
		data: data,
		success: function(data, status){
			location.href = "cart";
		},
		error: function(data, status){
			location.href = 'home'
		}
	});	
};

delCart = function(_id){
	var data = {
		_id: _id
	};
	$.ajax({
		url: 'delCart',
		type: 'POST',
		data: data,
		success: function(data, status){
			location.href  = 'cart';
		},
		error: function(data,status){
			location.href = 'cart';
		}
	});

};
