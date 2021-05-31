<p align="center">
    <img height="200" width="300" src="./docs/rooftop-academy.png">
   </p>
   
   <h1 align="center">User subscription app</h1>
 
## Consigna:
El cliente nos pide desarrollar una app en la que los usuarios pueden elegir 3 tipos de suscripcion:

Free: no tiene costo y dura solo 15 dias

Basic: cuesta 3 dolares

Premium: cuesta 9 dolares

Tanto Basic como Premium duran 30 dias y no incluyen anuncios publicitarios

Extra (quien se anime :sonrisa_con_sudor:)

El cliente solo puede tener 1 cuenta por vez

Por defecto cada cliente tiene una cuenta Free que luego puede cambiar

## Proyecto
### Herramientas
Typescript

### Estructura del proyecto
Los archivos estan estructurados de la siguiente manera:

    ├── js
    ├── src
        ├── models        
            ├── Plan.ts       
            ├── FreePlan.ts  
            |── BasicPlan.ts       
            ├── PremiumPlan.ts
            ├── User.ts
    ├── docs
    ├── index.ts
    └── README.md         


## Para correr la app:

```
node index.js
```

#### Autor: Julio Romero
