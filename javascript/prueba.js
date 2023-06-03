class libro{
    constructor(titulo,autor,año,genero){
        this.titulo=titulo
        this.autor=autor
        this.año=año
        this.genero=genero

    }
    Saludar(){
        return `el titulo del libro que elegiste es ${this.titulo} del autor ${this.autor} escrito en el año ${this.año} del genero ${this.genero}
    }

}
