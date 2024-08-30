/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'landingImage':"url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp/800px-LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp.png')",
      'photograph1':"url('https://en-media.thebetterindia.com/uploads/2015/10/homibhabha8.jpg')",
      'photograph2':"url('https://cdn.britannica.com/60/239760-050-8A84BA13/Indian-physicist-CV-Raman-1930.jpg')",
      // 'landingImage':"url('public/images/LVM3_M4,_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_(SLP)_of_SDSC-SHAR,_Sriharikota_03.webp')",
      // 'photograph1':"url('public/images/homibhabha8.webp')",
      // 'photograph2':"url('public/images/Indian-physicist-CV-Raman-1930.webp')",
    }
  },
  plugins: [],
}

