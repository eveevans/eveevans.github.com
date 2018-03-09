---
title: Algo está haciendo mal Google
date: 2015-09-30 19:56:16 Z
categories:
- opinion
layout: post
image: 2015-09-30-algo-esta-haciendo-mal-google.jpg
"<!-- published": false -->
---

Hace poco estaba conversando con un compañero del [Google Developer Group][gdg_managua] (Hola [Oscar!][oscar_mcm]), sobre las nuevas herramientas y tecnologías de los geeks del Montain View. Haciendo un repaso de sus últimos proyectos me quedó la sensación de que algo estan haciendo mal.

## Dividieron Angular

Hace no mucho tiempo, hubo una batalla de los Framework MVC (o más bien MVVM), donde por un tiempo [Backbone][backbonejs] llevaba la delantera, pero que salían a luz varias otras alternativas como [Knockout][knockoutjs], [Batman][batmanjs], [Ember][emberjs], y que luego llegó Google con [Angular][angularjs] para sellar su puesto como el gran ganador, creando un gran ecosistema que dio lugar al surgimiento de cientos de librerías y componentes, gracias a una herramienta práctica y "estable" para las aplicaciones ricas en Javascript. 

Hasta aquí todo bien, sin embargo no fue hasta el anunciamiento de [Angular 2][angular2js] que inició la polémica. Si bien aún se encuentra en desarrollo, y  conserva la escencia de su antecesor, se trata de una implementación desde cero, en la que reescribieron todo el código fuente sujeto a nuevos estándares, y trae consigo nuevos conceptos y cambios que haran incompatible mucho de las aplicaciones y componentes que actualmente existen para Angular 1. 

Si, es parte de la evolución natural de los Framework, pero el cambio en este caso es tan doloroso, que ha hecho pensar a la comunidad de Angular si realmente vale la pena tener que rehacer todo nuevamente. Como comentario, hace poco [Ember][emberjs] hizo un cambio de versión mayor, y moverse de Ember 1.13 a Ember 2.0 no es tan drastico, y las aplicaciones seguirán funcionando sin mayor problema.


## ¿Polymer qué? 

La nueva batalla en Javascript, ya no será por data-binding, y arquitectura en librerías/framework de Front-End. Si no del uso e implementación de [Web Components][webcomponents], que es una de las áreas que quiere llenar [Polymer][polymer].

[Polymer][polymer] es una apuesta ambiciosa, y en el papel, muy llamativa, que hace poco, luego de un año de desarrollo, llegó a su versión estable. Sin embargo, el problema es que, a diferencia de Angular, no existe nada real (aparte de algunos experimientos de Google) que esté usandolo. Lo cual más bien a abierto campo a otras alternativas, menos ambiciosas, pero bien enfocadas que hacen uso de los [Web Components][webcomponents] de otra manera, a.k.a. [React][reactjs] bajo la promesa de Facebook de que ellos si lo usan en producción y que tendrá larga vida y soporte.

 
## AppEngine

Esta es sin duda una de las que menos entiendo, Google con su tremenda infraestructura hardware, comenzaron a abrir sus servidores para que pudiéramos correr aplicaciones en ellos, pero lo hicieron demasiado cerrado. ¿Solamente Python y Java? ¿Y el resto de lenguajes que usamos? ¿BigTable? pero si quiero MySQL y PostgreSQL...

Si bien comenzaron a soportar más tecnologías, no hay mucho que decir, tardaron mucho tiempo en darse cuenta que los desarrolladores a veces usan, y quierne usar, herramientas diferentes a ellos. Todo esto dio lugar a  que credieran plataformas como: [Amazon Web Services][aws], [Rackspace][rackspace], [Windows Azure][azure], [Open Shift][openshift] entre otras, las cuales me alquilan infraestructura y yo puedo instalar las tecnologías con las que quiera trabajar. Si bien ahora se puede hacer lo mismo en Google [Compute Engine][compute_engine], no es tan popular como las otras alternativas.


## Cerraron Google Code y migraron a Github

El espacio colaborativo de almacenamiento de código fuente de Google se vio opacado por otras alternativas. De hecho es una muy buena desición que lo hayan cerrado, pero demuestra que a veces, haciendo las mil cosas que hacen, no pueden competir con empresas enfocadas que hacen bien su trabajo.


