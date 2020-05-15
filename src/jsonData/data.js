export const ENTRY_TYPES = {
  paidEntry: 'paid entry',
  freeEntry: 'free entry',
};

export const LIST_TYPES = {
  list: 'LIST',
  grid: 'GRID',
};

const EVENT1 = require('../assets/event1.jpg');
const EVENT2 = require('../assets/event2.jpg');

export const EVENTS_DATA = [
  {
    id: 0,
    name: 'Metallica Concert',
    place: 'Palace Grounds',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT1,
  },
  {
    id: 1,
    name: 'Saree Exhibition',
    place: 'Malleswaram Grounds',
    entryType: ENTRY_TYPES.freeEntry,
    eventImage: EVENT2,
  },
  {
    id: 2,
    name: 'Wine tasting event',
    place: 'Links Brewery',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT1,
  },
  {
    id: 3,
    name: 'Startups Meet',
    place: 'Kanteerava Indoor Stadium',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT2,
  },
  {
    id: 4,
    name: 'Summer Noon Party',
    place: 'Kumara Park',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT1,
  },
  {
    id: 5,
    name: 'Rock and Roll nights',
    place: 'Sarjapur Road',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT2,
  },
  {
    id: 6,
    name: 'Barbecue Fridays',
    place: 'Whitefield',
    entryType: ENTRY_TYPES.paidEntry,
    eventImage: EVENT1,
  },
  {
    id: 7,
    name: 'Summer workshop',
    place: 'Indiranagar',
    entryType: ENTRY_TYPES.freeEntry,
    eventImage: EVENT2,
  },
  {
    id: 8,
    name: 'Impressions & Expressions',
    place: 'MG Road',
    entryType: ENTRY_TYPES.freeEntry,
    eventImage: EVENT1,
  },
  {
    id: 9,
    name: 'Italian carnival',
    place: 'Electronic City',
    entryType: ENTRY_TYPES.freeEntry,
    eventImage: EVENT2,
  },
];
