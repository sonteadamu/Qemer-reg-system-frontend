import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handlePackageSelect = (packageName) => {
    // Navigate to courses page with package information
    navigate('/courses', { 
      state: { 
        selectedPackage: packageName,
        fromPackage: true 
      } 
    });
  };
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
        color: '#fff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(135, 206, 250, 0.3)',
          borderRadius: '50%',
          transform: 'translateY(-50%)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 107, 61, 0.3)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ flex: '1', maxWidth: '500px' }}>
            <p style={{
              fontSize: '16px',
              marginBottom: '20px',
              opacity: 0.9
            }}>
              Learn New Skills & Popular Courses
            </p>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              For Every Student,<br />
              <span style={{ color: '#ff6b3d' }}>Every Classroom.</span>
            </h1>
            <p style={{
              fontSize: '18px',
              marginBottom: '30px',
              opacity: 0.8,
              lineHeight: '1.6'
            }}>
              Dramatically supply transparent deliverables before backward comp internal or "organic" sources. Competently leverage other.
            </p>
            <button 
              onClick={() => navigate('/courses')}
              style={{
                background: '#ff6b3d',
                color: '#fff',
                padding: '15px 32px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Explore Courses
            </button>
          </div>
          <div style={{ flex: '1', textAlign: 'center', position: 'relative' }}>
            <img 
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400" 
              alt="Student" 
              style={{
                maxWidth: '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section style={{
        background: '#fff',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#ff6b3d',
            fontSize: '16px',
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            What We Offer
          </p>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '50px',
            color: '#2a2a2a'
          }}>
            For Your Future Learning.
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: '📚',
                title: 'Online Courses',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Trainer',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '🎓',
                title: 'Get Certificate',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '⏰',
                title: 'Life Time Access',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#2a7d66',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#2a2a2a'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Packages Section */}
      <section style={{
        background: '#fff',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#ff6b3d',
            fontSize: '16px',
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            Course Packages
          </p>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '50px',
            color: '#2a2a2a'
          }}>
            Choose Your Learning Path
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              {
                name: 'Starter Package',
                price: '$299',
                duration: '3 Months',
                courses: ['Web Development', 'Digital Marketing'],
                features: ['2 Courses Included', 'Basic Support', 'Certificate', 'Lifetime Access'],
                popular: false
              },
              {
                name: 'Professional Package',
                price: '$599',
                duration: '6 Months',
                courses: ['Web Development', 'Data Science', 'Digital Marketing'],
                features: ['3 Courses Included', 'Priority Support', 'Certificate', 'Lifetime Access', '1-on-1 Mentoring'],
                popular: true
              },
              {
                name: 'Complete Package',
                price: '$899',
                duration: '8 Months',
                courses: ['Web Development', 'Data Science', 'Machine Learning', 'Digital Marketing'],
                features: ['4 Courses Included', 'Premium Support', 'Certificate', 'Lifetime Access', '1-on-1 Mentoring', 'Career Guidance'],
                popular: false
              }
            ].map((pkg, idx) => (
              <div key={idx} style={{
                background: pkg.popular ? 'linear-gradient(135deg, #2a7d66 0%, #1a4a5e 100%)' : '#fff',
                color: pkg.popular ? '#fff' : '#2a2a2a',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: pkg.popular ? '0 20px 40px rgba(42, 125, 102, 0.3)' : '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                transform: pkg.popular ? 'scale(1.05)' : 'none',
                border: pkg.popular ? '3px solid #ff6b3d' : '2px solid transparent'
              }}>
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#ff6b3d',
                    color: '#fff',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  {pkg.name}
                </h3>
                
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  marginBottom: '5px',
                  color: pkg.popular ? '#ff6b3d' : '#2a7d66'
                }}>
                  {pkg.price}
                </div>
                
                <p style={{
                  fontSize: '16px',
                  marginBottom: '30px',
                  opacity: 0.8
                }}>
                  {pkg.duration}
                </p>
                
                <div style={{
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    Courses Included:
                  </h4>
                  {pkg.courses.map((course, courseIdx) => (
                    <div key={courseIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px',
                      fontSize: '14px'
                    }}>
                      <span style={{
                        marginRight: '10px',
                        color: pkg.popular ? '#ff6b3d' : '#2a7d66',
                        fontSize: '16px'
                      }}>
                        ✓
                      </span>
                      {course}
                    </div>
                  ))}
                </div>
                
                <div style={{
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    Features:
                  </h4>
                  {pkg.features.map((feature, featureIdx) => (
                    <div key={featureIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px',
                      fontSize: '14px'
                    }}>
                      <span style={{
                        marginRight: '10px',
                        color: pkg.popular ? '#ff6b3d' : '#2a7d66',
                        fontSize: '16px'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handlePackageSelect(pkg.name)}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: pkg.popular ? '#ff6b3d' : '#2a7d66',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Courses Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              display: 'inline-block'
            }}>
              <img 
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=400" 
                alt="About Courses" 
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#ff6b3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                🌍
              </div>
            </div>
          </div>
          
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <p style={{
              color: '#ff6b3d',
              fontSize: '16px',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              About Our Courses
            </p>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2a2a2a',
              lineHeight: '1.2'
            }}>
              Explore Thousands of Creative Classes.
            </h2>
            <p style={{
              color: '#666',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              Dramatically supply transparent deliverables before backward comp internal or "organic" sources. Competently leverage other.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
        color: '#fff',
        padding: '60px 0 30px',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Company Info */}
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ff6b3d'
              }}>
                QEMER TECHNOLOGY
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '20px',
                opacity: 0.9
              }}>
                Empowering students with cutting-edge technology education and innovative learning solutions for the digital future.
              </p>
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  📘
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  📘
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  📘
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b3d'
              }}>
                Contact Information
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px'
                }}>
                  <span style={{ fontSize: '20px' }}>📍</span>
                  <span>123 Education Street, Tech City, TC 12345</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px'
                }}>
                  <span style={{ fontSize: '20px' }}>📧</span>
                  <span>info@qemertechnology.com</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px'
                }}>
                  <span style={{ fontSize: '20px' }}>📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px'
                }}>
                  <span style={{ fontSize: '20px' }}>🌐</span>
                  <span>www.qemertechnology.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b3d'
              }}>
                Quick Links
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <a href="/" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}>Home</a>
                <a href="/about" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}>About Us</a>
                <a href="/courses" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}>Courses</a>
                <a href="/blog" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}>Blog</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b3d'
              }}>
                Our Services
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{
                  fontSize: '16px',
                  opacity: 0.9
                }}>Web Development Training</span>
                <span style={{
                  fontSize: '16px',
                  opacity: 0.9
                }}>Data Science Programs</span>
                <span style={{
                  fontSize: '16px',
                  opacity: 0.9
                }}>Machine Learning Courses</span>
                <span style={{
                  fontSize: '16px',
                  opacity: 0.9
                }}>Digital Marketing</span>
                <span style={{
                  fontSize: '16px',
                  opacity: 0.9
                }}>Career Guidance</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '30px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              opacity: 0.8,
              marginBottom: '10px'
            }}>
              © 2024 QEMER TECHNOLOGY. All rights reserved.
            </p>
            <p style={{
              fontSize: '14px',
              opacity: 0.8
            }}>
              Empowering the next generation of tech professionals through innovative education and cutting-edge technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;