import { API_URL } from "./constants";

export async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
