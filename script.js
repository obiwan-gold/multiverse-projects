// header 

// main section
// Data to be handled
const events = [
  {
    "name": "The Data Lab",
    "description": "Python 101",
    "image": "https://d1c2gz5q23tkk0.cloudfront.net/assets/network_events/96147/cover_picture/-default.?1663875319",
    "date": "Date: October 19, 2022, 3:00 PM - 4:30PM...",
    "price": "Your soul"
  },
  {
    "name": "you mama",
    "description": "shush",
    "image": "https://d1c2gz5q23tkk0.cloudfront.net/assets/network_events/97042/cover_picture/-default.png?1665043139",
    "date": "",
    "price": ""
  },
  {
    "name": "",
    "description": "",
    "image": "",
    "date": "",
    "price": ""
  },
  {
    "name": "",
    "description": "",
    "image": "",
    "date": "",
    "price": ""
  },
  {
    "name": "",
    "description": "",
    "image": "",
    "date": "",
    "price": ""
  },
  {
    "name": "",
    "description": "",
    "image": "",
    "date": "",
    "price": ""
  },

]

const main = document.querySelector('main');
main.classList = "main";

// Function that contains creating an eventsCard
function createEventsCard({ name, description, image, date, price }) {
  // Container for the event information
  const eventsCard = document.createElement('div');
  eventsCard.classList = "eventsCard"
  // Top half
  const imageSection = document.createElement('div');
  imageSection.classList = "imageContainer"

  const img = document.createElement('img');
  img.classList = "image";
  img.src = image;
  imageSection.appendChild(img);

  // lower half
  const infoSection = document.createElement('section');
  infoSection.classList = "infoContainer"

  // Who has time to write in every field?
  for (let i = 0; i < 5; i++) {

    const infoSectionSections = document.createElement('div');
    infoSectionSections.classList = "infoSectionRow";
    const arr = [name, description, date, price];

    infoSectionSections.append(arr[i]);

    infoSection.append(infoSectionSections);
  }
  // Append all eventsCard sections together
  eventsCard.append(imageSection, infoSection)

  // Append the final product
  main.append(eventsCard);
}

for (let event of events) {
  createEventsCard(event);
}

// footer 



