
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/footer';
import SideNav from '../components/sideNavComponent';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { createTheme } from '@mui/material/styles';
import { Modal, Button, TextField } from '@mui/material';

function Comment({ username, text }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]); 
  const [showReplies, setShowReplies] = useState(false); 

  const handleReplyClick = () => {
    setIsReplying(!isReplying); 
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      const defaultUsername = 'username'; 

      setReplies([...replies, { text: replyText, username: defaultUsername }]); 
      setReplyText(''); 
      setIsReplying(false); 
    }
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies); 
  };

  return (
    <div style={{ borderRadius: '4px', margin: '10px 0', padding: '10px', color: 'black', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <h5 style={{ margin: '0', marginRight: '10px', fontSize: '1em' }}>{username}</h5>
      </div>
      <p style={{ margin: '5px 0' }}>{text}</p>

      <p style={{ margin: '5px 0' }}>
        <button
          onClick={handleReplyClick}
          style={{
            padding: '0.5px 0px',
            backgroundColor: 'white',
            color: '#28a745',
            border: 'none',
            fontSize: '0.9em',
            cursor: 'pointer',
          }}
        >
          Vastaa
        </button>
      </p>

      {isReplying && (
        <form onSubmit={handleReplySubmit} style={{ marginTop: '10px' }}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows="3"
            placeholder="Kirjoita vastauksesi..."
            style={{
              width: '100%',
              padding: '10px',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              color: 'black',
              marginBottom: '10px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '5px 10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Vastaa
          </button>
        </form>
      )}

      {replies.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={toggleReplies}
            style={{
              padding: '0px 0px',
              backgroundColor: 'white',
              color: '#28a745',
              border: 'none',
              fontSize: '0.9em',
              cursor: 'pointer',
              boxShadow: 'none',
              borderRadius: '4px',
              marginLeft:'10px'
            }}
          >
             {showReplies ? ' ^' : `Vastauksia (${replies.length})`} 
          </button>
        </div>
      )}

      {showReplies && replies.length > 0 && (
        <div style={{ marginTop: '10px', paddingLeft: '20px' }}>
          {replies.map((reply, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p style={{ fontSize: '1.0em', fontWeight: 'bold', margin: '0' }}>
                {reply.username}
              </p>
              <p style={{ fontSize: '0.9em', color: '#555', margin: '0' }}>
                {reply.text}
              </p>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '1.0em' }}>
        <FaThumbsUp style={{ marginRight: '10px', cursor: 'pointer' }} />
        <FaThumbsDown style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default function VideoView({ url }) {
  const playerRef = useRef(null);
  const [selectedSection, setSelectedSection] = useState('comments');
  const [comments, setComments] = useState([
    { username: 'Anonymous', text: 'testi!' },
    { username: 'Joku', text: 'testi1' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [noteHeader, setNoteHeader] = useState('');
  const [expandedNoteIndex, setExpandedNoteIndex] = useState(null);

  
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [openEditNoteModal, setOpenEditNoteModal] = useState(false); 
  const [currentEditingNote, setCurrentEditingNote] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { username: 'User', text: newComment }]);
      setNewComment('');
    }
  };

  const handleAddNote = () => {
    if (!newNote.trim() || !playerRef.current) return;

    const timestamp = playerRef.current.getCurrentTime();
    const updatedNotes = [...notes, { timestamp, text: newNote, header: noteHeader || '' }];
    setNotes(updatedNotes);
    setNewNote('');
    setNoteHeader('');
    setOpenNoteModal(false); 
  };

  const handleSeekToNote = (timestamp) => {
    if (playerRef.current) {
      playerRef.current.seekTo(timestamp, 'seconds');
    }
  };

  const toggleNoteExpansion = (index) => {
    setExpandedNoteIndex(expandedNoteIndex === index ? null : index);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };

  const handleEditNote = (note) => {
    setCurrentEditingNote(note);
    setOpenEditNoteModal(true);
    setIsEditing(false);
  };

  const handleUpdateNote = () => {
    if (!currentEditingNote) return;

    const updatedNotes = notes.map((note) =>
      note.timestamp === currentEditingNote.timestamp ? currentEditingNote : note
    );
    setNotes(updatedNotes);
    setOpenEditNoteModal(false);
    setCurrentEditingNote(null);
    setIsEditing(false);
  };
  const handleEnableEditMode = () => {
    setIsEditing(true); 
  };

  return (
    <>
      <NavigationBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100vw', minHeight: '100vh', backgroundColor: 'white' }}>
        <Box sx={{ width: '75%', display: 'flex', flexDirection: 'column', padding: '40px', alignItems: 'center', backgroundColor: 'white', overflowY: 'auto', marginTop: '20px' }}>
          <Typography sx={{ color: 'black', fontSize: '1.5em', fontWeight: 'bold', paddingBottom: '20px' }}>JAVAN PERUSTEET</Typography>
          <Typography sx={{ color: 'black', fontSize: '1em', paddingBottom: '20px' }}>Kurssi0101</Typography>

          <Box sx={{ width: '100%', backgroundColor: '#F4F4F4', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginBottom: '10px'}}>
            <ReactPlayer ref={playerRef} url={url || 'https://www.youtube.com/watch?v=eIrMbAQSU34'} controls width="100%" />
          </Box>

          <div style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
            <button
              onClick={() => setSelectedSection('comments')}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: selectedSection === 'comments' ? '#28a745' : '#f0f0f0',
                color: selectedSection === 'comments' ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '5px'
              }}
            >
              Kommentit
            </button>
            <button
              onClick={() => setSelectedSection('notes')}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: selectedSection === 'notes' ? '#28a745' : '#f0f0f0',
                color: selectedSection === 'notes' ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '5px'
              }}
            >
              Muistiinpanot
            </button>
            <button
              onClick={() => setSelectedSection('description')}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: selectedSection === 'description' ? '#28a745' : '#f0f0f0',
                color: selectedSection === 'description' ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '5px'
              }}
            >
              Kuvaus
            </button>
          </div>

          {selectedSection === 'comments' && (
            <Box sx={{ width: '100%', marginTop: '20px', backgroundColor: 'white', padding: '20px', borderTop: '1px solid #ddd' }}>
              <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'left' }}>Comments</Typography>
              <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Kommentoi..."
                  style={{
                    padding: '5px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize:'1em',
                    width: '100%' 
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '10px',
                    marginTop: '10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '120px', 
                    alignSelf: 'flex-start' 
                  }}
                >
                  Kommentoi
                </button>
              </form>
              {comments.map((comment, index) => (
                <Comment key={index} username={comment.username} text={comment.text} />
              ))}
            </Box>
          )}

          {selectedSection === 'notes' && (
            <Box sx={{ width: '100%', marginTop: '20px', marginBottom: '10px', backgroundColor: 'white', padding: '20px', borderTop: '1px solid #ddd' }}>
              <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>Muistiinpanot</Typography>
              <button
                onClick={() => setOpenNoteModal(true)}
                style={{
                  padding: '10px',
                  marginBottom: '20px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft:'35px'
                }}
              >
                Kirjoita muistiinpanoja
              </button>
              
              <div style={{ marginTop: '20px' }}>
                {notes.map((note, index) => (
                  <div
                    key={index}
                    onClick={() => handleEditNote(note)} 
                    style={{
                      padding: '15px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      marginTop: '10px',
                      backgroundColor: '#f4f4f4',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div style={{ fontWeight: 'bold', marginBottom: '5px', color: 'black' }}>
                      <span
                        onClick={() => handleSeekToNote(note.timestamp)}
                        style={{
                          color: '#28a745',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          marginRight: '10px',
                        }}
                      >
                        {`Java Full Course for Beginners - ${formatTimestamp(note.timestamp)}`}
                      </span>
                    </div>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '5px', color: 'black' }}>
                      {note.header}
                    </div>
                    <div style={{ color: 'black' }}>
                      {note.text.length > 100 ? `${note.text.substring(0, 100)}...` : note.text}
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          )}
        </Box>

       
        <Modal
          open={openNoteModal}
          onClose={() => setOpenNoteModal(false)}
          aria-labelledby="note-modal-title"
          aria-describedby="note-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: 24,
              width: '80vw',
              height:'800px',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
            }}
          >
            <Typography id="note-modal-title" variant="h6" component="h2">
              Lisää Muistiinpano
            </Typography>
            
            <TextField
              label="Muistiinpanon otsikko"
              fullWidth
              variant="outlined"
              margin="normal"
              value={noteHeader}
              onChange={(e) => setNoteHeader(e.target.value)}
            />
            <TextField
              label="Muistiinpano"
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={30}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button variant="contained" color="primary" onClick={handleAddNote}>
                Lisää
              </Button>
            </Box>
          </Box>
        </Modal>

        
        
        <Modal
          open={openEditNoteModal}
          onClose={() => setOpenEditNoteModal(false)}
          aria-labelledby="edit-note-modal-title"
          aria-describedby="edit-note-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: 24,
              width: '90vw',
              height:'800px',
              maxWidth: '800px',
              maxHeight: '190vh',
              overflow: 'auto',
            }}
          >
           
            <Typography id="edit-note-modal-title" variant="h6" component="h2">
              {isEditing ? 'Muokkaa Muistiinpano' : 'Lue Muistiinpano'}
            </Typography>
            <Typography sx={{ fontSize: '1.1em', marginBottom: '10px', color: 'black' }}>
      Javan perusteet: {formatTimestamp(playerRef.current.getCurrentTime())}
    </Typography>
            <TextField
              label="Muistiinpanon otsikko"
              fullWidth
              variant="outlined"
              margin="normal"
              value={currentEditingNote?.header || ''}
              onChange={(e) => setCurrentEditingNote({ ...currentEditingNote, header: e.target.value })}
              InputProps={{
                readOnly: !isEditing, 
              }}
            />
            <TextField
              label="Muistiinpano"
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={30}
              value={currentEditingNote?.text || ''}
              onChange={(e) => setCurrentEditingNote({ ...currentEditingNote, text: e.target.value })}
              InputProps={{
                readOnly: !isEditing, 
              }}
            />

            {!isEditing && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleEnableEditMode}>
                  Muokkaa
                </Button>
              </Box>
            )}

            {isEditing && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleUpdateNote}>
                  Tallenna muutokset
                </Button>
              </Box>
            )}
          </Box>
        </Modal>

        <SideNav />
      </Box>

      <Footer />
    </>
  );
}
