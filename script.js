var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.mensaje= "Ali";
  $scope.cambiarNombre= function(){
        $scope.mensaje="Alison";
  };
  
  $scope.seguro={
    nif:"",
    nombre:"",
    apellido1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numeroHijos:undefined,
    embarazada:false,
    coberturas:{
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      riniones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion: new Date()
  }
  $scope.disabledNombreAlergia= function(){
    return ($scope.seguro.enfermedades.alergia===false); 
  }
  $scope.esMujer=function(){
    return ($scope.seguro.sexo=="M");
  }
});