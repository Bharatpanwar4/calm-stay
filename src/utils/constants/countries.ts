import Countries from "world-countries";

export const formattedCountries = Countries?.map((i) => {
  return {
    code: i.cca2,
    name: i.name.common,
    flag: i.flag,
    location: i.latlng,
    region: i.region,
  };
});
export const findCountryByCode = (code: string) => {
  return formattedCountries?.find((i) => i.code === code);
};
