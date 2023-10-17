const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// get current date values
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

// set month and year
document.querySelector('.calendar__month').innerText = months[currentDate.getMonth()];
document.querySelector('.calendar__year').innerText = currentYear;

// create grid of days
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let week = document.createElement('div');
week.classList.add('calendar__day-numbers-row');

for (i = 1; i <= daysInMonth; i++) {
	let day = document.createElement('span');
	day.classList.add('calendar__day-number');
	day.innerText = i;
	(i == currentDay) && day.classList.add('calendar__day-number--current');
	week.append(day);

	if (new Date(currentYear, currentMonth, i).getDay() == 0 || i == daysInMonth) {
		document.querySelector('.calendar__day-numbers').append(week);

		if (i != daysInMonth) {
			week = document.createElement('div');
			week.classList.add('calendar__day-numbers-row');
		}
	}
}


const colors = ["Red","Green","Blue"];
colors.forEach((color)=>{
    //  generate id
    const id = `color-${color}`;

    // create a label
    const label = document.createElement('label');
    label.setAttribute("for", id);

    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "color";
    checkbox.value = color;
    checkbox.id = id;

    // place the checkbox inside a label
    label.appendChild(checkbox);
    // create text node
    label.appendChild(document.createTextNode(color));
    // add the label to the root
    br = document.createElement("br");
    document.querySelector("#root").appendChild(label).appendChild(br);
});