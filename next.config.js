/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "public.opendatasoft.com",
      "a0.muscache.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "platform-lookaside.fbsbx.com",
      "pbs.twimg.com",
    ],
  },
  env: {
    mapbox_token:
      "pk.eyJ1IjoiZmxleG5lcnIiLCJhIjoiY2xhNTRoYzlqMHB5ODN2bzd6OHUyY2tlNSJ9.R2tgvDSbRcYfIm9umAMczA",
  },
};
