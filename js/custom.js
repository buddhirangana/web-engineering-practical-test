// JavaScript Document
var fifteenth = 'Nagananda International Institute for Buddhist Studies'; var sixteenth = 'black'; var seventeenth = '#4dff4d'; var eighteenth = '30'; var nineteenth = 150;var twentieth = 0;var first2;
 document.write('<div id=second2></div>');
function sixth2()  {
fifth2 = '<font size=' + eighteenth + '><font color=' + sixteenth + '>';
for (var first2 = 0; first2 < fifteenth.length; first2++) {
if( first2 == twentieth) {fifth2 += '<font color=' + seventeenth + '>' + fifteenth.charAt(twentieth) + '</font>';}else {fifth2 += fifteenth.charAt(first2);   }}fifth2 += '</font></font>';document.getElementById("second2").innerHTML = fifth2;(twentieth == fifteenth.length) ? twentieth=0 : twentieth++; }setInterval('sixth2()', nineteenth);
