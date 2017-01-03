angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$rootScope', '$stateParams', '$ionicLoading', '$ionicPopup', '$state', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $ionicLoading, $ionicPopup, $state, ServiceGeneral) {
	// Trae Los datos del usuario
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	if (userData != null && userData.id != "") {
		if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
			// brm = 2
			$rootScope.statusListBrief = false;
			$rootScope.statusAddBrief = false;
		} else{
			// cliente = 1 y 3
			$rootScope.statusListBrief = true;
			$rootScope.statusAddBrief = true;
		};
	}
	$scope.goAddBrief = function(){
		$state.go("crearBriefP1");
	}
	
	// Cerrar sesión
	$scope.logout = function(){
		localStorage.removeItem('us3r4ppBr13f');
		$state.go('tipoUsuario');
	}

	$scope.go = function (ruta){
		$state.go(ruta);
	}

	$scope.goListBrief = function (){
		$state.go("consultaTusBriefs");
	}
}])
  
.controller('activosCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
		// brm = 2
		$rootScope.statusAddBrief = false;
		$rootScope.statusListBrief = true;
	} else{
		// cliente = 1 y 3
		$rootScope.statusAddBrief = true;
		$rootScope.statusListBrief = false;
	};
	$scope.briefs = [];
	var idEstado = 1;

	// Refresh
	$scope.doRefresh = function() {
		listaBrief(true);
	};

	// Lista de briefs
	var listaBrief = function(reiniciar){
		var idMarca = ($rootScope.idMarcaG && parseInt($rootScope.idMarcaG) > 0) ? parseInt($rootScope.idMarcaG) : "" ;
		var desde = 0;
		$ionicLoading.show({
			template: 'Cargando...'
		});
		var parameters = {
			accion : "getBrief",
			idUsuario: userData.id,
			idMarca: idMarca,
			idEstado: idEstado,
			desde: desde
		};
		ServiceGeneral.post(parameters)
		.then(function(result){
			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
			if(result.error == 1){
				$scope.briefs = result.data;
			}else{
				console.log("error","Ocurrio un error");
			}
		},function(err){
			$ionicLoading.hide();
		});
	}

	// Inicial
	listaBrief(false);

	// Selecciona un brief
	$scope.selectBrief = function(idBrief){
		if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
			// brm = 2 
			$state.go("brmInternaBrief",{idBrief:idBrief});
		} else{
			// cliente = 1 y 3
			$state.go("internaBrief",{idBrief:idBrief});
		};
	}
}])
   
.controller('pendientesCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
		// brm = 2
		$rootScope.statusAddBrief = false;
	} else{
		// cliente = 1 y 3
		$rootScope.statusAddBrief = true;
	};
	$scope.briefs = [];
	$scope.estadoScroll = false;
	var idEstado = 2;

	// Refresh
	$scope.doRefresh = function() {
		listaBrief(true);
	};

	// Lista de briefs
	var listaBrief = function(reiniciar){
		var idMarca = ($rootScope.idMarcaG && parseInt($rootScope.idMarcaG) > 0) ? parseInt($rootScope.idMarcaG) : "" ;
		var desde = 0;
		$ionicLoading.show({
			template: 'Cargando...'
		});
		var parameters = {
			accion : "getBrief",
			idUsuario: userData.id,
			idMarca: idMarca,
			idEstado: idEstado,
			desde: desde
		};
		ServiceGeneral.post(parameters)
		.then(function(result){
			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
			if(result.error == 1){
				$scope.briefs = result.data;
			}else{
				console.log("error","Ocurrio un error");
			}
		},function(err){
			$ionicLoading.hide();
		});
	}

	// Inicial
	listaBrief(false);

	// Selecciona un brief
	$scope.selectBrief = function(idBrief){
		if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
			// brm = 2 
			$state.go("brmInternaBrief",{idBrief:idBrief});
		} else{
			// cliente = 1 y 3
			$state.go("internaBrief",{idBrief:idBrief});
		};
	}
}])
   
