const bookings = [
  {
    id: 1,
    roomId: 'A101',
    startTime: '2019-09-28 13:00:00',
    endTime: '2019-09-28 14:00:00',
    title: 'Lunch with Petr',
  },
  {
    id: 2,
    roomId: 'A101',
    startTime: '2019-09-28 14:00:00',
    endTime: '2019-09-28 15:00:00',
    title: 'Sales Weekly Meeting',
  },
  {
    id: 3,
    roomId: 'A101',
    startTime: '2019-09-28 16:00:00',
    endTime: '2019-09-28 18:00:00',
    title: 'Anastasia Website Warroom',
  },
  {
    id: 4,
    roomId: 'A101',
    startTime: '2019-09-29 13:00:00',
    endTime: '2019-09-29 14:00:00',
    title: 'One-on-One Session',
  },
  {
    id: 5,
    roomId: 'A101',
    startTime: '2019-09-29 16:00:00',
    endTime: '2019-09-29 18:00:00',
    title: 'UGC Sprint Planning',
  },
  {
    id: 6,
    roomId: 'A102',
    startTime: '2019-09-30 09:00:00',
    endTime: '2019-10-04 18:00:00',
    title: '5-Day Design Sprint Workshop',
  },
  {
    id: 7,
    roomId: 'Auditorium',
    startTime: '2019-09-19 09:00:00',
    endTime: '2019-09-23 19:00:00',
    title: 'Thai Tech Innovation 2019',
  },
  {
    id: 8,
    roomId: 'A101',
    startTime: '2019-09-28 10:00:00',
    endTime: '2019-09-28 13:00:00',
    title: 'Raimonland project',
  },
  {
    id: 9,
    roomId: 'A102',
    startTime: '2019-09-30 18:00:00',
    endTime: '2019-09-30 20:00:00',
    title: 'Management Meetinng',
  },
  {
    id: 10,
    roomId: 'A101',
    startTime: '2019-10-04 14:00:00',
    endTime: '2019-10-06 11:00:00',
    title: '3-day workshop Corgi costume',
  },
];

const checkAvailability = (roomId, startTime, endTime) => {
  const requestStartTime = new Date(startTime);
  const requestEndTime = new Date(endTime);

  for (const booking of bookings) {
    const bookingStartTime = new Date(booking.startTime);
    const bookingEndTime = new Date(booking.endTime);

    if (
      booking.roomId === roomId &&
      requestStartTime >= bookingStartTime &&
      requestStartTime < bookingEndTime &&
      requestEndTime > bookingStartTime &&
      requestEndTime <= bookingEndTime
    ) {
      return true;
    }
  }
  return false;
};

const getBookingsForWeek = (roomId, weekNo) => {
  const firstDayOfYear = new Date(2019, 0, 1);
  const firstWeekDays = 7 - firstDayOfYear.getDay();
  const weekStartDate = new Date(2019, 0, (weekNo - 1) * 7 + 1 + firstWeekDays);
  const weekEndDate = new Date(weekStartDate);
  weekEndDate.setDate(weekEndDate.getDate() + 6);

  const bookingsForWeek = [];

  for (const booking of bookings) {
    const bookingStartTime = new Date(booking.startTime);
    const bookingEndTime = new Date(booking.endTime);

    if (
      booking.roomId === roomId &&
      bookingStartTime <= weekEndDate &&
      bookingEndTime >= weekStartDate
    ) {
      bookingsForWeek.push(booking);
    }
  }

  return bookingsForWeek;
};

// Test checkAvailability
console.log(
  checkAvailability('A101', '2019-10-04 15:00:00', '2019-10-04 16:00:00')
);
console.log(
  checkAvailability('A101', '2019-09-28 13:30:00', '2019-09-28 15:30:00')
);

// Test getBookingsForWeek
console.log(getBookingsForWeek('A101', 28));
console.log(getBookingsForWeek('A102', 39));
