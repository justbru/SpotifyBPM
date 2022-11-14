const express = require('express');
const cors = require('cors');

const playlistUtil = require('./playlist_utils');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

/* send to login page */

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* send to home page */

app.get('/home', async (req, res) => {
   const genre = req.query['genre'];
   const bpm = req.query['bpm'];
   try {
      const result = await playlistUtil.getPlaylists(genre, bpm);
      res.send({playlist_list: result});
   }
   catch(error){
      console.log(error);
      res.status(500).send('Server Error')
   }
});

app.delete('/generated/:id', async (req, res) => {
   const sid = req.params['id'];
   const status = await playlistUtil.deleteBySid(sid)
   if (status){
      res.status(204).end();
   }
   else{
      res.status(404).send('Playlist not found');
   }
});

app.post('/generated', async (req, res) => {
   const playlist = req.body;
   const savedPlaylist = await playlistUtil.postPlaylist(playlist);
   if (savedPlaylist)
       res.status(201).send(savedPlaylist);
   else
       res.status(500).end();
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:4000`);
});