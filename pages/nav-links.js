import { URL } from "./api/api";
import { DATA as facts } from "./api/facts";

export const NavLinks = () => {
  const addData = async () => {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fact: facts[Math.floor(Math.random() * facts.length)],
      }),
    });
    const fact = await response.json();
    console.log(fact);
  };
  return (
    <div className="nav-links">
      <a href="csr">CSR</a>
      <a href="ssr">SSR</a>
      <a href="ssg">SSG</a>
      <a href="isr">ISR</a>
      <button type="button" onClick={addData}>
        Add new fact
      </button>
    </div>
  );
};
export default NavLinks;