.controller('cerradosCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
		// brm = 2
		$rootScope.statusAddBrief = false;
	} else{
		// cliente = 1 y 3
		$rootScope.statusAddBrief = true;
	};
	$scope.briefs = [];
	$scope.estadoScroll = false;
	var idEstado = 3;

	// Refresh
	$scope.doRefresh = function() {
		listaBrief(true);
	};

	// Lista de briefs
	var listaBrief = function(reiniciar){
		var idMarca = ($rootScope.idMarcaG && parseInt($rootScope.idMarcaG) > 0) ? parseInt($rootScope.idMarcaG) : "" ;
		var desde = 0;
		$ionicLoading.show({
			template: 'Cargando...'
		});
		var parameters = {
			accion : "getBrief",
			idUsuario: userData.id,
			idMarca: idMarca,
			idEstado: idEstado,
			desde: desde
		};
		ServiceGeneral.post(parameters)
		.then(function(result){
			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
			if(result.error == 1){
				$scope.briefs = result.data;
			}else{
				console.log("error","Ocurrio un error");
			}
		},function(err){
			$ionicLoading.hide();
		});
	}

	// Inicial
	listaBrief(false);

	// Selecciona un brief
	$scope.selectBrief = function(idBrief){
		if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
			// brm = 2 
			$state.go("brmInternaBrief",{idBrief:idBrief});
		} else{
			// cliente = 1 y 3
			$state.go("internaBrief",{idBrief:idBrief});
		};
	}
}])
     
.controller('loginCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	$scope.tipoUsuario = $stateParams.tipoUsuario;
	$scope.usuario = {};
	$scope.login = function(){
		// Tipo de usuario: cliente -> 3, brm -> 2
		if ($scope.usuario && $scope.usuario.user && $scope.usuario.user != "" && $scope.usuario.pass && $scope.usuario.pass != "") {
			$ionicLoading.show({
				template: 'Cargando...'
			});
			var playerId = JSON.parse( window.localStorage.getItem('pl4y3r1dBr13f'));
			var parameters = {
				accion : "login",
				usuario : $scope.usuario.user,
				password : $scope.usuario.pass,
				tipoUsuario : parseInt($scope.tipoUsuario),
				regId : playerId
			};
			ServiceGeneral.post(parameters)
			.then(function(result){
				$ionicLoading.hide();
				if(result.error == 1){
					// Reiniciamos variables
					$scope.usuario.user = "";
					$scope.usuario.pass = "";
					// Guardamos datos del usuario
					window.localStorage.setItem('us3r4ppBr13f', JSON.stringify(result.data));
					// Redireccionamos dependiendo el tipo de usuario
					if (result.data.idTipoUsuario == 2 || result.data.idTipoUsuario == "2") {
						// brm = 2 
						$state.go('consultaTusBriefs');
					} else{
						// cliente = 1 y 3
						$state.go('tabsController.activos');
					};
				}else{
					$ionicPopup.alert({
						title: 'Usuario incorrecto',
						template: 'El usuario no es correcto'
					});
				}
			},function(err){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: 'Sin conexión a Internet',
					content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
				});
			});
		}else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				template: 'Por favor ingrese Usuario y contraseña'
			});
		}
	}
}])

.controller('invitadoCtrl', ['$scope', '$rootScope', '$ionicHistory', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $ionicHistory, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	$scope.usuario = {};
	$scope.login = function(){
		if ($scope.usuario && $scope.usuario.nombre && $scope.usuario.nombre != "" && $scope.usuario.email && $scope.usuario.email != "" && $scope.usuario.password && $scope.usuario.password != "") {
			$ionicLoading.show({
				template: 'Cargando...'
			});
			var playerId = JSON.parse( window.localStorage.getItem('pl4y3r1dBr13f'));
			var parameters = {
				accion : "setInvitado",
				nombre : $scope.usuario.nombre,
				email : $scope.usuario.email,
				password : $scope.usuario.password,
				regId : playerId
			};
			ServiceGeneral.post(parameters)
			.then(function(result){
				$ionicLoading.hide();
				if(result.error == 1){
					// Reiniciamos variables
					$scope.usuario.nombre = "";
					$scope.usuario.email = "";
					$scope.usuario.password = "";
					// Quitar el back
					$ionicHistory.nextViewOptions({
						disableBack: false,
						historyRoot: true
					});
					// Guardamos datos del usuario
					window.localStorage.setItem('us3r4ppBr13f', JSON.stringify(result.data));
					// Redireccionamos
					$state.go('tabsController.activos');
				}else{
					$ionicPopup.alert({
						title: 'Ocurrió un error al ingresar',
						template: ''
					});
				}
			},function(err){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: 'Sin conexión a Internet',
					content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
				});
			});
		}else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				template: 'Por favor ingrese nombre email y contraseña'
			});
		}
	}
}])

