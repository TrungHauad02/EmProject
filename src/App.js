import React from 'react';
import { useState,useEffect  } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const birthdayTime = new Date('2024-03-03T00:00:00');
  const timeDifference = currentTime.getTime() - birthdayTime.getTime();

  const seconds = Math.floor(timeDifference / 1000) % 60;
  const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BirthdayWish
          seconds={seconds}
          minutes={minutes}
          hours={hours}
          days={days}
          showPopup={showPopup}
          onClick={handleClick}
          onClose={closePopup}
        />
      </header>
    </div>
  );
}

function BirthdayWish({ seconds, minutes, hours, days , showPopup, onClick, onClose}) {
  return (
    <div>
      <h1>CHÚC MỪNG SINH NHẬT EM</h1>
      <img src="/birthday.png" alt="Happy Birthday" />
      <button onClick={onClick}>Click Me</button>
      {showPopup && (
        <div className="popup">
          <p className="redText">Anh xin lỗi em nhiều ạ</p>
          <p>
            Anh xin lỗi em nhiều vì đã không chúc mừng sinh nhật em vào {' '}
            {days} ngày, {hours} giờ, {minutes} phút, {seconds} giây trước.
          </p>
          <p><i>Hôm trước khi anh ngủ dậy trước khi mình đi ăn mỳ cay anh đã có nhớ nhưng loay hoay một hồi xong anh đã quên mất
            Anh xin lỗi em nhiều ạ {':((('}
          </i></p>
          <button onClick={onClose}>Đóng</button>
        </div>
      )}
    </div>
  );
}

export default App;