## GO ##

Da la impresión que en los últimos 3 años se han creado más lenguajes de programación que en los pasados 10. Go, es una apuesta por simplicidad y escalabilidad, pero que aún le falta mucho por demostrar y necesita de proyectos reales para que pase de su etapa "próxima promesa", que le suele pasar mucho a Google.


## Chrome OS ##

Gran apuesta, quizas un poco adelantada a su época. Estan claros los beneficios de tener un sistema operativo que prácticamente vive de internet, pero... ¿Ya se tiene eso desde el navegador, no?  Además, si algo quieren los usuarios de Sistemas Operativos son todos los programas que ya utilizan.

No se hasta que punto evolucionará esto, pero ya podemos ver Chromebooks con Android.

## ¿Redes Sociales? ##

Un campo en el que Google nunca ha podido terminar de calzar. Un minuto de silencio por [Google Wave][wave] y [Google Buzz][buzz]. El primero quizas fue demasiado futurista para su época, y el usuario medio nunca entendió, ocasionando que los únicos usuarios de la red eran los mismos Geeks de siempre. [Buzz][buzz] era una vil copia de Twitter, que Google intentó poner a la fuerza, pero que nunca tuvo auge.

Y hablando de cosas a la fuerza, [Google Plus][https://plus.google.com/] está llegando al límite en el que deja de tener sentido para Google, y es posible candidato a ser apagado. 


## Google Glass y otras sustancias ##

Es un vivo reflejo de las cosas que Google hace, muchos proyectos "cool" que cambiarán el mundo, y que luego quedan abandonados. En muchos sitios se lee  que la poca madurez de la herramienta ha hecho que los desarrolladores la abdandonen.


## ¿Y? ##

Si, Google sigue haciendo cosas bien, y apoderándose del mundo. (Aunque ahora necesitamos una frase a lo `Alphabet dont be evil`.

Con Android, por ejemplo, acabó con todos los Sistemas Operativos móviles que se estaban gestando. (¿Alguien se acuerda de WebOS?), unificó a los fabricantes, dejándoles hacer bien el trabajo que son buenos, o sea Hardware, y ellos pudiéndose concentrar en el Sofware y el ecosistemas de aplicaciones.

Sus servicios estrellas siguen por buen camino, o al menos buscando nuevos modelos de negocio (Yo si pagaría por Youtube offline), y ahora con la reestructuración corporativa de Google, apuesto que veremos más de este tipo de iniciativas.

No me mal entiendan, Google es de las empresas que más admiro por su innovación, este simplemente es un análisis de algunas cosas que desde mi punto de vista no les han salido muy bien, y que quizas su expanción inimaginable en cada parte de la vida cotidiana, está trayendo consecuencias que podrían costarle mucho. 

Al final seguiremos viendo proyectos "cool", y revolucionarios de parte de Google, pero habrá que esperar cuales de ellos llegarán a ser estables y realmente revolucionaran el mundo: realidad aumenta, internet gratis para el planeta, carros que manejen solos, 3D printing de casas, expediciones a Marte.


[oscar_mcm]: https://twitter.com/oscar_mcm
[gdg_managua]: https://developers.google.com/groups/chapter/113255713593303778606/

[backbonejs]: http://backbonejs.org/
[knockoutjs]: http://knockoutjs.com/
[batmanjs]: http://batmanjs.org/
[emberjs]: http://emberjs.com/
[angularjs]: https://angularjs.org/
[angular2js]: https://angular.io/

[webcomponents]: http://webcomponents.org/
[polymer]: https://www.polymer-project.org/1.0/
[reactjs]: https://facebook.github.io/react/

[aws]:http://aws.amazon.com/
[rackspace]: http://www.rackspace.com/
[azure]: https://azure.microsoft.com
[openshift]: https://www.openshift.com
[compute_engine]: https://cloud.google.com/compute/

[buzz]: https://support.google.com/mail/answer/1698228?hl=en
[wave]: https://support.google.com/answer/1083134?hl=en
[plus]: https://plus.google.com/

[^1]: React tiene el soporte de Facebook tras el.
[^2]: Poner referencia de Bigtable
