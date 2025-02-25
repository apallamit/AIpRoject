import { useEffect } from "react";

const VismeForm = () => {
  useEffect(() => {
    // Create a script element dynamically
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    
    // Append the script to the body to load the Visme form
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="visme_d"
      data-title="B2B Newsletter Subscription"
      data-url="76jzzqvx-b2b-newsletter-subscription"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="116127"
    ></div>
  );
};

export default VismeForm;
