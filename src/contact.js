const loadContactPage = function () {
    let content = document.querySelector('div#content');

    let contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');
    let phoneImg = document.createElement('img');
    phoneImg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/tourism-travel-3-6/48/107-512.png');
    phoneImg.setAttribute('alt', 'phone icon');
    phoneImg.setAttribute('id', 'phone-image');

    let phoneNumber = document.createElement('a');
    phoneNumber.textContent = '757-471-2100';
    phoneNumber.setAttribute('id', 'phone-number');

    let scheduleContainer = document.createElement('div');
    scheduleContainer.setAttribute('id', 'schedule-container');
    scheduleContainer.classList.add('center');

    let clockImg = document.createElement('img');
    clockImg.setAttribute('src', 'https://captainkva.com/images/others/clock.png');
    clockImg.setAttribute('alt', 'clock');

    let workingHoursHeader = document.createElement('h2');
    workingHoursHeader.textContent = "Working Hours";
    workingHoursHeader.setAttribute('id', 'working-hours');

    //make schedule
    let schedule = document.createElement('ul');
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = ["Closed", "11:00 AM - 7:00 PM", "11:00 AM - 7:00 PM", "11:00 AM - 7:00 PM", "11:00 AM - 7:00 PM", "11:00 AM - 7:00 PM", "11:00 AM - 7:00 PM"];

    for(let i=0; i<7; i++) {
        let dayContainer = document.createElement('li');
        dayContainer.classList.add('day');

        let day = document.createElement('div');
        day.textContent = days[i];

        let dayHours = document.createElement('div');
        dayHours.textContent = hours[i];

        dayContainer.append(day, dayHours);
        schedule.appendChild(dayContainer);
    }

    contactInfo.append(phoneImg, phoneNumber);
    scheduleContainer.append(clockImg, workingHoursHeader, schedule);
    content.append(contactInfo, scheduleContainer);
}

export default loadContactPage;