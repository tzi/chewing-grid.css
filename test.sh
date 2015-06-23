#!/bin/bash

function confirm() {
	read -p "  - Do you want to ${1} (Y/n)? " -n 1 -r;
	ANSWER=false;
	if [[ $REPLY =~ ^[Yy]$ ]];
	then
			ANSWER=true;
	fi
	echo '';
}

if [ $# -eq 0 ];
then
  SCSS_FILE_LIST=( $(find ./test -type f | grep ".scss$") );
else
  SCSS_FILE_LIST=$@;
fi;

for SCSS_FILE in "${SCSS_FILE_LIST[@]}";
do
  CSS_FILE=$( echo ${SCSS_FILE%.*}.css);
  if [ ! -f ${CSS_FILE} ];
  then
    echo "No existing result test for '${SCSS_FILE}'."
    confirm "generate a new one?"
    if [ $ANSWER == true ];
    then
      sass ${SCSS_FILE} ${CSS_FILE}
    fi;
  fi;
  DIFF=$( sass ${SCSS_FILE} | diff ${CSS_FILE} - | wc -l);
  if [ $DIFF -gt 0 ];
  then
    echo "${SCSS_FILE}: ERROR"
    confirm "see the difference?"
    if [ $ANSWER == true ];
    then
      sass ${SCSS_FILE} | diff --side-by-side ${CSS_FILE} -;
      confirm "override the current result?"
      if [ $ANSWER == true ];
      then
        sass ${SCSS_FILE} ${CSS_FILE}
      fi;
    fi;
  else
    echo "${SCSS_FILE}: OK"
  fi;
done;