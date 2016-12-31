angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('SetBriefData', function(){
    var setBriefData = {};
    return {
        setMarca: function(data) {
            setBriefData.idMarca = data;
            console.log(setBriefData);
        },
        setObjetivo: function(data) {
            setBriefData.titulo = data.titulo;
            setBriefData.fechaPropuesta = data.fechaPropuesta;
            setBriefData.objetivo = data.objetivo;
            console.log(setBriefData);
        },
        setResultado: function(data) {
            setBriefData.resultado = data;
            console.log(setBriefData);
        },
        setEmpatia: function(data) {
            setBriefData.empatia = data;
            console.log(setBriefData);
        },
        getData: function() {
            return setBriefData;
        }
    }
})

.service('ServiceGeneral', function ($http, $q){
	this.post = function(parameters) {
		var dfd = $q.defer();
		var accion = parameters.accion;
		$http.post('http://162.213.37.11:81/'+accion,parameters)
		//$http.post('http://162.213.37.11:81/'+accion,parameters,{ headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
		.success(function(data) {
			dfd.resolve(data);
		})
		.error(function(data) {
			dfd.reject(data);
		});
		return dfd.promise;
	};
});