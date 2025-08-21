import { useState, useEffect } from "react";

function SiteFavicon({ url, w = 8 }) {
  console.log(w);
  const domain = new URL(url).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;
  const defaultIcon = "/websiteIcon.png";
  const [icon, setIcon] = useState(faviconUrl);

  useEffect(() => {
    const img = new Image();
    img.src = faviconUrl;

    img.onload = () => {
      // if favicon loads but is suspiciously small (Google placeholder)
      if (img.width <= 16 && img.height <= 16) {
        setIcon(defaultIcon);
      } else {
        setIcon(faviconUrl);
      }
    };

    img.onerror = () => setIcon(defaultIcon);
  }, [faviconUrl]);

  return (
    <img
      src={icon}
      alt="site icon"
      style={{ width: `${w * 4}px`, height: `${w * 4}px` }} // Tailwind's w-1 = 0.25rem = 4px
      className="rounded"
    />
  );
}

export default SiteFavicon;
