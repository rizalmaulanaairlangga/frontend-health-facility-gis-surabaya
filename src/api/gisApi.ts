import axios from 'axios';
import type { AnalysisData, FacilityData, GeoJsonData } from '../types';

const API_BASE_URL = 'http://localhost:5100/api/gis';

export const fetchAnalysis = async (): Promise<AnalysisData[]> => {
  const response = await axios.get(`${API_BASE_URL}/analysis`);
  return response.data;
};

export const fetchGeoJson = async (): Promise<GeoJsonData> => {
  const response = await axios.get(`${API_BASE_URL}/geojson`);
  return response.data;
};

export const fetchFaskes = async (): Promise<FacilityData[]> => {
  const response = await axios.get(`${API_BASE_URL}/faskes`);
  return response.data;
};
