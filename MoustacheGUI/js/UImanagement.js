

function unscreen(part){
  var tab = [document.getElementsByClassName('more')[0], document.getElementsByClassName('conf')[0], document.getElementsByClassName('contact')[0], document.getElementsByClassName('tuto')[0]];
  switch (part[0]) {
    case 'products' :
      isolator(tab[0])
      break;
        case 'config':
          isolator(tab[1])
          break;
            case 'contact':
              isolator(tab[2]);
              break;
                case 'tuto':
                 isolator(tab[3])
                  break;
    default:
    return;
  }
}

function isolator(el){
  el.style.backgroundColor = "red";
    console.log(el);
}const buttons = document.querySelectorAll(".uibtn")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    setURI(this.id)
  })
}
