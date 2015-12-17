#!/bin/bash
# set -x

# settings
# find the printer $ lpstat -p
# install watch with brew
# lanuch with $ watch -n 10 bash print-deamon.sh 

i=0
printer=Canon_LBP7100C_7110C
archivebox="archivebox/"
printinbox="printbox/"

#for step in `find $printinbox -iname "*.pdf" -type f`
while true
	do
		i=$((i+1))
		wkhtmltopdf "http://google.com" "printbox/test-$i.pdf"
  	#lpr -P $printer -o media=A4 -o fit-to-page $step
		#mv -v $step $archivebox # copy in outbox (archives)
		sleep 10
done