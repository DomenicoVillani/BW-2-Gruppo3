import {
  getArtistData,
  getAlbumData,
  getPlaylistData,
  getArtistTracklist,
  searchData,
  convertInHourMinuteSecond,
  convertInMinuteAndSeconds,
} from "./script.js";

// da qui maxiContainer
const filterBar = `<div class="d-flex justify-content-evenly align-items-center mb-5 justify-content-md-start margin-left">
<div class="rounded-pill bg-success p-2">
    <div>
        <p class="mb-0 pointer-cursor">Risultati migliori</p>
    </div>
</div>
<div class="rounded-pill bg-dark p-2 margin-left-header">
    <div>
        <p class="mb-0 pointer-cursor">Artisti</p>
    </div>
</div>
<div class="rounded-pill bg-dark p-2 margin-left-header">
    <div>
        <p class="mb-0 pointer-cursor">Brani</p>
    </div>
</div>
<div class="rounded-pill bg-dark p-2 margin-left-header">
    <div>
        <p class="mb-0 pointer-cursor">Album</p>
    </div>
</div>
<div class="rounded-pill bg-dark p-2 margin-left-header">
    <div>
        <p class="mb-0 pointer-cursor">Playlist</p>
    </div>
</div>
</div>`;

// TODO rendi dinamico
const phoneRender = `<div class="d-md-none margin-bottom-app">
<div class="artist ms-4 mb-3">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picArtist" class="rounded-circle" width="60px">
        </div>
        <div class="ms-4">
            <div class="d-flex">
                <p>Nome artista</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-patch-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
            </div>
            <div>
                <p>Artista</p>
            </div>
        </div>
    </div>
</div>
<div class="song ms-4 mb-3">
    <div class="d-flex justify-content-between pointer-cursor">
        <div>
            <div class="d-flex justify-content-start">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
                </div>
                <div class="ms-4">
                    <p>Nome brano</p>
                    <div class="d-flex align-items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-explicit" viewBox="0 0 16 16">
                            <path
                                d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                            <path
                                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                        </svg>
                        <p>Brano * Nome artista</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-three-dots-vertical zoom2" viewBox="0 0 16 16">
                <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
        </div>
    </div>
</div>
<div class="album ms-4 mb-3">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome album</p>
            <p>Album</p>
        </div>
    </div>
</div>
<div class="playlist ms-4 mb-3">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome playlist</p>
            <p>Playlist</p>
        </div>
    </div>
</div>
<div class="artist ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picArtist" class="rounded-circle" width="60px">
        </div>
        <div class="ms-4">
            <div class="d-flex">
                <p>Nome artista</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-patch-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
            </div>
            <div>
                <p>Artista</p>
            </div>
        </div>
    </div>
</div>
<div class="song ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-between pointer-cursor">
        <div>
            <div class="d-flex justify-content-start">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
                </div>
                <div class="ms-4">
                    <p>Nome brano</p>
                    <div class="d-flex align-items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-explicit" viewBox="0 0 16 16">
                            <path
                                d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                            <path
                                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                        </svg>
                        <p>Brano * Nome artista</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-three-dots-vertical zoom2" viewBox="0 0 16 16">
                <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
        </div>
    </div>
</div>
<div class="album ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome album</p>
            <p>Album</p>
        </div>
    </div>
</div>
<div class="playlist ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome playlist</p>
            <p>Playlist</p>
        </div>
    </div>
</div>
<div class="artist ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picArtist" class="rounded-circle" width="60px">
        </div>
        <div class="ms-4">
            <div class="d-flex">
                <p>Nome artista</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-patch-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
            </div>
            <div>
                <p>Artista</p>
            </div>
        </div>
    </div>
</div>
<div class="song ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-between pointer-cursor">
        <div>
            <div class="d-flex justify-content-start">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
                </div>
                <div class="ms-4">
                    <p>Nome brano</p>
                    <div class="d-flex align-items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-explicit" viewBox="0 0 16 16">
                            <path
                                d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                            <path
                                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                        </svg>
                        <p>Brano * Nome artista</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-three-dots-vertical zoom2" viewBox="0 0 16 16">
                <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
        </div>
    </div>
</div>
<div class="album ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome album</p>
            <p>Album</p>
        </div>
    </div>
</div>
<div class="playlist ms-4 mb-3 d-md-none">
    <div class="d-flex justify-content-start pointer-cursor">
        <div>
            <img src="assets/imgs/main/image-1.jpg" alt="picSong" width="60px">
        </div>
        <div class="ms-4">
            <p>Nome playlist</p>
            <p>Playlist</p>
        </div>
    </div>
</div>
</div>`;

