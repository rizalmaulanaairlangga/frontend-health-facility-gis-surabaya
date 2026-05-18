import type { GeoJsonObject } from 'geojson';

export interface AnalysisData {
  kecamatan: string;
  tahun: number;
  total_fasilitas?: number;
  jumlah_penduduk?: number;
  rasio: number;
  rasio_scaled: number;
  kategori: string;
  warna: string;
}

export interface FacilityData {
  kecamatan: string;
  tahun: number;
  jumlah_rumah_sakit_umum: number;
  jumlah_rumah_sakit_khusus: number;
  jumlah_puskesmas: number;
  jumlah_klinik: number;
  total_faskes: number;
}

export type GeoJsonData = GeoJsonObject;
