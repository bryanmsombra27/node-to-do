## Aplicacion de comandos

Este es una aplicacion que consiste en administracion basica de tareas (crud basico)

recuerda instalar las dependencias con el comando

```
npm install
```

comandos que controlan la aplicacion: crear, borrrar,actualizar, listar

ejemplo de la manipulacion del sistema:

node app listar :lista todas las tareas

node app crear -d "Nombre de la tarea a agregar" :creando una nueva tarea

node app actualizar -d "nombre de la tarea para actualizar el estado" -c true: actualizando el estado de una tarea ya que por defecto la tarea queda inicializada en falso. Cabe aclarar que el nombre con el que se registro la tarea debe ser el mismo que se encuentra en el archivo data.json

node app borrar -d "nombre de la tarea a borrar" : eliminando la tarea añadida

-d: responde al alias de descripcion con el cual hacemos referencia a la descripcion de la tarea añadida
-c: responde al alias de completado con el cual hacemos referencia al estado en el que se encuentra la tarea añadida false indica que la tarea no se ha completado y true indicaria que la tarea se ha completado exitosamente

diviertete explorando el codigo, suerte crack.
