import axios from 'axios';

const KEY = "AIzaSyCOMshtNkscVh901U0jSSSjNZ0Klb-OKJo";

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});