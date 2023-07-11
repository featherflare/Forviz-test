import React, { useEffect, useRef } from 'react';

const RoomSchedule = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const boxref = useRef();

  // mock up data
  const schedule = [
    {
      date: { DDD: 'Monday', mmyyyy: '28 Sep' },
      detail: [
        {
          time: '13:00 - 14:00',
          activity: 'Lunch with Petr',
          color: '#3DC7D2',
        },
        {
          time: '15:00 - 16:00',
          activity: 'Sales Weekly Meeting',
          color: '#23CF5F',
        },
        {
          time: '16:00 - 18:00',
          activity: 'Anastasia Website Warroom',
          color: '#F3814A',
        },
      ],
    },
    {
      date: { DDD: 'Tuesday', mmyyyy: '29 Sep' },
      detail: [
        {
          time: '13:00 - 14:00',
          activity: 'One-on-one Session',
          color: '#3DC7D2',
        },
        {
          time: '16:00 - 18:00',
          activity: 'UGC Sprint Planning',
          color: '#23CF5F',
        },
      ],
    },
  ];

  // set start bar under navbar
  useEffect(() => {
    ref4.current.style.left =
      boxref.current.offsetWidth * 0.09 + ref1.current.offsetWidth / 2 + 'px';
    console.log(ref1.current.offsetWidth, ref4.current.style.left);
  }, []);

  return (
    <div className='container flex'>
      <div className='left-con'>
        <div className='header1 padding1 bglightblue fontwhite'>A101</div>
        <div className='padding2'>
          <div className='body1 fontwhite'>Upcoming</div>
          <div className='padding3'>
            <div className='header2 fontgrey'>{schedule[0].date.DDD}</div>
            <div className='header2 fontwhite'>{schedule[0].date.mmyyyy}</div>
          </div>
          {schedule[0].detail.map((item, i) => {
            return (
              <div className='padding4' key={i}>
                <div className='body2 fontgrey'>{item.time}</div>
                <div className='body3 fontwhite'>{item.activity}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='right-con' ref={boxref}>
        <div className='line'></div>
        <div className='flex gap padding5'>
          <div
            className='body4 fontgrey2 select'
            ref={ref1}
            onClick={(e) => {
              ref4.current.style.left =
                boxref.current.offsetWidth * 0.09 +
                ref1.current.offsetWidth / 2 +
                'px';
              ref1.current.classList.add('select');
              ref2.current.classList.remove('select');
              ref3.current.classList.remove('select');
            }}
          >
            This week
          </div>
          <div
            className='body4 fontgrey2'
            ref={ref2}
            onClick={() => {
              ref4.current.style.left =
                boxref.current.offsetWidth * 0.16 +
                ref1.current.offsetWidth +
                ref2.current.offsetWidth / 2 +
                'px';
              ref1.current.classList.remove('select');
              ref2.current.classList.add('select');
              ref3.current.classList.remove('select');
            }}
          >
            NEXT WEEK
          </div>
          <div
            className='body4 fontgrey2'
            ref={ref3}
            onClick={() => {
              ref4.current.style.left =
                boxref.current.offsetWidth * 0.23 +
                ref1.current.offsetWidth +
                ref2.current.offsetWidth +
                ref3.current.offsetWidth / 2 +
                'px';
              ref1.current.classList.remove('select');
              ref2.current.classList.remove('select');
              ref3.current.classList.add('select');
            }}
          >
            WHOLE MONTH
          </div>
          <div className='active' ref={ref4}></div>
        </div>
        <div className='bgwhite padding7'>
          {schedule.map((sche, i) => {
            return (
              <div className='padding7' key={i}>
                <div className='body5 bglightgrey padding6 margin1 fontmedgrey'>
                  {i == 0 ? 'Today' : 'Tomorrow'} ({sche.date.DDD.slice(0, 3)},{' '}
                  {sche.date.mmyyyy})
                </div>
                {sche.detail.map((item, i) => {
                  return (
                    <div
                      className={`${i == 2 ? 'padding8' : 'padding6'}`}
                      key={i}
                    >
                      <div className='body2 box fontgrey2' d-color={item.color}>
                        {item.time}
                      </div>
                      <div className='body3'>{item.activity}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomSchedule;
