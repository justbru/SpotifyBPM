const mongoose = require('mongoose');
const PlaylistSchema = require("./playlist");

let dbConnection;

function getDbConnection() {
    if (!dbConnection) {
        dbConnection = mongoose.createConnection("mongodb+srv://fdudley:rPQfpsytNB7oC4Fy@spotigodb.bxewpi2.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return dbConnection;
  }

  /* SID: Spotify ID; not to be mistaken with _id, _id is unused.
  */
async function postPlaylist(playlist) {
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   try{
    const playlistToAdd = new playlistModel(playlist);
    const savedPlaylist = await playlistToAdd.save()
    return savedPlaylist;
   }catch(error) {
     console.log(error);
     return false;
   }   
}

async function deleteBySid(sid){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   try{
      return await playlistModel.deleteOne({'sid': sid});
   }
   catch(error){
      console.log(error);
      return false;
   }
}

async function getPlaylists(genre, bpm){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   let result;
   if (genre === undefined && bpm === undefined){
       result = await playlistModel.find();
   }
   else if (genre && !bpm) {
       result = await findPlaylistByGenre(genre);
   }
   else if (bpm && !genre){
       result = await findPlaylistByBPM(bpm);
   } 
   else if (bpm && genre){
      result = await findPlaylistByBoth(genre, bpm);
   }  
   return result;  
}

async function findPlaylistByName(name){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   return await playlistModel.find({'name':name});
}

async function findPlaylistBySid(sid){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   return await playlistModel.find({'sid':sid});
}

async function findPlaylistByGenre(genre){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   return await playlistModel.find({'genre':genre});
}

async function findPlaylistByBPM(bpm){
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   return await playlistModel.find({'bpm':bpm});
}

exports.postPlaylist = postPlaylist;
exports.deleteBySid = deleteBySid;
exports.getPlaylists = getPlaylists;
