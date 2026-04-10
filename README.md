# Pensamiento-Computacional-Sec3
## Mi primer blog 
Ejercicios y entregas curso pensamiento computacional

## Sketch 1 - mi primer p5.js
- intente hacer una cara confundida con una corbata
- aprendi a mover algunas figuras en coordenandas
- no me salio hacer el moño de corbata
  ![imagen](https://images.emojiterra.com/google/android-pie/512px/1f615.png)
  ![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/caraconfundida.png?raw=true)
  
  
# Solemne 01
## Hacia arriba, Wassily Kandinsky, (1929)
Elegí esta obra por su composición abstracta y el uso llamativo de colores. Me llamó la atención cómo las formas geométricas, como círculos y rectángulos, se organizan en el espacio de manera equilibrada, generando una sensación de movimiento y orden al mismo tiempo. Además, el contraste entre los colores permite que cada figura destaque dentro de la composición.

A medida que fui recreando la imagen, me di cuenta de que algunas figuras no eran simples, sino que estaban compuestas por varias formas más pequeñas. Esto me generó dificultades al momento de construirlas en P5.js, ya que debía analizar con mayor detalle sus proporciones y posiciones. Sin embargo, este proceso me ayudó a comprender mejor la estructura de la obra y a valorar su complejidad, entendiendo que su apariencia simple en realidad es resultado de una composición muy bien pensada, lo que la convierte en una imagen visualmente atractiva y proporcional. (me encanto)
![imgen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/opcion1.webp?raw=true)
Estas eran mis otras opciones👇🏻

![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/opcion2.webp?raw=true)
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/opcion3.jpg?raw=true)
**Problemas con Photoshop**

Comencé poniendo la foto en Photoshop y redimensionándola para que encajara en el sketch de p5.js ya que era demasiado grande, luego le añadí una cuadrícula y fui dibujando figuras sobre la imagen original para identificar sus formas y coordenadas. Sin embargo, no logré utilizar correctamente el programa, ya que no supe cómo obtener con precisión las coordenadas de las figuras que iba creando. Tampoco entendí bien cómo trasladar esas formas de manera exacta a P5.js.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/Captura%20de%20pantalla%20(24).png?raw=true)

Debido a esto, solo pude obtener una coordenada inicia de la punta de una de las figuras del círculo naranja. A partir de ese punto, comencé a construir el resto del dibujo guiándome visualmente, intentando mantener las proporciones a medida que avanzaba hacia abajo.

Más adelante, me di cuenta de que podía utilizar las guías y reglas en Photoshop. Esto me ayudó mucho, ya que comencé a comparar constantemente entre Photoshop y P5.js, observando desde dónde hasta dónde llegaban las formas, si se alineaban correctamente o si alguna parte se pasaba de su límite. Este proceso fue más manual, pero me permitió avanzar significativamente y lograr una mejor aproximación.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/Captura%20de%20pantalla%20(22).png?raw=true)
**Intento con ilustrator**

También intenté trabajar en Illustrator, donde pude recrear las figuras, pero nuevamente tuve dificultades al momento de trasladar las coordenadas a P5.js. Cuando intentaba usar los valores que me entregaba el programa, el resultado en P5.js no coincidía con la imagen original: las figuras se deformaban o no se veían como esperaba. Esto me hizo darme cuenta de que no estaba comprendiendo bien cómo funcionan los sistemas de coordenadas entre estos programas.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/Captura%20de%20pantalla%20(25).png?raw=true)

Finalmente, opté por seguir trabajando con Photoshop utilizando principalmente las reglas y guías como referencia visual. A través de la medición y la observación constante, fui determinando las posiciones y tamaños de cada figura, lo que me permitió construir el dibujo en P5.js de manera más precisa, aunque mediante un proceso más experimental.

Este proceso fue desafiante, pero me ayudó a entender mejor cómo traducir una imagen a coordenadas y la importancia de las proporciones y referencias visuales al trabajar de forma digital.

**Lo que mas me costo**

Una de las principales dificultades que tuve fue entender cómo mover un triángulo dentro del espacio de P5.js. Al principio, no lograba comprender por qué al modificar solo una parte de la figura, esta se deformaba completamente. Luego entendí que cada esquina del triángulo está definida por un par de coordenadas (X, Y), por lo que era necesario modificar todas sus coordenadas de manera proporcional para mover la figura sin alterar su forma e ir moviendo toto en simultáneo.

Otra figura que me costo demasiado entender era esa curva que se unia con el medio circulo naranjo.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/lo%20mas%20dificil.png?raw=true)

**Comentario de ayuda**

También me costó bastante entender el funcionamiento de la línea, ya que no tenía claro cómo se definían sus puntos en el plano. Por esto, decidí crear una especie de guía dentro del código, agregando comentarios para recordarme cómo funcionaban las coordenadas y así evitar errores en el proceso.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/guias.png?raw=true)

Además, tuve dificultades al trabajar con círculos, especialmente porque en mi caso debía representar cuartos de círculo, tanto en el lado derecho como en el izquierdo inferior. Me costó entender desde qué punto comenzaban y hasta dónde se dibujaban, ya que no se trataba de un círculo completo. Con el tiempo, comprendí que debía pensar en estos como partes de una figura mayor y fijarme bien en sus límites y posiciones dentro del plano para que encajaran correctamente con el resto de la composición.

**Orden de mis codigos**

Para organizar mejor mi trabajo, decidí estructurar el código de manera ordenada y repetitiva. Primero escribía el nombre de la figura que iba a crear, luego definía el color con fill, después el trazo (stroke) en caso de que tuviera, junto con su color, y finalmente el código de la figura con sus respectivas coordenadas. En algunos casos, también agregaba coordenadas de referencia como comentarios encima del código para guiarme.
![imagen](https://github.com/rocioacuna-svg/Pensamiento-Computacional-Sec3/blob/main/IMAGENES/orden.png?raw=true)

Seguí este mismo orden en todo el desarrollo del proyecto, lo que me permitió trabajar de forma más clara y evitar confusiones. Esta organización fue clave para entender mejor cada elemento del dibujo y mantener un control sobre las formas, colores y posiciones dentro de la composición.

Además, este método me ayudó a que, cuando notaba que algo no estaba en el lugar correcto, pudiera volver fácilmente a la figura correspondiente solo viendo su nombre. De esta forma, podía identificar rápidamente qué parte del código debía modificar y ajustar su posición o características sin confundirme, ya que tenía claro qué representaba cada sección del código.

Estas dificultades fueron importantes en mi aprendizaje, ya que me obligaron a comprender mejor cómo funcionan las figuras y sus posiciones en un espacio de coordenadas, lo que me permitió avanzar de forma más precisa en mi trabajo.

Finalmente agregue unos elipces en movimiento para el fondo ya que la obra original tiene varios tonos de verdes y eso la hace ver mas ineresante y estas referecias las encontre con una compañpera aqui👇🏻

FrameCo: gira x fotograma ( la relantiza)
referencia de translate y rotate: https://editor.p5js.org/p5/sketches/Form:_Star 
https://p5js.org/es/reference/p5/push // Se aislan las figuras que están entre estos dos. Todo lo que ocurra entre ellos (traslación o rotación) no afectará a las figuras que se dibujen después de pop() 

https://editor.p5js.org/rocio.acuna/sketches/GboIGre-B
