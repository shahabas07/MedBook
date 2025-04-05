import React, { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import css from './book.scss';

// Mock Data
const availableDays = [6, 7, 9, 11, 15, 18, 21, 24, 27]; // April mock availability
const mockSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

const Book = () => {
  const today = new Date();
  const year = today.getFullYear();
  const monthIndex = today.getMonth(); // 0 = Jan
  const monthName = today.toLocaleString('default', { month: 'long' });

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (selectedDay) {
      // Simulate API fetch for that day's slots
      setSelectedSlots(mockSlots);
      setSelectedTime(null);
      setShowForm(false);
    }
  }, [selectedDay]);

  const handleDayClick = (day) => {
    if (availableDays.includes(day)) {
      setSelectedDay(day);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  return (
    <div className={css['booking-container']}>
      <div className={css['booking-header']}>
        <h2 className={css['title-animate']}>Book an Appointment</h2>
        <p className={`${css.location} ${css['float-animate']}`}>
          <FiMapPin /> Medical Center
        </p>
      </div>

      <div className={`${css['calendar-placeholder']} ${css['slide-in']}`}>
        <div className={css['calendar-header']}>
          <h3>{monthName} {year}</h3>
          <div className={css['calendar-nav']}>
            <button disabled>‹</button>
            <button disabled>›</button>
          </div>
        </div>
        <div className={css['calendar-grid']}>
          <div className={css.weekdays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className={css.weekday}>{day}</div>
            ))}
          </div>
          <div className={css.days}>
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 4;
              const isAvailable = availableDays.includes(day);
              return (
                <div
                  key={i}
                  className={`${css.day} ${isAvailable ? css.available : css.disabled} ${selectedDay === day ? css.selected : ''} ${css['pulse-animate']}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day > 0 && day <= 31 ? day : ''}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedDay && (
        <div className={`${css['time-slots-placeholder']} ${css['fade-in']}`}>
          <h3><FiCalendar /> {monthName} {selectedDay}, {year}</h3>
          <div className={css['time-slots-grid']}>
            {selectedSlots.map(time => (
              <button 
                key={time} 
                className={`${css['time-slot']} ${selectedTime === time ? css['time-selected'] : ''} ${css['bounce-animate']}`}
                onClick={() => handleTimeClick(time)}
              >
                <FiClock /> {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {showForm && (
        <div className={`${css['booking-form-placeholder']} ${css['fly-in']}`}>
          <h3>Patient Details</h3>
          <form>
            <div className={`${css['form-group']} ${css['form-animate']}`}>
              <label><FiUser /> Full Name</label>
              <input type="text" placeholder="name" />
            </div>
            <div className={`${css['form-group']} ${css['form-animate']}`} style={{ animationDelay: '0.1s' }}>
              <label><FiMail /> Email</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className={`${css['form-group']} ${css['form-animate']}`} style={{ animationDelay: '0.2s' }}>
              <label><FiPhone /> Phone Number</label>
              <input type="tel" placeholder="123 3445 234" />
            </div>
            <button type="submit" className={`${css['submit-btn']} ${css['pulse-animate']}`}>
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Book;