const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
function create_calendar(params){
    fixed_days = Object.keys(params);
    days_colors = Object.values(params);

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
        if (fixed_days.includes(String(i))){
            const find_colors_re = /rgb\(\d+, \d+, \d+\)/g;
            gradient_colors = params[String(i)].match(find_colors_re);
            day.style.backgroundImage = getSplitBackgroundStyle(gradient_colors);
            day.setAttribute("day_color", params[String(i)]);
        }

        if (new Date(currentYear, currentMonth, i).getDay() == 0 || i == daysInMonth) {
            document.querySelector('.calendar__day-numbers').append(week);

            if (i != daysInMonth) {
                week = document.createElement('div');
                week.classList.add('calendar__day-numbers-row');
            }
        }
    }


    const colors = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)'];
    checkbox_create(colors);
}

function checkbox_create(colors){
    colors.forEach((color)=>{
        //  generate id
        const id = `color-${color}`;
        const label = document.createElement('label');
        label.setAttribute("for", id);

        // create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "color";
        checkbox.value = color;
        checkbox.id = id;
        checkbox.setAttribute("checked", true);
        checkbox.classList.add('calendar__checkbox')

        checkbox.addEventListener('change', function() {
            var color_filter = '.calendar__day-number[day_color*="' + color + '"]'
            var color_days = document.querySelectorAll(color_filter);
            const find_colors_re = /rgb\(\d+, \d+, \d+\)/g;
            if (this.checked) {
                console.log("Checkbox is checked..");
                color_days.forEach((color_day)=>{
                    var gradient_colors = [];
                    gradient_colors = color_day.style.backgroundImage.match(find_colors_re);
                    gradient_colors = removeDuplicates(gradient_colors);
                    gradient_colors.push(color);

                    color_day.style.backgroundImage = getSplitBackgroundStyle(gradient_colors);
                });
            }
            else {
                console.log("Checkbox is not checked..");
                color_days.forEach((color_day)=>{
                    gradient_colors = color_day.style.backgroundImage.match(find_colors_re);
                    gradient_colors = gradient_colors.filter(function(e) { return e !== color });
                    gradient_colors = removeDuplicates(gradient_colors);
                    color_day.style.backgroundImage = getSplitBackgroundStyle(gradient_colors);
                });
            };
        });
    // place the checkbox inside a label
    label.appendChild(checkbox);
    // create text node
    label.appendChild(document.createTextNode(color));
    // add the label to the root
    br = document.createElement("br");
    document.querySelector("#root").appendChild(label).appendChild(br);
    });
}


function getSplitBackgroundStyle(colors, angle = "to bottom"){
    let backgroundStyle = 'unset'
    if (colors.length) {
        const percent = Math.floor(100 / colors.length)
        backgroundStyle = `linear-gradient(${angle}, ${colors.map((color, index) => `${color} ${index * percent}% ${(index + 1) * percent}%`).join(', ')})`
    }
    return backgroundStyle;
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