// TODO rendi dinamico
const relevantResults = `<div class="d-none d-md-flex align-items-center">
<div class="d-flex justify-content-between flex-column size">
    <div class="margin-left">
        <h1>Risultato piu' rilevante</h1>
    </div>
    <div class="d-none d-md-flex mt-3 flex-column border-radius p-3 margin-left size div-change-color">
        <div class="margin-card">
            <div>
                <img src="assets/imgs/main/image-1.jpg" alt="pic" width="150px" class="rounded">
            </div>
        </div>
        <div class="margin-card">
            <a href="#">Nome brano</a>
        </div>
        <div class="d-flex margin-card align-items-baseline">
            <div>
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-explicit" viewBox="0 0 16 16">
                        <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                        <path
                            d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                    </svg>
                    <a href="#">Nome artista</a>
                </div>
            </div>
            <div class="ms-3 bg-black border-radius p-2">
                <div>
                    <p class="mb-0">Tipologia risultato</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="size mx-5">
    <div class="d-flex flex-column">
        <div>
            <h2>Brani</h2>
        </div>
        <div class="d-flex justify-content-between margin-top div-song-change-color rounded">
            <div class="d-flex align-items-center">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>Titolo canzone</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="#">Nome artista</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>min:sec</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>Titolo canzone</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="#">Nome artista</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>min:sec</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>Titolo canzone</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="#">Nome artista</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>min:sec</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="assets/imgs/main/image-1.jpg" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>Titolo canzone</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="#">Nome artista</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>min:sec</p>
            </div>
        </div>
    </div>
</div>
</div>`;
// fino a qui maxiContainer

// artisti carrello
const artistCarousel = `<div class="ms-4 d-none d-md-block">
<p class="fw-bold ms-4 mb-3 margin-top font-size-high">Artisti</p>
<div class=" fan row mt-1">
    <div class="under card col-5 me-4 ms-4 col-md-2 mb-2 div-change-color">
        <img src="assets/imgs/search/image-17.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>
    <div class="under card col-5 col-md-2 mb-2 div-change-color">
        <img src="assets/imgs/search/image-11.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>
    <div class="under card col-5 me-4 ms-4 col-md-2 mb-2 div-change-color">
        <img src="assets/imgs/search/image-23.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>
    <div class="under card col-5 col-md-2 mb-2 div-change-color">
        <img src="assets/imgs/search/image-29.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>
    <div class="under card col-5 me-4 ms-4 mb-2 col-md-2 div-change-color">
        <img src="assets/imgs/search/image-26.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>
    <div class="under card col-5 col-md-2 d-md-none mb-2 div-change-color">
        <img src="assets/imgs/search/image-8.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <p class="card-text">Categoria</p>
        </div>
    </div>

</div>
</div>`;

// album carrello
const albumCarousel = ` <div class="ms-4 d-none d-md-block margin-bottom">
<div>
    <p class="fw-bold ms-4 mb-3 margin-top font-size-high">Album</p>
    <div class="row align-items-center">
        <div class="under card me-4 ms-4 col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-13.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2020 • Album</p>
            </div>
        </div>
        <div class="under card col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-14.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2018 • Singolo</p>
            </div>
        </div>
        <div class="under card me-4 ms-4 col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-15.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2023 • Album</p>
            </div>
        </div>
        <div class="under card col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-18.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2021 • Album</p>
            </div>
        </div>
        <div class="under card me-4 ms-4 col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-20.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2017 • Singolo</p>
            </div>
        </div>
        <div class="under card d-md-none col-md-2 mb-2 div-change-color">
            <img src="assets/imgs/search/image-5.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">2011 • Album</p>
            </div>
        </div>
    </div>
</div>
</div>`;

