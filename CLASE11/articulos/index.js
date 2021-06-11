const fs = require('fs');

module.exports = {
    
    productos : JSON.parse(fs.readFileSync('./data/productos.json','utf-8')),
    //productos : fs.readFileSync('./data/productos.json'), 
    agregar : function(nombre,precio,stock){
            let producto = {
                nombre,
                precio,
                stock,
            }
        this.productos.push(producto);//agrega el producto
        this.guardar(this.productos);
        this.mensaje('Producto agregado');//
        //console.log(this.productos);
    },
        guardar : function(productos){
        fs.writeFileSync('./data/productos',JSON.stringify(productos,null,2),'utf-8')
        },
    
        mensaje : texto => console.log(texto),
    
        listar : function(){
            for(let i = 0; i < this.producto.length; i++){
                console.log(`Productos ${productos[i].nombre}, precio ${this.productos[i].precio}, stock ${this.productos[i].stock}`);
            }
        },
        deshacer: function(){
            this.productos.pop();
            this.guardar(this.productos);
            this.mensaje('Se eliminó el último elemento');
        }, 
        filtrarPorPrecio: function(filtro,valor){
            for (let i = 0; i < this.productos.length; i++) {
               switch(filtro){
                   case 'mayor':
                       for (let i = 0; i < this.productos.length; i++) {
                           if(this.productos[i].precio>=valor){
                               console.log(`Producto : ${this.producto[i].nombre}
                               , precio : ${this.producto[i].precio},
                               stock ${this.productos[i].stock}
                               ` );
                           }

                           
                       }
                       break;
                       case 'menor':
                       for (let i = 0; i < this.productos.length; i++) {
                           if(this.productos[i].precio<=valor){
                               console.log(`Producto : ${this.producto[i].nombre}
                               , precio : ${this.producto[i].precio},
                               stock ${this.productos[i].stock}
                               ` );
                           }

                           
                       }
                       break;
                    default:
                        break;

               }
            }

        },
        buscar : function(texto){
            let resultado = false;
            for(let i = 0; i < this.productos.length; i++){
                if(this.productos[i].nombre.includes(texto)){
                    resultado = true;
                    console.log(`Producto : ${this.producto[i].nombre}
                               , precio : ${this.producto[i].precio},
                               stock ${this.productos[i].stock}
                               ` );
                }
            }
            !resultado ? console.log('PRODUCTO NO ENCONTRADO') : null ;

        }
    }
    

    
    
