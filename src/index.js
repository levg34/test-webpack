import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import * as bootstrap from 'bootstrap'

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('luc').innerHTML = '<a href="google.fr">Test</a>'
let url = 'http://'+randomWord()+'.fr'
document.getElementById('luc').innerHTML = '<a href="'+url+'">'+url+'</a>'

function randomWord() {
    return Math.random().toString(36).replace('0.','')
}