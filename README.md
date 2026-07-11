# fertil_cypress
Aplicacion que permite hacer pruebas automatizadas
## Consideraciones
* Una vez que descargas la aplicación con un  pnpm install deberia andar correctamente pero ante algun problema pueda que requiera la última versión de cypress
* Si te llega a colgar el cypress, a veces con Ctrl+f5 se refresca y anda
## Comandos
* pnpm run cy:open para abrir cypress elegir y chrome que se configure
* pnpm run cy:chrome para abrir cypress con la configuracion correcta
## Sobre los datos
### Para que la suite de datos se comporte como lo esperado
* El usuario debe existir
* El usuario tiene un establecimiento
* No hay eventos registrados.
* No hay grupos, osea 0 rodeos y 0 lotes.
* Solo hay 2 animales zh(hembra) y zm (macho)
