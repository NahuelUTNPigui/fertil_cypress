# fertil_cypress
Proyecto que permite hacer pruebas automatizadas de la aplicacion creciente fertil
## Consideraciones
* Una vez que descargas la aplicación con un  pnpm install deberia andar correctamente pero ante algun problema pueda que requiera la última versión de cypress
* Si te llega a colgar el cypress, a veces con Ctrl+f5 se refresca y anda
* Para tener acceso libre al establecimiento y probar alternativas, se recomienda usar el test ingresar.
* Si consideras que tu codigo debería funcionar pero no se ejecuta correctamente entonces es probables que tengas que agregar la instruccion "cy.wait(1000)" ya que hay cierto delay cuando se crea una pantalla y los elementos no se hallan visibles
* En cada achivo que se debe agregar el beforeEach es importante escribir la instruccion "cy.viewport(1536, 960)" ya que la aplicacion en modo testing anda mejor en modo escritorio
## Comandos
* pnpm install para installar el programa
* pnpm run cy:open para abrir cypress elegir y chrome que se configure
* pnpm run cy:chrome para abrir cypress con la configuracion correcta
## Sobre los datos
### Para que la suite de test se comporte como lo esperado. Estan debe ser las condiciones
* El usuario debe existir
* El usuario tiene un establecimiento
* El establecimiento tiene un colaborador sin permisos.
* No hay eventos registrados.
* Hay un solo lote (zl) y un solo rodeo (zr).
* Solo hay 4 animales zh en el lote zl  y zh1 (hembras) y zm en el rodeo zr y zm1(machos)
