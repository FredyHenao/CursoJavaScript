



try{
    //var a = 20;
    //throw new Error("error");
    //throw "oh oh!!";
    /*throw {
        nombre: "fredy",
        tipo: "error",
        id:1
    }*/
    throw function () {
        console.log("funcion");
    }
    console.log("hola");

}catch(e){
    e();
    //console.log(e.nombre);
}finally {
    console.log("hola2");
}