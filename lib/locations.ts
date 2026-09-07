/**
 * Counties served, grouped the way they appear in the "Locations we serve" menu.
 * Edit these two lists to change what the site shows. Order is preserved.
 */
export type LocationGroup = {
  title: string;
  note?: string;
  counties: string[];
};

export const locationGroups: LocationGroup[] = [
  {
    title: "Counties with all services",
    note: "Every document service we offer, including landlord documents.",
    counties: [
      "Kern County",
      "Tulare County",
      "Kings County",
      "Fresno County",
      "Madera County",
      "Inyo County",
      "San Luis Obispo County",
      "Santa Barbara County",
      "Ventura County",
      "Los Angeles County",
      "San Bernardino County",
      "Riverside County",
      "Orange County",
      "San Diego County",
    ],
  },
  {
    title: "Counties without eviction service",
    note: "All document services except landlord eviction paperwork.",
    counties: [
      "Sacramento County",
      "San Joaquin County",
      "Stanislaus County",
      "Merced County",
      "Monterey County",
      "Santa Clara County",
      "Alameda County",
      "Contra Costa County",
      "San Francisco County",
      "San Mateo County",
      "Sonoma County",
      "Placer County",
    ],
  },
];
