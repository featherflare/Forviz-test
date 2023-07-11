import React, { useEffect } from 'react';
import moment from 'moment';

const RoomSchedule = () => {
  const schedule = [
    {
      date: { DDD: 'Monday', mmyyyy: '28 Sep' },
      detail: [
        { time: '13:00 - 14:00', activity: 'Lunch with Petr' },
        { time: '15:00 - 16:00', activity: 'Sales Weekly Meeting' },
        { time: '16:00 - 18:00', activity: 'Anastasia Website Warroom' },
      ],
    },
    {
      date: { DDD: 'Tuesday', mmyyyy: '29 Sep' },
      detail: [
        { time: '13:00 - 14:00', activity: 'One-on-one Session' },
        { time: '16:00 - 18:00', activity: 'UGC Sprint Planning' },
      ],
    },
  ];
  return (
    <div className='container'>
      <div>
        <div>A101</div>
        <div>
          <div>Upcoming</div>
          <div>{schedule[0].date.DDD}</div>
          <div>{schedule[0].date.mmyyyy}</div>
          {schedule[0].detail.map((item, i) => {
            return (
              <div key={i}>
                <div>{item.time}</div>
                <div>{item.activity}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <div>This week</div>
          <div>NEXT WEEK</div>
          <div>WHOLE MONTH</div>
        </div>
        <div>
          {schedule.map((sche, i) => {
            return (
              <div key={i}>
                <div>
                  {i == 0 ? 'Today' : 'Tomorrow'} ({sche.date.DDD.slice(0, 3)},{' '}
                  {sche.date.mmyyyy})
                </div>
                {sche.detail.map((item, i) => {
                  return (
                    <div key={i}>
                      <div>{item.time}</div>
                      <div>{item.activity}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSchedule;
