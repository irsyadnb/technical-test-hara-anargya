import city from "../assets/js/city";
import province from "../assets/js/province";

const cityProvinceAPI = () => {
  const getProvinces = () => {
    return province;
  };

  const getProvinceById = (id) => {
    return province.find(p => p.id === id);
  };

  const getCities = () => {
    return city;
  };

  const getCityById = (id) => {
    return city.find(c => c.id === id);
  };

  const getCitiesByProvinceId = (provinceId) => {
    return city.filter((c) => c.provinsi_id === provinceId);
  };

  const getProvinceByCityId = (id) => {
    const selectedCity = city.find((c) => c.id === id);
    if (selectedCity) {
      const selectedProvince = province.find(
        (province) => province.id === selectedCity.provinsi_id
      );
      return selectedProvince && selectedProvince.name;
    }
    return null;
  };

  const sortProvinceById = (order = "asc") => {
    if (order === "desc") {
      return province.sort((a, b) => b.id - a.id);
    }
    return province.sort((a, b) => a.id - b.id);
  };

  const sortProvinceByName = (order = "asc") => {
    if (order === "desc") {
      return province.sort((a, b) => b.name.localeCompare(a.name));
    }
    return province.sort((a, b) => a.name.localeCompare(b.name));
  };

  return {
    getProvinces,
    getProvinceById,
    getCities,
    getCityById,
    getCitiesByProvinceId,
    getProvinceByCityId,
    sortProvinceById,
    sortProvinceByName,
  };
};

export default cityProvinceAPI;
