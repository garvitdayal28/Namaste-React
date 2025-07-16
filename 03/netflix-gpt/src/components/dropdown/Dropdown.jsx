import { useState } from "react";
import { MdTranslate } from "react-icons/md";

import React from "react";

const Dropdown = () => {
  const [selectValue, setSelectValue] = useState("English");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="bg-[#171512] border-1 border-gray-400 text-white w-45 h-7 flex items-center rounded-sm" >
      <label htmlFor="dropdonw" className="px-2"><MdTranslate /></label>
      <div className="w-45">

      
      <select id="dropdown" value={selectValue} onChange={handleChange}>
        <div className="text-black">
        <option className="w-45" lang="en" label="English" value="en-IN">
          English
        </option>
        <option lang="es" label="Español" value="es-IN">
          Español
        </option>
        <option lang="pt" label="Português" value="pt-IN">
          Português
        </option>
        <option lang="fr" label="Français" value="fr-IN">
          Français
        </option>
        <option lang="sv" label="Svenska" value="sv-IN">
          Svenska
        </option>
        <option lang="nb" label="Norsk bokmål" value="nb-IN">
          Norsk bokmål
        </option>
        <option lang="fi" label="Suomi" value="fi-IN">
          Suomi
        </option>
        <option lang="da" label="Dansk" value="da-IN">
          Dansk
        </option>
        <option lang="nl" label="Nederlands" value="nl-IN">
          Nederlands
        </option>
        <option lang="de" label="Deutsch" value="de-IN">
          Deutsch
        </option>
        <option lang="ja" label="日本語" value="ja-IN">
          日本語
        </option>
        <option lang="it" label="Italiano" value="it-IN">
          Italiano
        </option>
        <option lang="zh" label="中文" value="zh-IN">
          中文
        </option>
        <option lang="ko" label="한국어" value="ko-IN">
          한국어
        </option>
        <option lang="ar" label="العربية" value="ar-IN">
          العربية
        </option>
        <option lang="pl" label="Polski" value="pl-IN">
          Polski
        </option>
        <option lang="tr" label="Türkçe" value="tr-IN">
          Türkçe
        </option>
        <option lang="th" label="ไทย" value="th-IN">
          ไทย
        </option>
        <option lang="ro" label="Română" value="ro-IN">
          Română
        </option>
        <option lang="he" label="עברית" value="he-IN">
          עברית
        </option>
        <option lang="el" label="Ελληνικά" value="el-IN">
          Ελληνικά
        </option>
        <option lang="id" label="Bahasa Indonesia" value="id-IN">
          Bahasa Indonesia
        </option>
        <option lang="hu" label="Magyar" value="hu-IN">
          Magyar
        </option>
        <option lang="cs" label="Čeština" value="cs-IN">
          Čeština
        </option>
        <option lang="vi" label="Tiếng Việt" value="vi-IN">
          Tiếng Việt
        </option>
        <option lang="hi" label="हिन्दी" value="hi-IN">
          हिन्दी
        </option>
        <option lang="ms" label="Melayu" value="ms-IN">
          Melayu
        </option>
        <option lang="ru" label="Русский" value="ru-IN">
          Русский
        </option>
        <option lang="hr" label="Hrvatski" value="hr-IN">
          Hrvatski
        </option>
        <option lang="uk" label="Українська" value="uk-IN">
          Українська
        </option>
        <option lang="fil" label="Filipino" value="fil-IN">
          Filipino
        </option>
        </div>
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