// barra telefono
const phoneBar = `<div class="py-3 align-items-center d-md-none position-fixed">
<div class="d-flex justify-content-evenly text-bg-dark py-3 opacity-75 align-items-center">
    <div class="horizontal-scrolling-container">
        <p class="horizontal-scrolling-items">GODOOOOOOOOOOO</p>
    </div>
    <div class="d-flex">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                class="bi bi-display" viewBox="0 0 16 16">
                <path
                    d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
            </svg>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                class="bi bi-heart" viewBox="0 0 16 16">
                <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                class="bi bi-play" viewBox="0 0 16 16">
                <path
                    d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
            </svg>
        </div>
    </div>
</div>
<div class="text-bg-dark py-5 border-top">
    <div>
        <div class="d-flex justify-content-evenly d-md-none">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-house" viewBox="0 0 16 16">
                    <path
                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-spotify" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                </svg>
            </div>
        </div>
    </div>
</div>
</div>`;

/* const searchForm = document.querySelector("#main-search");
console.log(searchForm); */
const searchInput = document.querySelector("#main-search input");
let delayedSearch;

/* searchInput.addEventListener("submit", (e) => e.preventDefault()); */
searchInput.addEventListener("keyup", () => {
  clearTimeout(delayedSearch);

  if (searchInput.value) {
    delayedSearch = setTimeout(async () => {
      console.log(searchInput.value);
      // qui funzione che renderizza pagina dinamicamente
      await renderSearchPageResults(searchInput.value);
    }, 1500);
  }
});

