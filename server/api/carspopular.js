export default defineEventHandler(async (event) => {
  const res = await fetch(
    `https://dm-assignment-commonshare.koyeb.app/api/cars/popular`
  );
  return res;
});
