var count_elements_avto = 7,
current_element_avto = 0,
width_avto = 390,
height_avto = 200,
duration_avto = 700;

var screen_avto = $('#screen-avto');

screen_avto.width(width_avto * count_elements_avto);

function move_screen_avto (x) {
current_element_avto = (current_element_avto + x) % count_elements_avto;
if (current_element_avto < 0) {current_element_avto += count_elements_avto;}
screen_avto.animate({
	marginLeft: - width_avto * current_element_avto
}, duration_avto);
}

$("#prev-avto").click(function () {
	move_screen_avto(-1);
})
$("#next-avto").click(function () {
	move_screen_avto(1);
})