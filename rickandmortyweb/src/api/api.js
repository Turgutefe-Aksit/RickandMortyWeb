// API her sayfa için 20 karakter listeliyor. bunun önüne geçmek için client tarafında tüm karakterleri çekip 
// Çekilmiş veri üzerinde işlemler yapılmakta.
const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchAllData = async ({ search = "", status = "", gender = "", species = "" }) => {
  let allData = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(`${BASE_URL}?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`);
    const data = await response.json();

    if (data && data.results) {
      allData = [...allData, ...data.results];
      hasNextPage = data.info.next !== null;
    } else {
      hasNextPage = false;
    }
    page++;
  }

  return allData;
};