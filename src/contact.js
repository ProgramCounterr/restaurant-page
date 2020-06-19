const loadContactPage = () => {
  const content = document.querySelector('div#content');

  const contactInfo = document.createElement('div');
  contactInfo.setAttribute('id', 'contact-info');
  const phoneImg = document.createElement('img');
  phoneImg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/tourism-travel-3-6/48/107-512.png');
  phoneImg.setAttribute('alt', 'phone icon');
  phoneImg.setAttribute('id', 'phone-image');

  const phoneNumber = document.createElement('a');
  phoneNumber.textContent = '757-471-2100';
  phoneNumber.setAttribute('id', 'phone-number');

  const scheduleContainer = document.createElement('div');
  scheduleContainer.setAttribute('id', 'schedule-container');
  scheduleContainer.classList.add('center');

  const clockImg = document.createElement('img');
  clockImg.setAttribute('src', 'https://captainkva.com/images/others/clock.png');
  clockImg.setAttribute('alt', 'clock');

  const workingHoursHeader = document.createElement('h2');
  workingHoursHeader.textContent = 'Working Hours';
  workingHoursHeader.setAttribute('id', 'working-hours');

  // make schedule
  const schedule = document.createElement('ul');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = ['Closed', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM'];

  for (let i = 0; i < 7; i += 1) {
    const dayContainer = document.createElement('li');
    dayContainer.classList.add('day');

    const day = document.createElement('div');
    day.textContent = days[i];

    const dayHours = document.createElement('div');
    dayHours.textContent = hours[i];

    dayContainer.append(day, dayHours);
    schedule.appendChild(dayContainer);
  }

  contactInfo.append(phoneImg, phoneNumber);
  scheduleContainer.append(clockImg, workingHoursHeader, schedule);
  content.append(contactInfo, scheduleContainer);
};

export default loadContactPage;
