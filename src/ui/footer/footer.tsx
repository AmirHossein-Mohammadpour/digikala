import ContactUs from "./contactUs";
import Features from "./features";
import SiteMap from "./siteMap";
import AppDownload from "./appDownload";
import AboutDigiKala from "./aboutDigiKala";
import CopyRights from "./copyRights";
import Services from "./services";

const Footer = () => {
  return (
    <footer className={`@container/footer`}>
      <div className={`flex flex-col gap-8 border-t mt-12 pt-8 border-neutral-200`}>
        <div className={`px-5 flex flex-col gap-8 divide`}>
          <ContactUs/>
          <Features/>
          <SiteMap/>
          <AppDownload/>
          <AboutDigiKala/>
          <CopyRights/>
        </div>
        <div>
          <Services/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;