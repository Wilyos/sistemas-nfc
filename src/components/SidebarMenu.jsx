import React from 'react';
import './SidebarMenu.css';
import { FaWhatsapp, FaInstagram} from "react-icons/fa";

const SidebarMenu = () => (
  <aside className="sidebar-menu">
    <div className="sidebar-content">
        <div className="sidebar-socials">
        <a href="https://www.instagram.com/sistemas.nfc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/573116111687" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      <span className="sidebar-title">SISTEMAS.NFC</span>
    </div>
  </aside>
);

export default SidebarMenu;
