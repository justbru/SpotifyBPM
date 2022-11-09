const mongoose = require('mongoose');
const PlaylistSchema = require("./playlist");

let dbConnection;

function getDbConnection() {
    if (!dbConnection) {
        dbConnection = mongoose.createConnection("mongodb://localhost:27017/playlists", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return dbConnection;
  }

  /* SID: Spotify ID; not to be mistaken with _id, _id is unused.
  */
async function postPlaylist(sid) {
   const playlistModel = getDbConnection().model("Playlist", PlaylistSchema);
   try{
    const playlistToAdd = new playlistModel(sid);
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
      return await playlistModel.deleteOne({'_id': sid});
   }
   catch(error){
      console.log(error);
      return false;
   }
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

exports.postPlaylist = postPlaylist;
exports.deleteBySid = deleteBySid;
exports.findPlaylistByGenre = findPlaylistByGenre;
exports.findPlaylistBySid = findPlaylistBySid;
exports.findPlaylistByName = findPlaylistByName;