.controller('tipoUsuarioCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	$rootScope.idMarcaG = "";
	$rootScope.idMarcaG = "";
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	if (userData && parseInt(userData.id) > 0) {
		// Redireccionamos dependiendo el tipo de usuario
		if (userData.idTipoUsuario == 2 || userData.idTipoUsuario == "2") {
			// brm = 2 
			$state.go('consultaTusBriefs');
			$rootScope.statusAddBrief = false;
			$rootScope.statusListBrief = true;
		} else{
			// cliente = 1 y 3
			$state.go('tabsController.activos');
			$rootScope.statusAddBrief = true;
			$rootScope.statusListBrief = false;
		};
	} else{

	};
	$scope.onSelectTipoUsuario = function(idTipoUsuario){
		$state.go("login",{tipoUsuario: idTipoUsuario});
	}
}])

.controller('internaBriefCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	// 
	$rootScope.statusListBrief = false;
	var idBrief = $stateParams.idBrief;
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	var parameters = {
		accion : "getBrief",
		idUsuario: userData.id,
		idBrief: idBrief,
		idMarca: 0,
		idEstado: 0,
		desde: 0
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			$scope.brief = result.data[0];
		}else{
			console.log("error","Ocurrio un error");
		}
	},function(err){
		$ionicLoading.hide();
	});


	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
		viewData.enableBack = true;
	});
}])

.controller('consultaTusBriefsCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	$rootScope.statusListBrief = false;
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	var idUsuario = userData.id;
	$ionicLoading.show({
		template: 'Cargando...'
	});
	var parameters = {
		accion : "getMarca",
		idUsuario : idUsuario
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			$scope.marcas = result.data;
		}else{
			$ionicPopup.alert({
				title: 'Ocurrio un error al traer las marcas',
				template: ''
			});
		}
	},function(err){
		$ionicLoading.hide();
		$ionicPopup.alert({
			title: 'Sin conexión a Internet',
			content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
		});
	});


	// Selecciona 
	$scope.next = function(idMarca){
		$rootScope.idMarcaG = idMarca;
		$state.go('tabsController.activos');
	}
}])

.controller('brmInternaBriefCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	$rootScope.statusListBrief = true;
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	var idUsuario = userData.id;
	var idBrief = $stateParams.idBrief;
	var parameters = {
		accion : "getBrief",
		idUsuario: idUsuario,
		idBrief: idBrief,
		idMarca: 0,
		idEstado: 0,
		desde: 0,
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			$scope.brief = result.data[0];
		}else{
			console.log("error","Ocurrio un error");
		}
	},function(err){
		$ionicLoading.hide();
	});
	
	$ionicLoading.show({
		template: 'Cargando...'
	});
	var parameters = {
		accion : "setVistoBrm",
		idUsuario : idUsuario,
		idBrief : idBrief
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			console.log("SetVisto Correctamente");
		}
	},function(err){
		$ionicLoading.hide();
		$ionicPopup.alert({
			title: 'Sin conexión a Internet',
			content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
		});
	});

	$scope.goProgramar = function(idBrief){
		$state.go("programarReunion",{idBrief: idBrief});
	}

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
		viewData.enableBack = true;
	});
	$scope.asd = function (){
		alert(123);
	}
}])
   
.controller('crearBriefP1Ctrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral','SetBriefData',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral,SetBriefData) {
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	var idUsuario = userData.id;
	$rootScope.statusAddBrief = false;
	$ionicLoading.show({
		template: 'Cargando...'
	});
	var parameters = {
		accion : "getMarca",
		idUsuario : idUsuario
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			$scope.marcas = result.data;
		}else{
			$ionicPopup.alert({
				title: 'Ocurrio un error al traer las marcas',
				template: ''
			});
		}
	},function(err){
		$ionicLoading.hide();
		$ionicPopup.alert({
			title: 'Sin conexión a Internet',
			content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
		});
	});
	$scope.next = function(idMarca){
		SetBriefData.setMarca(idMarca);
		$state.go("crearBriefP2");
	}
}])
   
.controller('crearBriefP2Ctrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral','SetBriefData',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral,SetBriefData) {
	$scope.next = function(data){
		if (data && data.titulo && data.titulo != "" && data.fechaPropuesta && data.fechaPropuesta != "" && data.objetivo && data.objetivo != "") {
			SetBriefData.setObjetivo(data);
			$state.go("crearBriefP3");
		} else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				template: 'Verifique que los datos esten completos'
			});
		};	
	}
}])
   
.controller('crearBriefP3Ctrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral','SetBriefData',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral,SetBriefData) {
	$scope.next = function(data){
		if (data && data != "") {
			SetBriefData.setResultado(data);
			$state.go("crearBriefP4");
		} else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				template: 'Verifique que los datos esten completos'
			});
		};
	}
}])
   
