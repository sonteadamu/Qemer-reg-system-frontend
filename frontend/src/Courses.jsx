import React, { useState } from 'react';

function Courses() {
  const courseOptions = [
    { id: 1, name: 'Web Development', duration: '3 Months' },
    { id: 2, name: 'Data Science', duration: '4 Months' },
    { id: 3, name: 'Machine Learning', duration: '5 Months' },
    { id: 4, name: 'Digital Marketing', duration: '2 Months' },
  ];

  const timeIntervals = [
    'Morning (8am - 10am)',
    'Afternoon (1pm - 3pm)',
    'Evening (6pm - 8pm)',
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (selectedCourse && selectedTime && name && email) {
      alert(`Registered Successfully! \n\nName: ${name}\nEmail: ${email}\nCourse: ${selectedCourse.name}\nDuration: ${selectedCourse.duration}\nTime: ${selectedTime}`);
      // Reset form fields
      setSelectedCourse(null);
      setSelectedTime('');
      setName('');
      setEmail('');
    } else {
      alert('Please select a course, time interval, and input your details.');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Choose a Course</h2>

      {/* Course options */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        {courseOptions.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseSelect(course)}
            style={{
              padding: '15px',
              border: selectedCourse?.id === course.id ? '2px solid #2A7D66' : '2px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              flex: '1 1 200px',
              backgroundColor: selectedCourse?.id === course.id ? '#e0f5f0' : '#fff',
              transition: 'background-color 0.2s, border 0.2s',
            }}
          >
            <strong>{course.name}</strong>
            <br />
            <small>Duration: {course.duration}</small>
          </div>
        ))}
      </div>

      {/* Time interval selection, shown only if a course is selected */}
      {selectedCourse && (
        <>
          <h3>Select Time Interval</h3>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
            {timeIntervals.map((interval, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <input
                  type="radio"
                  id={`interval-${idx}`}
                  name="timeInterval"
                  value={interval}
                  checked={selectedTime === interval}
                  onChange={() => setSelectedTime(interval)}
                />
                <label htmlFor={`interval-${idx}`} style={{ marginLeft: '8px', cursor: 'pointer' }}>
                  {interval}
                </label>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Registration Form, shown only if course and time are selected */}
      {selectedCourse && selectedTime && (
        <form
          onSubmit={handleRegister}
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#2A7D66',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default Courses;