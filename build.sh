function compile() {
  SCSS_FILE="src/"$1;
  CSS_FILE="build/"$( echo ${1%.*}.css);
  MIN_CSS_FILE="build/"$( echo ${1%.*}.min.css);
  sass ${SCSS_FILE} ${CSS_FILE} --style expanded --sourcemap=none
  sass ${SCSS_FILE} ${MIN_CSS_FILE} --style compressed --sourcemap=none
}

compile chewing-grid.scss
compile chewing-grid-atomic.scss