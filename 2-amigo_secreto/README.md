# <h1 style="text-align: center;">Amigo Secreto</h1>
## # Introdución
El proyecto "Amigo Secreto" es un challenge o ejercicio practico para el bootcamp **ONE *Oracle Next Generation*** en el cual se proporciona unicamente el sitio web maquetado para practicar lo visto en los cursos de ***Lógica de programación con JavaScript***.

[![Video explicativo](https://img.youtube.com/vi/AwG93aucUss/0.jpg)](https://youtu.be/AwG93aucUss)


Este ejercicio permite repasar temas esenciales como:  
- Declaración de variables
- Funciones
- Arrays
- Interacción con el **DOM *Document Object Model***.
- CSS
- HTML

*(Aunque estos dos ultimos esencialmente no se pide que se modifiquen)*

La idea es elaborar la lógica de un juego de sorteos, en el que debes ingresar nombres de personas, tomar este nombre como entrada, agregarlo interactivamente a una lista en HTML y después permitir elegir un nombre al azar para elegirlo como ***¡¡ganador!!*** del sorteo.

De esta forma el ejercicio solicita lo siguiente:
- Un **array** para almacenar los nombres.
- Una **función** para agregar los "amigos".
    - Para este método se pide tomar el nombre de un **input**, validación de entrada, adición al array y la limpieza del input.
- Una **función** que recorra el array y agregue cada nombre como una etiqueta **<li>** de HTML.
    - Las instrucciones de este método eran un poco raras porque pedia obtener la lista vieja, limpiarla, validar duplicidad, agregar el nuevo y volver a escribir la lista con elementos HTML.   
    ***O por lo menos no estaba muy bien redactada...***
- Una **función** que elija un nombre al *azar* utilizando **Math.floor(Math.random())**.
    - Este método debia validar disponibilidad de nombres en el array, generar un indice aleatorio a partir de "largo" de la lista, obtener el nombre del indice y después mostrar el resultado en la web.

Por ultimo como desafios adicionales el proyecto se debe subir a **GitHub**, crear este **README** y publicar el juego en ***pages***.

### Link al proyecto: ***[Amigo Secreto by Charlie Chan](https://charlieh52.github.io/ONE-Alura/)***

De esta manera lo visto en los primeros 3 cursos se cubre de manera bastante amplia en un tiempo considerable, aunque en mi opinión podría ser diferente en algunas cuantas cosas, por lo demás como alguién que ya ha programado otras cosas más robustas, me parece bastante bueno hasta ahora ***27-07-2025*** este bootcamp.

## # De mi soapa
Como parte mi propia practica y exploración para enriquecer este repaso, he tratado de un solo un paso más en el desarrollo de este proyecto, pues he realizado estos cambios:

**Accesibilidad:**
He trasteado con el HTML y el CSS para maketar a mi gusto la aplicación, unicamente en cuanto a su adaptación a movil y el como los elementos cambian según la resolución para no romper la dinamica del usuario.

**Estilos y marcado:**
En lo personal soy muy fijado en el diseño, tal vez no soy el mejor en ello, pero tengo un gusto muy particular por esta parte del diseño web.

He cambiado un poco la estructura HTML para hacerla más semántica y más congruente, separe la **"responsabilidad"** de las secciones, modifique el como se presentaba la información agregando etiquetas adicionales y además cambie un poco la estructura de un botón que estaba anidado erroneamente en mi opinión.

En cuanto a los *estilos* hubo algunos detalles faltantes de mucho peso en mi opinión, pues algunos elementos HTML carecían de estilos en partes ***CRITICAS*** como en a presentación de la lista de nombres.

Aunque esto es ***INNECESARIO*** en un ejercicio de practicas, me parece que es de suma importancia considerarlo para mejorar el criterio y poner a prueba aun más las habilidades y conocimientos obtenidos, pero esto ya es meramente mi opinión.