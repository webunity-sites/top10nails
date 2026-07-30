export const metadata = {
  title: "Nail & Waxing Services in Vernon",
  description: "Browse all 47 manicure, pedicure, nail enhancement, kids and waxing services at Top Ten Nails Spa in Vernon, BC.",
};

const bookingUrl = "https://www.bookguru.io/v1/top-ten-nails-spa";

const groups = [
  ["Pedicure & Manicure", [
    ["Pedicure Regular", "45 min", "$50"],
    ["Manicure Regular", "30 min", "$40"],
    ["Pedicure & Manicure Regular", "90 min", "$85"],
    ["Pedicure & Manicure Gel", "105 min", "$105"],
    ["Manicure Gel", "45 min", "$50"],
    ["Pedicure Gel", "45 min", "$60"],
    ["Pedicure Men", "45 min", "$50"],
    ["Luxury Spa Experience Pedicure", "75 min", "$85"],
  ]],
  ["Nails", [
    ["Acrylic Full Set", "60 min", "$65"],
    ["Acrylic Fill", "60 min", "$55"],
    ["Biogel Full Set", "60 min", "$65"],
    ["Biogel Fill", "60 min", "$55"],
    ["Gel Polish Change Hands", "30 min", "$35"],
    ["Gel Polish Change Feet", "30 min", "$45"],
  ]],
  ["Add-ons", [
    ["French", "15 min", "$10"],
    ["Paraffin Wax", "15 min", "$10"],
    ["Nail Art Design", "15 min", "$5"],
    ["Nail Repair", "15 min", "$10"],
    ["Toe Nail Cut", "15 min", "$20"],
    ["Nail Removal", "30 min", "$30"],
    ["Shellac Removal", "15 min", "$10"],
    ["Cat Eye Gel", "15 min", "$10"],
    ["Long Nails", "15 min", "$10"],
  ]],
  ["Kids Under 12", [
    ["Kid Pedicure Regular", "30 min", "$30"],
    ["Kid Pedicure Gel", "30 min", "$40"],
    ["Kid Regular Polish Change", "15 min", "$15"],
    ["Kid Regular Polish Change Gel", "15 min", "$20"],
    ["Kid Manicure Regular", "15 min", "$20"],
    ["Kid Manicure Gel", "30 min", "$30"],
  ]],
  ["Waxing", [
    ["Tinting Eyebrows", "15 min", "$20"],
    ["Eyebrows Wax & Tinting", "30 min", "$30"],
    ["Eyebrows Wax", "15 min", "$15"],
    ["Upper Lip Wax", "15 min", "$10"],
    ["Chin Wax", "15 min", "$10"],
    ["Cheek Wax", "15 min", "$15"],
    ["Full Face Wax", "30 min", "$40"],
    ["Full Legs & Bikini Wax", "45 min", "$50"],
    ["Half Arms Wax", "30 min", "$25"],
    ["Full Arms Wax", "30 min", "$40"],
    ["Half Legs Wax", "30 min", "$35"],
    ["Full Legs Wax", "45 min", "$50"],
    ["Bikini Line Wax", "30 min", "$30"],
    ["Brazilian Wax", "45 min", "$50"],
    ["Back Wax", "45 min", "$45"],
    ["Neck Wax", "15 min", "$20"],
    ["Shoulder Wax", "30 min", "$25"],
    ["Under Arms Wax", "30 min", "$25"],
  ]],
];

export default function Services() {
  return (
    <main id="main">
      <section className="page-hero">
        <p className="eyebrow">47 services · instant confirmation</p>
        <h1>Made for your moment.</h1>
        <p>Explore our complete manicure, pedicure, nail enhancement, kids and waxing menu in Vernon, BC.</p>
      </section>
      <section className="section menu">
        <div className="service-jump" aria-label="Service categories">
          {groups.map(([group]) => <a href={`#${group.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={group}>{group}</a>)}
        </div>
        {groups.map(([group, items]) => (
          <div className="menu-group" id={group.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} key={group}>
            <div className="menu-title"><h2>{group}</h2><span>{items.length} services</span></div>
            {items.map(([name, time, price]) => (
              <article key={name}>
                <div><h3>{name}</h3></div>
                <span>{time}</span>
                <strong>{price}</strong>
                <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label={`Book ${name}`}>Book ↗</a>
              </article>
            ))}
          </div>
        ))}
      </section>
      <section className="process"><p className="eyebrow">What to expect</p><div>{["Choose your service online","Receive instant confirmation","Arrive ready to be cared for"].map((item, index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3></article>)}</div></section>
      <section className="page-cta"><h2>Ready to choose your time?</h2><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book online <span>↗</span></a></section>
    </main>
  );
}
