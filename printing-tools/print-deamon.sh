#!/bin/bash
# set -x

# settings
# find the printer $ lpstat -p
# install watch with brew
# lanch with $ watch -n 10 bash print-deamon.sh 

printer=Canon_LBP7100C_7110C
archivebox="archivebox/"
printinbox="printbox/"

# main loop
mkdir $archivebox $printinbox

for step in `find $printinbox -iname "*.pdf" -type f`
do 
  lpr -P $printer -o media=A4 -o fit-to-page $step
  mv -v $step $archivebox # copy in outbox (archives)
done
