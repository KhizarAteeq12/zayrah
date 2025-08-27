// products.js
// Yahan apne saare products ki details daalein.
// Naya product daalne ke liye, list ke aakhir mein comma laga kar naya object add karein.

const products = {
  // Shuru ke 5 products jinki details mojood theen
  "men-kurta-1": {
    name: "Men Kurta",
    price: "PKR 2200",
    image: "https://i.postimg.cc/DyhWPfCV/IMG-20250806-WA0001.jpg"
  },
  "women-dress-2": {
    name: "Women Dress",
    price: "PKR 3499",
    image: "https://i.postimg.cc/vHXm7rg9/IMG-20250806-WA0002.jpg"
  },
  "kids-fashion-3": {
    name: "Kids Fashion",
    price: "PKR 1800",
    image: "https://i.postimg.cc/8kRccQTZ/IMG-20250806-WA0003.jpg"
  },
  "summer-tee-4": {
    name: "Summer Tee",
    price: "PKR 899",
    image: "https://i.postimg.cc/xCKfXMVX/IMG-20250806-WA0004.jpg"
  },
  "formal-shirt-5": {
    name: "Formal Shirt",
    price: "PKR 1999",
    image: "https://i.postimg.cc/vBR88XkR/IMG-20250806-WA0005.jpg"
  },
  
  // Products up to ID 28
  "product-6": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/9XYXVdBS/IMG-20250806-WA0006.jpg"
  },
  "product-7": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/XYpnwT0S/IMG-20250806-WA0007.jpg"
  },
  "product-8": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/T1tXbc73/IMG-20250806-WA0008.jpg"
  },
  "product-9": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/W1Bc0zng/IMG-20250806-WA0009.jpg"
  },
  "product-10": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/JnmwdFSh/IMG-20250806-WA0010.jpg"
  },
  "product-11": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/pXSwtr34/IMG-20250806-WA0011.jpg"
  },
  "product-12": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/Bb6VrfpJ/IMG-20250806-WA0012.jpg"
  },
  "product-13": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/dQxHhXnT/IMG-20250806-WA0013.jpg"
  },
  "product-14": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/wTRWLVb4/IMG-20250806-WA0014.jpg"
  },
  "product-15": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/BnxMwv3x/IMG-20250806-WA0015.jpg"
  },
  "product-16": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/zf7p8PVv/IMG-20250806-WA0016.jpg"
  },
  "product-17": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/SsKds7Mr/IMG-20250806-WA0017.jpg"
  },
  "product-18": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/8z8ZH62p/IMG-20250809-WA0001.jpg"
  },
  "product-19": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/cH5m8g7N/IMG-20250809-WA0002.jpg"
  },
  "product-20": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/BbLC5SNP/IMG-20250810-WA0001.jpg"
  },
  "product-21": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/NF3kp3PJ/IMG-20250810-WA0002.jpg"
  },
  "product-22": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/7P5vtSW0/IMG-20250810-WA0003.jpg"
  },
  "product-23": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/66gkkTkS/IMG-20250810-WA0004.jpg"
  },
  "product-24": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/FsSMNNmK/IMG-20250810-WA0005.jpg"
  },
  "product-25": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/x1yBN5XD/IMG-20250810-WA0006.jpg"
  },
  "product-26": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/zB3QM108/IMG-20250810-WA0007.jpg"
  },
  "product-27": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/vBjKwSN9/IMG-20250810-WA0008.jpg"
  },
  "product-28": {
    name: "Unstitched Suit",
    price: "PKR 2500",
    image: "https://i.postimg.cc/NG9VkBKx/IMG-20250810-WA0009.jpg"
  },

  // ===== CHANGES START FROM HERE =====
  
  "product-29": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/D0XMvd9N/IMG-20250810-WA0010.jpg"
  },
  "product-30": {
    name: "3 pc unstiched",
    price: "PKR 3200",
    image: "https://i.postimg.cc/bJ3czDTf/IMG-20250826-WA0006.jpg"
  },
  "product-31": {
    name: "3 pc unstiched",
    price: "PKR 2999",
    image: "https://i.postimg.cc/Fzzt1rWd/IMG-20250826-WA0007.jpg"
  },
  "product-32": {
    name: "3 pc unstiched",
    price: "PKR 3500",
    image: "https://i.postimg.cc/L6qKpsgG/IMG-20250826-WA0008.jpg"
  },
  "product-33": {
    name: "3 pc unstiched",
    price: "PKR 2750",
    image: "https://i.postimg.cc/Gt5WyWVM/IMG-20250826-WA0009.jpg"
  },
  "product-34": {
    name: "3 pc unstiched",
    price: "PKR 3800",
    image: "https://i.postimg.cc/SQ1F39RW/IMG-20250826-WA0010.jpg"
  },
  "product-35": {
    name: "3 pc unstiched",
    price: "PKR 3400",
    image: "https://i.postimg.cc/HsfGsCQn/IMG-20250826-WA0011.jpg"
  },
  "product-36": {
    name: "3 pc unstiched",
    price: "PKR 2900",
    image: "https://i.postimg.cc/FHcMYnZZ/IMG-20250826-WA0012.jpg"
  },
  "product-37": {
    name: "3 pc unstiched",
    price: "PKR 3600",
    image: "https://i.postimg.cc/cJSVwMkN/IMG-20250826-WA0013.jpg"
  },
  "product-38": {
    name: "3 pc unstiched",
    price: "PKR 2550",
    image: "https://i.postimg.cc/g0H1DX1L/IMG-20250826-WA0014.jpg"
  },
  "product-39": {
    name: "3 pc unstiched",
    price: "PKR 3900",
    image: "https://i.postimg.cc/zBD6PD1t/IMG-20250826-WA0015.jpg"
  },
  "product-40": {
    name: "3 pc unstiched",
    price: "PKR 3100",
    image: "https://i.postimg.cc/vBPkRRYQ/IMG-20250826-WA0016.jpg"
  },
  "product-41": {
    name: "3 pc unstiched",
    price: "PKR 2850",
    image: "https://i.postimg.cc/VvdTm7vX/IMG-20250826-WA0017.jpg"
  },
  "product-42": {
    name: "3 pc unstiched",
    price: "PKR 3300",
    image: "https://i.postimg.cc/dQxp4KN6/IMG-20250826-WA0018.jpg"
  },
  "product-43": {
    name: "3 pc unstiched",
    price: "PKR 2600",
    image: "https://i.postimg.cc/7YJcRQpk/IMG-20250826-WA0019.jpg"
  },
  "product-44": {
    name: "3 pc unstiched",
    price: "PKR 3700",
    image: "https://i.postimg.cc/HkGK19g7/IMG-20250826-WA0020.jpg"
  },
  "product-45": {
    name: "3 pc unstiched",
    price: "PKR 3250",
    image: "https://i.postimg.cc/P5m7XvXV/IMG-20250826-WA0021.jpg"
  },
  "product-46": {
    name: "3 pc unstiched",
    price: "PKR 2950",
    image: "https://i.postimg.cc/PqTRPfNX/IMG-20250826-WA0022.jpg"
  },
  "product-47": {
    name: "3 pc unstiched",
    price: "PKR 3550",
    image: "https://i.postimg.cc/7h3nts8q/IMG-20250812-WA0040.jpg"
  },
  "product-48": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/8PGHfSMc/IMG-20250812-WA0041.jpg"
  },
  "product-49": {
    name: "3 pc unstiched",
    price: "PKR 3450",
    image: "https://i.postimg.cc/3JZZgcFB/IMG-20250812-WA0042.jpg"
  },
  "product-50": {
    name: "3 pc unstiched",
    price: "PKR 2700",
    image: "https://i.postimg.cc/T3YJQJkX/IMG-20250812-WA0045.jpg"
  },
  "product-51": {
    name: "3 pc unstiched",
    price: "PKR 3850",
    image: "https://i.postimg.cc/XYHcPBhB/IMG-20250812-WA0047.jpg"
  },
  "product-52": {
    name: "3 pc unstiched",
    price: "PKR 3150",
    image: "https://i.postimg.cc/QMFkZxG4/IMG-20250812-WA0048.jpg"
  },
  "product-53": {
    name: "3 pc unstiched",
    price: "PKR 2900",
    image: "https://i.postimg.cc/D0TqGrWH/Replace-with-your-own-image.webp"
  },
  "product-54": {
    name: "3 pc unstiched",
    price: "PKR 3650",
    image: "https://i.postimg.cc/wvJX3fBD/Replace-with-your-own-image.jpg"
  },
  "product-55": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/VLzqLFPb/SAHI-TOY-BA-MINT.jpg"
  },
  "product-56": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/Znx6xWpR/SAHI-TOY-BA-MINT.webp"
  },
  "product-57": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/BZT50Vk0/SAHI-TOYO-BA-EHITE.jpg"
  },
  "product-58": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/QxSpBWjY/SAHI-TOYO-BA-EHITE.webp"
  },
  "product-59": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/9QMyyFMm/SAHI-TOYO-BA-GOLDENwebp.jpg"
  },
  "product-60": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/qv5ywVh8/SAHI-TOYO-BA-GOLDENwebp.webp"
  },
  "product-61": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/sxshx3qR/SAHI-TOYO-BA-OFF-WHITE.webp"
  },
  "product-62": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/W3RrRG7z/SAHI-TOYO-BA-SKY-BLUE.webp"
  },
  "product-63": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/5tQvk7LD/SAHI-TOYO-BA-SKY-BLUE.jpg"
  },
  "product-64": {
    name: "3 pc unstiched",
    price: "PKR 2800",
    image: "https://i.postimg.cc/tJkVVLGn/SAHI-TOYO-BA-ZINK-BLUE.webp"
  }
  // Aap yahan aur products add kar sakte hain
};
