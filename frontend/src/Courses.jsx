import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Courses() {
  const location = useLocation();

  const courseOptions = useMemo(
    () => [
      { id: 1, name: 'Web Development', duration: '3 Months' },
      { id: 2, name: 'Data Science', duration: '4 Months' },
      { id: 3, name: 'Machine Learning', duration: '5 Months' },
      { id: 4, name: 'Digital Marketing', duration: '2 Months' },
    ],
    []
  );

  const timeIntervals = useMemo(
    () => [
      'Morning (8am - 10am)',
      'Afternoon (1pm - 3pm)',
      'Evening (6pm - 8pm)',
    ],
    []
  );

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseIdToTime, setCourseIdToTime] = useState({});
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  // Optional: pre-select courses when coming from Home package selection
  useEffect(() => {
    const state = location?.state;
    if (!state || !state.fromPackage || !state.selectedPackage) return;

    const packageCourses = {
      'Starter Package': ['Web Development', 'Digital Marketing'],
      'Professional Package': ['Web Development', 'Data Science', 'Digital Marketing'],
      'Complete Package': ['Web Development', 'Data Science', 'Machine Learning', 'Digital Marketing'],
    };

    const names = packageCourses[state.selectedPackage] || [];
    const toSelect = courseOptions.filter((c) => names.includes(c.name));
    setSelectedCourses(toSelect);
    setCourseIdToTime({});
  }, [location?.state, courseOptions]);

  const isAllTimesChosen =
    selectedCourses.length > 0 &&
    selectedCourses.every((c) => Boolean(courseIdToTime[c.id]));

  function toggleCourseSelection(course) {
    const alreadySelected = selectedCourses.some((c) => c.id === course.id);
    if (alreadySelected) {
      const remaining = selectedCourses.filter((c) => c.id !== course.id);
      const newMap = { ...courseIdToTime };
      delete newMap[course.id];
      setSelectedCourses(remaining);
      setCourseIdToTime(newMap);
      return;
    }
    setSelectedCourses([...selectedCourses, course]);
  }

  function selectTimeForCourse(courseId, interval) {
    // Prevent time conflicts across selected courses
    const taken = Object.entries(courseIdToTime).some(([otherId, otherInterval]) => {
      return Number(otherId) !== courseId && otherInterval === interval;
    });
    if (taken) {
      alert('This time slot is already taken by another selected course. Choose a different time.');
      return;
    }
    setCourseIdToTime({ ...courseIdToTime, [courseId]: interval });
  }

  function handleSubmitRegistration(event) {
    event.preventDefault();
    if (!isAllTimesChosen || !studentName || !studentEmail) {
      alert('Please fill in your details and assign a time slot for each selected course.');
      return;
    }

    const summary = selectedCourses
      .map((c) => `Course: ${c.name}\nDuration: ${c.duration}\nTime: ${courseIdToTime[c.id]}`)
      .join('\n\n');

    alert(`Registered Successfully!\n\nName: ${studentName}\nEmail: ${studentEmail}\n\n${summary}`);

    // Reset
    setSelectedCourses([]);
    setCourseIdToTime({});
    setStudentName('');
    setStudentEmail('');
  }

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#2a2a2a',
          }}
        >
          Choose Your Courses
        </h2>

        <p
          style={{
            textAlign: 'center',
            fontSize: '16px',
            marginBottom: '30px',
            color: '#555',
          }}
        >
          Select one or more courses. Each selected course must have a different time slot.
        </p>

        {/* Course Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {courseOptions.map((course) => {
            const selected = selectedCourses.some((c) => c.id === course.id);
            return (
              <div
                key={course.id}
                onClick={() => toggleCourseSelection(course)}
                style={{
                  padding: '20px',
                  border: selected ? '3px solid #2A7D66' : '2px solid #e0e0e0',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: selected ? '#e0f5f0' : '#fff',
                  transition: 'all 0.2s ease',
                  boxShadow: selected
                    ? '0 8px 25px rgba(42,125,102,0.2)'
                    : '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#2a2a2a' }}>
                  {course.name}
                </h3>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                  Duration: {course.duration}
                </p>
                {selected && (
                  <div
                    style={{
                      background: '#2A7D66',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'inline-block',
                    }}
                  >
                    ✓ Selected
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Time assignment per selected course */}
        {selectedCourses.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#2a2a2a' }}>
              Assign Time Slots
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              {selectedCourses.map((course) => (
                <div
                  key={course.id}
                  style={{ border: '2px solid #e0e0e0', borderRadius: '12px', padding: '16px', background: '#f8f9fa' }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '12px', color: '#2a2a2a' }}>{course.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {timeIntervals.map((interval) => {
                      const checked = courseIdToTime[course.id] === interval;
                      const takenByOther = Object.entries(courseIdToTime).some(([otherId, otherInterval]) => {
                        return Number(otherId) !== course.id && otherInterval === interval;
                      });
                      return (
                        <label
                          key={interval}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            borderRadius: '8px',
                            background: checked ? '#2A7D66' : takenByOther ? '#efefef' : '#fff',
                            color: checked ? '#fff' : takenByOther ? '#999' : '#333',
                            border: checked ? '2px solid #2A7D66' : '2px solid #e0e0e0',
                            cursor: takenByOther ? 'not-allowed' : 'pointer',
                            opacity: takenByOther ? 0.6 : 1,
                          }}
                        >
                          <input
                            type="radio"
                            name={`time-${course.id}`}
                            value={interval}
                            checked={checked}
                            onChange={() => selectTimeForCourse(course.id, interval)}
                            disabled={takenByOther}
                            style={{ marginRight: '10px' }}
                          />
                          {interval}
                          {takenByOther && (
                            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#ff6b3d' }}>(Taken)</span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration form */}
        {isAllTimesChosen && (
          <div
            style={{
              maxWidth: '520px',
              margin: '0 auto',
              padding: '24px',
              background: '#f8f9fa',
              borderRadius: '12px',
            }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '16px', color: '#2a2a2a' }}>Complete Registration</h3>
            <form onSubmit={handleSubmitRegistration}>
              <div style={{ marginBottom: '12px' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    fontSize: '16px',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: '#2A7D66',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Register for {selectedCourses.length} Course{selectedCourses.length > 1 ? 's' : ''}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
          color: '#fff',
          padding: '40px 20px',
          marginTop: '40px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff6b3d', marginBottom: '10px' }}>
                QEMER TECHNOLOGY
              </div>
              <div style={{ opacity: 0.9 }}>
                Empowering students with cutting-edge technology education and innovative learning solutions.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#ff6b3d', marginBottom: '10px' }}>Contact</div>
              <div>📍 123 Education Street, Tech City, TC 12345</div>
              <div>📧 info@qemertechnology.com</div>
              <div>📞 +1 (555) 123-4567</div>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#ff6b3d', marginBottom: '10px' }}>Quick Links</div>
              <div><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></div>
              <div><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></div>
              <div><a href="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</a></div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '12px', fontSize: '14px', opacity: 0.85 }}>
            © 2024 QEMER TECHNOLOGY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Courses;


