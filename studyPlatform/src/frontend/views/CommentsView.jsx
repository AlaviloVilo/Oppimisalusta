import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function Comment({ username, text }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', margin: '10px 0', padding: '10px', color: 'black' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h5 style={{ margin: '0', marginRight: '10px' }}>{username}</h5>
      </div>
      <p style={{ margin: '5px 0' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.2em' }}>
        <FaThumbsUp style={{ marginRight: '10px', cursor: 'pointer' }} />
        <FaThumbsDown style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default function CommentsSection() {
  const [selectedSection, setSelectedSection] = useState('comments'); 
  const [comments, setComments] = useState([
    { username: 'Joku1', text: 'jeejee!' },
    { username: 'Joku2', text: 'joojooo' },
    { username: 'Anonymous', text: 'hyvähyvä' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [notes, setNotes] = useState(''); 
  const [showNotes, setShowNotes] = useState(false); 

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { username: 'User', text: newComment }]);
      setNewComment('');
    }
  };

  const handleNotesSave = () => {
    
    localStorage.setItem('videoNotes', notes);
    alert('Notes saved successfully!');
    setShowNotes(false);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          onClick={() => setSelectedSection('comments')}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: selectedSection === 'comments' ? 'black' : '#f0f0f0',
            color: selectedSection === 'comments' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Comments
        </button>
        <button
          onClick={() => setSelectedSection('notes')}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: selectedSection === 'notes' ? 'black' : '#f0f0f0',
            color: selectedSection === 'notes' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Notes
        </button>
        <button
          onClick={() => setSelectedSection('description')}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: selectedSection === 'description' ? 'black' : '#f0f0f0',
            color: selectedSection === 'description' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Description
        </button>
      </div>

      {selectedSection === 'comments' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Kommentoi..."
                style={{ padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'white' }}
              />
              <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Comment
              </button>
            </form>
          </div>
          {comments.map((comment, index) => (
            <Comment key={index} username={comment.username} text={comment.text} />
          ))}
        </div>
      )}

      {selectedSection === 'notes' && (
        <div style={{ marginTop: '20px' }}>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="8"
            placeholder="Write your notes here..."
            style={{ width: '100%', padding: '10px', fontSize: '1em', borderRadius: '4px', color:'black', border: '1px solid #ccc', backgroundColor: 'white' }}
          />
          
          <button
            
            style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', marginRight: '10px' }}
            >
              Edit
          </button>
          <button
            onClick={handleNotesSave}
            style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', marginRight: '10px' }}
          >
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}