const dynamicSearchDiv = document.querySelector("#dynamic-search-result");
async function renderSearchPageResults(inputValue) {
  //const relevantResultContainer = document.createElement("div");

  const searchResult = await searchData(inputValue);
  console.log(searchResult);

  let img, name, nameTrack, type, artistName, relevantResultBox;
  if (searchResult.mostRelevantResult.typeArtist) {
    img = searchResult.mostRelevantResult.picture_medium;
    name = searchResult.mostRelevantResult.nameArtist;
    type = searchResult.mostRelevantResult.typeArtist;

    relevantResultBox = `
<div class="d-none d-md-flex mt-3 flex-column border-radius p-3 margin-left size div-change-color">
<div class="margin-card">
    <div >
        <img src="${img}" alt="pic" width="150px" class="rounded-circle" >
    </div>
</div>
<div class="margin-card">
    <h1><a href="./artist.html?id=${searchResult.mostRelevantResult.artistId}">${name}</a></h1>
</div>
<div class="d-flex margin-card align-items-baseline">
    
    <div class="ms-3 bg-black border-radius p-2">
        <div>
            <p class="mb-0">${type}</p>
        </div>
    </div>
</div>
</div>
`;
  } else if (searchResult.mostRelevantResult.typeAlbum) {
    img = searchResult.mostRelevantResult.cover_medium;
    name = searchResult.mostRelevantResult.titleAlbum;
    type = searchResult.mostRelevantResult.typeAlbum;
    artistName = searchResult.mostRelevantResult.nameArtist;

    relevantResultBox = `
    <div class="d-none d-md-flex mt-3 flex-column border-radius p-3 margin-left size div-change-color">
    <div class="margin-card">
        <div>
            <img src="${img}" alt="pic" width="150px" class="rounded">
        </div>
    </div>
    <div class="margin-card">
       <h1> <a href="./album?id=${searchResult.mostRelevantResult.albumId}">${name}</a></h1>
    </div>
    <div class="d-flex margin-card align-items-baseline">
        <div>
            <div class="d-flex">
               
                <a href="./artist.html?id=${searchResult.mostRelevantResult.artistId}">${nameArtist}</a>
            </div>
        </div>
        <div class="ms-3 bg-black border-radius p-2">
            <div>
                <p class="mb-0">${type}</p>
            </div>
        </div>
    </div>
    </div>
    `;
  } else {
    img = searchResult.mostRelevantResult.cover_medium;
    name = searchResult.mostRelevantResult.nameArtist;
    type = searchResult.mostRelevantResult.typeTrack;
    nameTrack = searchResult.mostRelevantResult.titleTrack;
    artistName = searchResult.mostRelevantResult.nameArtist;

    relevantResultBox = `
    <div class="d-none d-md-flex mt-3 flex-column border-radius p-3 margin-left size div-change-color">
    <div class="margin-card">
        <div>
            <img src="${img}" alt="pic" width="150px" class="rounded">
        </div>
    </div>
    <div class="margin-card">
        <h1><a href="./artist.html?id=${searchResult.mostRelevantResult.artistId}">${nameTrack}</a></h1>
    </div>
    <div class="d-flex margin-card align-items-baseline">
        <div>
            <div class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-explicit" viewBox="0 0 16 16">
                    <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                    <path
                        d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                </svg>
                <a href="./artist.html?id=${searchResult.mostRelevantResult.artistId}">${artistName}</a>
            </div>
        </div>
        <div class="ms-3 bg-black border-radius p-2">
            <div>
                <p class="mb-0">${type}</p>
            </div>
        </div>
    </div>
    </div>
    `;
  }

  // dynamic relevant results
  const relevantResults = `<div class="d-none d-md-flex align-items-center">
<div class="d-flex justify-content-between flex-column size">
    <div class="margin-left">
        <h1>Risultato piu' rilevante</h1>
    </div>
    
        ${relevantResultBox}
  
</div>
<div class="size mx-5">
    <div class="d-flex flex-column">
        <div>
            <h2>Brani</h2>
        </div>
        <div class="d-flex justify-content-between margin-top div-song-change-color rounded">
            <div class="d-flex align-items-center">
                <div>
                    <img src="${
                      searchResult.tracklist[0].album.cover_small
                    }" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>${searchResult.tracklist[0].title}</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="./artist.html?id=${
                              searchResult.tracklist[0].artist.artistId
                            }">${searchResult.tracklist[0].artist.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>${convertInMinuteAndSeconds(
                  searchResult.tracklist[0].duration
                )}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="${
                      searchResult.tracklist[1].album.cover_small
                    }" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>${searchResult.tracklist[1].title}</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="./artist.html?id=${
                              searchResult.tracklist[1].artist.artistId
                            }">${searchResult.tracklist[1].artist.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>${convertInMinuteAndSeconds(
                  searchResult.tracklist[1].duration
                )}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="${
                      searchResult.tracklist[2].album.cover_small
                    }" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>${searchResult.tracklist[2].title}</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="./artist.html?id=${
                              searchResult.tracklist[2].artist.artistId
                            }">${searchResult.tracklist[2].artist.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>${convertInMinuteAndSeconds(
                  searchResult.tracklist[2].duration
                )}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between div-song-change-color rounded mt-1">
            <div class="d-flex align-items-center">
                <div>
                    <img src="${
                      searchResult.tracklist[3].album.cover_small
                    }" alt="song pic" width="60px" class="rounded">
                </div>
                <div class="d-flex flex-column ms-4">
                    <div>
                        <p>${searchResult.tracklist[3].title}</p>
                    </div>
                    <div>
                        <div class="d-flex align-items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
                                <path
                                    d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                                <path
                                    d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                            <a href="./artist.html?id=${
                              searchResult.tracklist[3].artist.artistId
                            }">${searchResult.tracklist[3].artist.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me-5">
                <p>${convertInMinuteAndSeconds(
                  searchResult.tracklist[3].duration
                )}</p>
            </div>
        </div>
    </div>
</div>
</div>`;

  // artist row
  /*   const artistRow = `<div class="ms-4 d-none d-md-block">
<p class="fw-bold ms-4 mb-3 margin-top font-size-high">Artisti</p>
<div class=" fan row mt-1">
    

</div>
</div>`; */

  let artistRowStart = `<div class="ms-4 d-none d-md-block">
<p class="fw-bold ms-4 mb-3 margin-top font-size-high">Artisti</p>
<div class=" fan row mt-1">`;

  const artistRowEnd = `</div>
</div>`;

  // remove duplicates from similaRtistList
  const newSimilarArtistList = searchResult.similarArtistList.filter(
    (artist, index) => searchResult.similarArtistList.indexOf(artist) === index
  );
  console.log(newSimilarArtistList);

  for (let i = 0; i < 4; i++) {
    const similarArtist = newSimilarArtistList[i];

    const artistCard = `<div class="under card col-5 me-4 ms-4 col-md-2 mb-2 div-change-color">
<img src="${similarArtist.covers[1]}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title"><a href="./artist.html?id=${similarArtist.id}">${similarArtist.name}</a></h5>
   
</div>
</div>`;

    artistRowStart += artistCard;
    if (i == 3) {
      artistRowStart += artistRowEnd;
    }
  }

  let albumRowStart = `<div class="ms-4 d-none d-md-block margin-bottom">
  <div>
      <p class="fw-bold ms-4 mb-3 margin-top font-size-high">Album</p>
      <div class="row align-items-center">`;

  const albumRowEnd = `</div>
</div>
</div>`;
  /* const albumCard = `<div class="under card me-4 ms-4 col-md-2 mb-2 div-change-color">
<img src="${similarAlbum.covers[1]}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title"><a href="${similarAlbum.id}">${similarAlbum.name}</a></h5>
    
</div>
</div>` */

  //remove duplicates for similarAlbum
  // FIX FILTRO PER ELIMINARE ALTRI DIFFERENTI
  const newSimilarAlbumList = searchResult.similarAlbumList.filter(
    (album, index) => searchResult.similarAlbumList.indexOf(album) === index
  );
  console.log(newSimilarAlbumList);

  for (let i = 0; i < 5; i++) {
    const similarAlbum = newSimilarAlbumList[i];

    const albumCard = `<div class="under card me-4 ms-4 col-md-2 mb-2 div-change-color">
    <img src="${similarAlbum.covers[1]}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"><a href="./album.html?id=${similarAlbum.id}">${similarAlbum.title}</a></h5>
        
    </div>
    </div>`;

    albumRowStart += albumCard;
    if (i == 4) {
      albumRowStart += albumRowEnd;
    }
  }

  // MOBILE SEARCH

  const mobileStart = `<div class="d-md-none margin-bottom-app">`;
  const mobileEnd = `</div>`;
  let mobileRelevantTracksBox = "";
  searchResult.tracklist.forEach((track) => {
    const { id, title, explicit_lyrics, album, artist } = track;

    const mobileRelevantResultDiv = `
       <div class="song ms-4 mb-3">
       <div class="d-flex justify-content-between pointer-cursor">
           <div>
               <div class="d-flex justify-content-start">
                   <div>
                       <img src="${album.cover_small}" alt="picSong" width="60px">
                   </div>
                   <div class="ms-4">
                       <p>${title}</p>
                       <div class="d-flex align-items-baseline">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-explicit" viewBox="0 0 16 16">
                               <path
                                   d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
                               <path
                                   d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                           </svg>
                           <p>track * <a href="./artist.html?id=${artist.artistId}">${artist.name}</a></p>
                       </div>
                   </div>
               </div>
           </div>
           <div class="me-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                   class="bi bi-three-dots-vertical zoom2" viewBox="0 0 16 16">
                   <path
                       d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
               </svg>
           </div>
       </div>
       </div>
       `;

    mobileRelevantTracksBox += mobileRelevantResultDiv;
  });

  // add everything to div
  dynamicSearchDiv.innerHTML =
    filterBar +
    mobileStart +
    mobileRelevantTracksBox +
    mobileEnd +
    relevantResults +
    artistRowStart +
    albumRowStart;
}
