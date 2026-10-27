import React from 'react'

function Testimony() {
  const people = [
    'https://i.pravatar.cc/100?img=1',
    'https://i.pravatar.cc/100?img=2',
    'https://i.pravatar.cc/100?img=3',
    'https://i.pravatar.cc/100?img=4',
    'https://i.pravatar.cc/100?img=5',
    'https://i.pravatar.cc/100?img=6',
    'https://i.pravatar.cc/100?img=7',
    'https://i.pravatar.cc/100?img=8',
    'https://i.pravatar.cc/100?img=9',
    'https://i.pravatar.cc/100?img=10',
    'https://i.pravatar.cc/100?img=11',
    'https://i.pravatar.cc/100?img=12'
  ]

  return (
    <>
      <style>
        {`
          .testimony {
            width: 90%;
            margin: 60px auto;
            padding: 45px;
            background-color: white;
            border-radius: 25px;
            box-sizing: border-box;
          }

          .testimony-title {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 45px;
          }

          .testimony-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
          }

          .testimony-text {
            width: 50%;
          }

          .testimony-text h3 {
            font-size: 20px;
            margin-bottom: 12px;
          }

          .testimony-text p {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 18px;
          }

          .people {
            width: 40%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }

          .people img {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 2px;
          }

          @media (max-width: 768px) {

            .testimony {
              padding: 30px;
            }

            .testimony-title {
              font-size: 30px;
            }

            .testimony-content {
              flex-direction: column;
            }

            .testimony-text {
              width: 100%;
            }

            .people {
              width: 100%;
              justify-content: center;
            }

          }

          @media (max-width: 450px) {

            .people {
              grid-template-columns: repeat(3, 1fr);
            }

            .people img {
              width: 60px;
              height: 60px;
            }

          }
        `}
      </style>

      <section className="testimony">

        <h2 className="testimony-title">
          Testimony
        </h2>

        <div className="testimony-content">

          <div className="testimony-text">

            <h3>
              Trusted by professionals worldwide.
            </h3>

            <p>
              At rBuilder, we don't just help you create résumés —
              we help you land the job. Whether you're a seasoned
              professional or just starting out, our tools are
              designed to get results.
            </p>

            <p>
              In fact, users who used rBuilder reported getting
              hired an average of 48 days faster.
            </p>

            <p>
              Join thousands of job-seekers who've fast-tracked
              their careers with a résumé that truly stands out.
            </p>

          </div>

          <div className="people">

            {people.map((person, index) => (
              <img
                key={index}
                src={person}
                alt="User"
              />
            ))}

          </div>

        </div>

      </section>
    </>
  )
}

export default Testimony