.controller('crearBriefP4Ctrl', ['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral','SetBriefData',
function ($scope, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral,SetBriefData) {
	$scope.guardarBrief = function(data){
		if (data && data != "") {
			SetBriefData.setEmpatia(data);
			brief = SetBriefData.getData();
			var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
			brief.idUsuario = userData.id;
			brief.accion = "setBrief";
			$ionicLoading.show({
				template: 'Cargando...'
			});
			var parameters = brief;
			ServiceGeneral.post(parameters)
			.then(function(result){
				$ionicLoading.hide();
				if(result.error == 1){
					$ionicPopup.alert({
						title: 'Acción exitosa',
						template: 'Creó brief correctamente'
					});
					$state.go("tabsController.activos");
				}else{
					$ionicPopup.alert({
						title: 'Ocurrio un error al traer las marcas',
						template: ''
					});
				}
			},function(err){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: 'Sin conexión a Internet',
					content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
				});
			});
		} else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				template: 'Verifique que los datos esten completos'
			});
		};
	}
}])

.controller('programarReunionCtrl', ['$scope', '$filter', '$rootScope', '$stateParams', '$state', '$ionicLoading', '$ionicPopup', 'ServiceGeneral',
function ($scope, $filter, $rootScope, $stateParams, $state, $ionicLoading, $ionicPopup, ServiceGeneral) {
	var userData = JSON.parse( window.localStorage.getItem('us3r4ppBr13f'));
	var idUsuario = userData.id;
	var idBrief = $stateParams.idBrief;
	$scope.programarData = {};
	$scope.programarData = {};
	var parameters = {
		accion : "getBrief",
		idUsuario: idUsuario,
		idBrief: idBrief,
		idMarca: 0,
		idEstado: 0,
		desde: 0
	};
	ServiceGeneral.post(parameters)
	.then(function(result){
		$ionicLoading.hide();
		if(result.error == 1){
			var res = result.data[0];
			$scope.tipoCompromiso = (res.idTipoCompromiso && parseInt(res.idTipoCompromiso) > 0) ? res.idTipoCompromiso : 2;
			console.log("res.fechaCompromiso",res.fechaCompromiso);
			var myDate = new Date(res.fechaCompromiso);
			myDate.setDate(myDate.getDate() + 1);
			$scope.programarData.fechaCompromiso = (res && res.fechaCompromiso && res.fechaCompromiso != "") ? myDate  : "";
			$scope.programarData.horaCompromiso = (res && res.horaCompromiso && res.horaCompromiso != "") ? new Date('2016-01-01 '+res.horaCompromiso) : "";
		}else{
			console.log("error","Ocurrio un error");
		}
	},function(err){
		$ionicLoading.hide();
	});
	

	/* Lugares
		Llamada -> 1
		BRM -> 2
		Cliente -> 3
	*/

	$scope.selTipoCompromiso = function(idTipoCompromiso){
		$scope.tipoCompromiso = idTipoCompromiso;
	}

	$scope.programar = function (programar){
		if (programar && programar.fechaCompromiso && programar.fechaCompromiso != "" && programar.horaCompromiso && programar.horaCompromiso != "" && programar.mensaje && programar.mensaje != "") {
			$ionicLoading.show({
				template: 'Cargando...'
			});
			var fechaCompromiso = $filter('date')(programar.fechaCompromiso, "yyyy-MM-dd");
			var horaCompromiso = $filter('date')(programar.horaCompromiso, "HH:mm:ss");
			var parameters = {
				accion : "setCompromiso",
				idUsuario : idUsuario,
				idBrief: idBrief,
				fechaCompromiso: fechaCompromiso,
				horaCompromiso: horaCompromiso,
				mensaje: programar.mensaje,
				idTipoCompromiso: $scope.tipoCompromiso
			};
			ServiceGeneral.post(parameters)
			.then(function(result){
				$ionicLoading.hide();
				if(result.error == 1){
					$ionicPopup.alert({
						title: 'Acción exitosa',
						template: 'Programó el compromiso correctamente'
					})
					.then(function(){
						$state.go("brmInternaBrief",{idBrief:idBrief});
					});
				}else{
					$ionicPopup.alert({
						title: 'Ocurrio un error al traer las marcas',
						template: ''
					});
				}
			},function(err){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: 'Sin conexión a Internet',
					content: 'Lo sentimos, no se detectó ninguna conexión a Internet. Vuelve a conectarte e inténtalo de nuevo.'
				});
			});
		} else{
			$ionicPopup.alert({
				title: 'Datos incorrectos',
				content: 'Verique que los datos esten correctos'
			});
		};
	}
}]);
 