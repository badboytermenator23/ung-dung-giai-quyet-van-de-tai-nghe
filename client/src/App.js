import React from 'react';
import './App.css';

function App() {
  const [issue, setIssue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic để gửi vấn đề và nhận gợi ý từ server
  };

  return (
    <div className="App">
      <h1>Ứng dụng Giải Quyết Vấn Đề Tai Nghe</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={issue} 
          onChange={(e) => setIssue(e.target.value)} 
          placeholder="Nhập vấn đề của bạn"
        />
        <button type="submit">Gửi</button>
      </form>
      <div>
        <h3>Gợi ý Giải pháp:</h3>
        <ul>{suggestions.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
    </div>
  );
}

export default App;
