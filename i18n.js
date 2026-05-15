/* Gerardo Pressure Washing — bilingual EN/ES copy.
   Mirrors the SDC site pattern: data-i attributes resolve via this dictionary,
   data-i-ph swaps placeholders, language preference persists in localStorage. */

const I18N = {
  en: {
    /* ---- Nav + global ---- */
    nav_home:       "Home",
    nav_services:   "Services",
    nav_about:      "About",
    nav_contact:    "Contact",
    nav_cta:        "Call Gerardo · (904) 555-0100",

    /* ---- Home · Hero ---- */
    hero_badge:     "Jacksonville · Duval · St. Johns · Clay · Nassau",
    hero_h1a:       "Pressure washing.",
    hero_h1b:       "Crystal clear.",
    hero_sub:       "Residential and commercial cleaning across Jacksonville and Northeast Florida. Soft wash for delicate surfaces, power wash where it counts. Free estimates, licensed and insured.",
    hero_cta1:      "Get a free estimate",
    hero_cta2:      "Browse services",
    hero_cta3:      "WhatsApp Gerardo",
    hero_stat1:     "Free estimates",
    hero_stat2:     "Same-week scheduling",
    hero_stat3:     "Counties served",
    hero_stat4:     "Licensed & insured",

    /* ---- Home · Marquee ---- */
    marquee_text:   "Driveways · Sidings · Decks · Roofs · Fences · Patios · Pavers · Concrete · Commercial · Soft wash · Power wash · Eco-safe",

    /* ---- Home · Services overview ---- */
    svc_kicker:     "Eight services · One crew",
    svc_h2a:        "Everything outside the house",
    svc_em:         "looks like new",
    svc_h2c:        "after one visit.",
    svc_link:       "See all services →",
    svc_residential: "Residential pressure wash",
    svc_softwash:    "Soft wash",
    svc_driveways:   "Driveways & walkways",
    svc_siding:      "House siding",
    svc_roof:        "Roof cleaning",
    svc_decks:       "Decks & fences",
    svc_concrete:    "Concrete & pavers",
    svc_commercial:  "Commercial properties",

    /* ---- Home · Map ---- */
    map_kicker:     "— Service area",
    map_h2:         "Jacksonville and Northeast Florida.",
    map_p:          "Same-week scheduling across Duval, St. Johns, Clay, and Nassau counties. No travel surcharge inside the service area.",
    zone_duval:     "Duval (Jacksonville, Atlantic Beach, Mayport)",
    zone_stjohns:   "St. Johns (St. Augustine, Ponte Vedra)",
    zone_nassau:    "Nassau (Fernandina Beach, Yulee)",
    zone_clay:      "Clay (Orange Park, Middleburg)",

    /* ---- Home · Testimonials (placeholder) ---- */
    test_kicker:    "— What customers say",
    test_h2a:       "Trusted across",
    test_h2b:       "the First Coast.",
    test_q1:        "\"Driveway looked twenty years younger when Gerardo finished. Showed up when he said he would, cleaned up after himself.\"",
    test_n1:        "Maria L. · Jacksonville Beach",
    test_q2:        "\"We had black mildew streaks down the whole side of the house. Soft wash, no damage to the paint, half a day's work.\"",
    test_n2:        "James T. · Ponte Vedra",
    test_q3:        "\"He does our restaurant patio every other month. Reliable, fair price, no headaches.\"",
    test_n3:        "Karen P. · Atlantic Beach",

    /* ---- Home + global CTA strip ---- */
    cta_h:          "Ready for a free estimate?",
    cta_p:          "Text a photo of what needs cleaning. Most quotes back within 2 business hours.",
    cta_btn1:       "Get a quote",
    cta_btn2:       "Call (904) 555-0100",

    /* ---- Services page ---- */
    svcp_bread:     "Services",
    svcp_h1:        "Services",
    svcp_lede:      "Soft wash for paint, siding, and roofs. Power wash for concrete, brick, and stubborn buildup. Always at the right pressure for the surface.",
    svcp_quote:     "Get a quote",
    /* per-service descriptions */
    svc_residential_desc: "Whole-home exterior cleaning. Walls, walkways, driveway, fence, patio — restored in a single visit. Soft-wash where the surface needs it.",
    svc_softwash_desc:    "Low-pressure wash with biodegradable detergents. Kills mildew and algae at the root without stripping paint or damaging shingles.",
    svc_driveways_desc:   "Concrete, brick, and paver driveways and walkways. Removes oil stains, tire marks, mildew, and embedded grime. Optional sealant.",
    svc_siding_desc:      "Vinyl, stucco, fiber-cement, and Hardie board. Soft-wash gets behind the algae streaks without forcing water under the siding.",
    svc_roof_desc:        "Asphalt shingle, tile, and metal roof cleaning with the soft-wash method recommended by the ARMA. Removes black streaks and moss.",
    svc_decks_desc:       "Wood and composite decks, vinyl and wood fencing. Pressure tuned to the material so the wash brightens without etching the grain.",
    svc_concrete_desc:    "Patios, pool decks, walkways, and driveways. Hot-water clean for grease and oil, surface-cleaner pass for even results.",
    svc_commercial_desc:  "Storefront sidewalks, drive-thrus, dumpster pads, fleet washing, restaurant patios. Recurring schedules available.",

    process_kicker: "— How it works",
    process_h2:     "Four steps from call to clean.",
    process_1_t:    "1. Free estimate",
    process_1_p:    "Text a photo or schedule a 10-minute on-site walk-through. Quote back within 2 business hours.",
    process_2_t:    "2. Schedule",
    process_2_p:    "Pick a date, usually within the same week. Saturday slots available.",
    process_3_t:    "3. Wash",
    process_3_p:    "Right pressure, right detergent, every surface. We move and replace patio furniture, cover landscaping.",
    process_4_t:    "4. Walk-through",
    process_4_p:    "We don't leave until you're happy. Pay only after you've walked the job.",

    /* ---- About page ---- */
    about_bread:    "About",
    about_kicker:   "— About",
    about_h1a:      "Family-run, Jacksonville-based,",
    about_h1b:      "since [year].",
    about_lede:     "Gerardo started this business doing driveways for neighbors. Today the crew handles homes, restaurants, fleet washing, and storefronts across Northeast Florida — same standards, same crew, same number on the truck.",
    about_h2a:      "Why we soft wash by default.",
    about_p1:       "Most pressure-wash damage comes from too much pressure on a delicate surface — paint stripped from siding, asphalt granules blasted off shingles, mortar etched out of brick. Soft wash uses biodegradable detergents and low pressure to kill the mildew at the root, then rinses clean. We power wash where it's appropriate (concrete, hard pavers) and soft wash everywhere else.",
    about_h2b:      "Equipment.",
    about_p2:       "Hot-water 4-gpm pressure washer for concrete and grease. Dedicated soft-wash rig with downstream injector for siding, roofs, and painted surfaces. Surface cleaner attachment for even results on driveways and patios. All gear maintained in-house.",
    about_h2c:      "Insured, licensed, courteous.",
    about_p3:       "Liability and worker's-comp insured. Florida-based LLC. Crew shows up in marked shirts, on time, with shoe covers when entering occupied spaces.",
    about_h2d:      "Eco-safe by default.",
    about_p4:       "Detergents are biodegradable and plant-safe at the dilutions we use. Wastewater is collected on commercial jobs where local code requires it. We rinse and protect landscaping before any wash.",

    /* ---- Contact page ---- */
    contact_bread:  "Contact",
    contact_kicker: "— Get a quote",
    contact_h1a:    "Talk to",
    contact_h1b:    "Gerardo.",
    contact_p:      "Text a photo of what needs cleaning, or fill out the form. Most quotes back within 2 business hours.",
    contact_l_phone:"Call / text",
    contact_l_wa:   "WhatsApp",
    contact_l_addr: "Service area",
    contact_l_hours:"Hours",
    contact_l_email:"Email",
    form_kicker:    "Quote request",
    form_h2a:       "Tell us about",
    form_h2b:       "the project.",
    form_label_name:    "Your name",
    form_label_business:"Business name (if applicable)",
    form_label_email:   "Email",
    form_label_phone:   "Phone",
    form_label_address: "Property address (city + ZIP is fine)",
    form_label_service: "What needs cleaning?",
    form_opt_pick:      "Pick a service…",
    form_label_message: "Project details",
    form_msg_ph:        "Square footage if known, surface type, anything else…",
    form_label_pref:    "Best way to reach you",
    form_pref_wa:       "WhatsApp",
    form_pref_email:    "Email",
    form_pref_call:     "Phone call",
    form_submit:        "Send quote request",
    form_help:          "Or call Gerardo directly at (904) 555-0100 · WhatsApp · gerardo@gerardopressurewash.com",
    form_success:       "Got it — Gerardo will be in touch within 2 business hours.",
    form_stub_banner:   "UI stub — submit logs to console; live email pending.",

    /* ---- Footer ---- */
    foot_svc_head:  "Services",
    foot_co_head:   "Company",
    foot_ct_head:   "Contact",
    foot_link_about:"About",
    foot_link_area: "Service area",
    foot_link_card: "Business card",
    foot_copyright: "© 2026 Gerardo Pressure Washing",
    foot_locale:    "Jacksonville, FL · serving Northeast Florida",
  },

  es: {
    nav_home:       "Inicio",
    nav_services:   "Servicios",
    nav_about:      "Nosotros",
    nav_contact:    "Contacto",
    nav_cta:        "Llama a Gerardo · (904) 555-0100",

    hero_badge:     "Jacksonville · Duval · St. Johns · Clay · Nassau",
    hero_h1a:       "Lavado a presión.",
    hero_h1b:       "Limpio y claro.",
    hero_sub:       "Limpieza residencial y comercial en Jacksonville y el noreste de Florida. Lavado suave para superficies delicadas, lavado fuerte donde se necesita. Estimados gratis, licenciados y asegurados.",
    hero_cta1:      "Estimado gratis",
    hero_cta2:      "Ver servicios",
    hero_cta3:      "WhatsApp a Gerardo",
    hero_stat1:     "Estimados gratis",
    hero_stat2:     "Cita en la misma semana",
    hero_stat3:     "Condados servidos",
    hero_stat4:     "Licenciado y asegurado",

    marquee_text:   "Entradas · Fachadas · Terrazas · Techos · Cercas · Patios · Adoquines · Concreto · Comercial · Lavado suave · Lavado fuerte · Eco-seguro",

    svc_kicker:     "Ocho servicios · Un equipo",
    svc_h2a:        "Todo lo que está afuera de la casa",
    svc_em:         "queda como nuevo",
    svc_h2c:        "después de una visita.",
    svc_link:       "Ver todos los servicios →",
    svc_residential: "Lavado residencial",
    svc_softwash:    "Lavado suave",
    svc_driveways:   "Entradas y aceras",
    svc_siding:      "Fachada de la casa",
    svc_roof:        "Limpieza de techo",
    svc_decks:       "Terrazas y cercas",
    svc_concrete:    "Concreto y adoquines",
    svc_commercial:  "Propiedades comerciales",

    map_kicker:     "— Área de servicio",
    map_h2:         "Jacksonville y noreste de Florida.",
    map_p:          "Citas en la misma semana en Duval, St. Johns, Clay y Nassau. Sin recargos de viaje dentro del área de servicio.",
    zone_duval:     "Duval (Jacksonville, Atlantic Beach, Mayport)",
    zone_stjohns:   "St. Johns (St. Augustine, Ponte Vedra)",
    zone_nassau:    "Nassau (Fernandina Beach, Yulee)",
    zone_clay:      "Clay (Orange Park, Middleburg)",

    test_kicker:    "— Lo que dicen los clientes",
    test_h2a:       "Confianza en toda",
    test_h2b:       "la Primera Costa.",
    test_q1:        "\"La entrada quedó como nueva cuando Gerardo terminó. Llegó a la hora prometida y dejó todo limpio.\"",
    test_n1:        "María L. · Jacksonville Beach",
    test_q2:        "\"Teníamos hongo negro en toda una pared. Lavado suave, no dañó la pintura, medio día de trabajo.\"",
    test_n2:        "James T. · Ponte Vedra",
    test_q3:        "\"Hace el patio del restaurante cada dos meses. Confiable, precio justo, sin problemas.\"",
    test_n3:        "Karen P. · Atlantic Beach",

    cta_h:          "¿Listo para tu estimado gratis?",
    cta_p:          "Manda una foto de lo que hay que limpiar. La mayoría de los estimados llegan en 2 horas hábiles.",
    cta_btn1:       "Pide una cotización",
    cta_btn2:       "Llama (904) 555-0100",

    svcp_bread:     "Servicios",
    svcp_h1:        "Servicios",
    svcp_lede:      "Lavado suave para pintura, fachada y techos. Lavado fuerte para concreto, ladrillo y suciedad pegada. Siempre la presión correcta para cada superficie.",
    svcp_quote:     "Pide una cotización",
    svc_residential_desc: "Limpieza completa del exterior de la casa. Paredes, aceras, entrada, cerca, patio — restaurados en una sola visita. Lavado suave donde lo requiere la superficie.",
    svc_softwash_desc:    "Lavado a baja presión con detergentes biodegradables. Mata el moho y las algas de raíz sin remover pintura ni dañar el techo.",
    svc_driveways_desc:   "Entradas y aceras de concreto, ladrillo y adoquines. Quita manchas de aceite, marcas de llantas, moho y mugre incrustada. Sellador opcional.",
    svc_siding_desc:      "Vinilo, estuco, fibrocemento y Hardie board. El lavado suave quita las rayas de algas sin forzar agua bajo la fachada.",
    svc_roof_desc:        "Limpieza de techos de teja de asfalto, teja y metal con el método de lavado suave recomendado por la ARMA. Quita rayas negras y moho.",
    svc_decks_desc:       "Terrazas de madera y composite, cercas de vinilo y madera. Presión ajustada al material para que la madera se aclare sin grabarse.",
    svc_concrete_desc:    "Patios, plataformas de piscina, aceras y entradas. Limpieza con agua caliente para grasa y aceite, pasada con limpiador de superficie para resultados parejos.",
    svc_commercial_desc:  "Aceras de tiendas, drive-thru, áreas de basureros, lavado de flotas, patios de restaurante. Disponemos de horarios recurrentes.",

    process_kicker: "— Cómo funciona",
    process_h2:     "Cuatro pasos de la llamada al trabajo terminado.",
    process_1_t:    "1. Estimado gratis",
    process_1_p:    "Manda una foto o agenda una visita rápida de 10 minutos. Cotización de regreso en 2 horas hábiles.",
    process_2_t:    "2. Agenda",
    process_2_p:    "Escoge una fecha, normalmente dentro de la misma semana. Disponemos de citas los sábados.",
    process_3_t:    "3. Lavado",
    process_3_p:    "Presión correcta, detergente correcto, cada superficie. Movemos y reponemos los muebles del patio, cubrimos las plantas.",
    process_4_t:    "4. Revisión",
    process_4_p:    "No nos vamos hasta que estés satisfecho. Pagas solo después de revisar el trabajo.",

    about_bread:    "Nosotros",
    about_kicker:   "— Sobre nosotros",
    about_h1a:      "Familia, basados en Jacksonville,",
    about_h1b:      "desde [año].",
    about_lede:     "Gerardo empezó este negocio lavando entradas para los vecinos. Hoy el equipo atiende casas, restaurantes, flotas y comercios en todo el noreste de Florida — los mismos estándares, el mismo equipo, el mismo número en el camión.",
    about_h2a:      "Por qué hacemos lavado suave por defecto.",
    about_p1:       "La mayor parte del daño por lavado a presión viene de demasiada presión sobre una superficie delicada — pintura levantada de la fachada, granos de asfalto arrancados de la teja, mortero erosionado del ladrillo. El lavado suave usa detergentes biodegradables y baja presión para matar el moho de raíz y luego enjuagar. Hacemos lavado fuerte donde es apropiado (concreto, adoquín duro) y lavado suave en todo lo demás.",
    about_h2b:      "Equipo.",
    about_p2:       "Lavadora a presión de agua caliente de 4 gpm para concreto y grasa. Equipo de lavado suave con inyector para fachadas, techos y superficies pintadas. Limpiador de superficie para resultados parejos en entradas y patios. Todo el equipo se mantiene internamente.",
    about_h2c:      "Asegurados, licenciados, respetuosos.",
    about_p3:       "Aseguranza de responsabilidad y de trabajadores. LLC basada en Florida. El equipo llega con camisetas marcadas, a la hora, con cubre-zapatos cuando entra a espacios habitados.",
    about_h2d:      "Eco-seguros por defecto.",
    about_p4:       "Los detergentes son biodegradables y seguros para plantas en las diluciones que usamos. El agua usada se recoge en trabajos comerciales donde el código local lo requiere. Enjuagamos y protegemos las plantas antes de cualquier lavado.",

    contact_bread:  "Contacto",
    contact_kicker: "— Pide una cotización",
    contact_h1a:    "Habla con",
    contact_h1b:    "Gerardo.",
    contact_p:      "Manda una foto de lo que hay que limpiar, o llena el formulario. La mayoría de las cotizaciones llegan en 2 horas hábiles.",
    contact_l_phone:"Llamar / textear",
    contact_l_wa:   "WhatsApp",
    contact_l_addr: "Área de servicio",
    contact_l_hours:"Horario",
    contact_l_email:"Correo",
    form_kicker:    "Solicitud de cotización",
    form_h2a:       "Cuéntanos sobre",
    form_h2b:       "el proyecto.",
    form_label_name:    "Tu nombre",
    form_label_business:"Nombre del negocio (si aplica)",
    form_label_email:   "Correo",
    form_label_phone:   "Teléfono",
    form_label_address: "Dirección de la propiedad (ciudad + código postal está bien)",
    form_label_service: "¿Qué hay que limpiar?",
    form_opt_pick:      "Escoge un servicio…",
    form_label_message: "Detalles del proyecto",
    form_msg_ph:        "Pies cuadrados si los sabes, tipo de superficie, cualquier otra cosa…",
    form_label_pref:    "Mejor forma de contactarte",
    form_pref_wa:       "WhatsApp",
    form_pref_email:    "Correo",
    form_pref_call:     "Llamada",
    form_submit:        "Enviar cotización",
    form_help:          "O llama a Gerardo directamente al (904) 555-0100 · WhatsApp · gerardo@gerardopressurewash.com",
    form_success:       "Recibido — Gerardo te contactará en 2 horas hábiles.",
    form_stub_banner:   "Demo — el envío se registra en consola; correo en vivo pendiente.",

    foot_svc_head:  "Servicios",
    foot_co_head:   "Compañía",
    foot_ct_head:   "Contacto",
    foot_link_about:"Sobre nosotros",
    foot_link_area: "Área de servicio",
    foot_link_card: "Tarjeta de presentación",
    foot_copyright: "© 2026 Gerardo Pressure Washing",
    foot_locale:    "Jacksonville, FL · noreste de Florida",
  },
};

const SDC_LANG_KEY = "gerardo_lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i]").forEach(el => {
    const k = el.getAttribute("data-i");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i-ph]").forEach(el => {
    const k = el.getAttribute("data-i-ph");
    if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  try { localStorage.setItem(SDC_LANG_KEY, lang); } catch (e) {}
}

function getLang() {
  try { return localStorage.getItem(SDC_LANG_KEY) || "en"; } catch (e) { return "en"; }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
});
