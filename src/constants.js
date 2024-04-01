export const PHOTO_URL = `https://example.com/jane-q-user/profile.jpg`;
export const USER_AVATAR =
  "https://occ-0-1241-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201";
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const IMG_CDN = `https://image.tmdb.org/t/p/w500`;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY} `,
  },
};

export const langOptions = [
  { name: `English`, value: `en` },
  { name: `Urdu`, value: `urdu` },
  { name: `Korean`, value: `korean` },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
