# Validación de Formulario

Antes, el formulario solo revisaba si las contraseñas coincidían cuando le dabas a enviar. O sea, podías poner cualquier cosa en el email, el nombre o la contraseña, y el formulario igual intentaba enviarse.

Cambios:  
Se mejoró la validación para que el formulario solo se mande si todo está bien:  
- Se revisa el email, la contraseña, la confirmación y el nombre (si lo hay), usando expresiones regulares.
- Si te equivocas en algo, el campo se pone en rojo y te sale un aviso para que lo corrijas.
- Todo esto pasa antes de enviar, así que no hay forma de que se mande con datos mal puestos.
- Además, mientras vas escribiendo, el formulario te va diciendo si lo que pones está bien o mal.
