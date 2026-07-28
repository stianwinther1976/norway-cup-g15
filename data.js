// ============================================================
// Norway Cup 2026 – Gutter 15 (Boys 15) – resultatdata
// Kilde: norwaycup.cupmanager.net (lagt inn manuelt fra skjermbilder)
//
// Tabellrader: [lagnavn, V, U, T, mål for, mål mot]
// Rekkefølgen i tabellen = offisiell rekkefølge fra cupmanager.
// finished: true settes når gruppa er ferdigspilt.
//
// Sluttspill-slots:
//   {type:"group", group:"1", pos:1}  -> nr. 1 i gruppe 1
//   {type:"winner", match:"P1"}       -> vinner av kamp P1
//   {type:"tbd", label:"..."}         -> ukjent ennå
// ============================================================

const DATA = (function(){

  const meta = {
    title: "Norway Cup 2026",
    subtitle: "Gutter 15 (Boys 15)",
    updated: "28.07.2026 kl. 02:15 (tabeller etter 2 av 3 gruppekamper)",
    sourceUrl: "https://norwaycup.cupmanager.net/2026,nb/result/division/80269931",
    favorite: "Gui Sportsklubb",
    note: "Tabeller etter 2 av 3 gruppekamper. Lagene er plassert i treet slik gruppene ligger an nå – alt gult/stiplet er foreløpig til gruppene er ferdigspilt."
  };

  const rules = { win: 3, draw: 1, loss: 0 };

  // ---------- grupper ----------
  const G = (id, rows) => ({
    id: String(id), name: "Gruppe " + id, totalMatches: 6, finished: false,
    table: rows
  });

  const groups = [
    G(1, [["Stryn T&IL",2,0,0,14,2],["Utleira IL",2,0,0,7,0],["Oppsal IF Fotball 1",0,0,2,1,10],["Os TF 2",0,0,2,1,11]]),
    G(2, [["Trond, IL",2,0,0,5,0],["Randesund IL 2",1,0,1,3,2],["Elverum Fotball Hvit",1,0,1,3,4],["Tertnes Fotball Herrer",0,0,2,1,6]]),
    G(3, [["Måløy FK",2,0,0,6,0],["Astor Fotballklubb 2",1,0,1,5,1],["Sykkylven IL",1,0,1,1,2],["Haslum IL Hvit",0,0,2,0,9]]),
    G(4, [["KFUM-Kam. Oslo 1",2,0,0,17,1],["Strømsgodset IF",1,0,1,6,3],["Øygarden IL",1,0,1,2,5],["Nessegutten/Sverre",0,0,2,0,16]]),
    G(5, [["Manglerud Star Fotball 1",2,0,0,4,2],["Bergen Nord Fotball",1,0,1,11,3],["Otta IL",1,0,1,3,3],["Giv Akt, IL",0,0,2,2,12]]),
    G(6, [["Åsane Fotball",2,0,0,8,2],["BVH-G15-Lag1 (Bærums Verk)",2,0,0,6,3],["Kolnes IL",0,0,2,3,6],["Rival, SK",0,0,2,2,8]]),
    G(7, [["Askøy FK",2,0,0,5,0],["Colégio Arbos",1,1,0,1,0],["Etne IL 2",0,1,1,0,2],["HSV Fotball 1",0,0,2,0,4]]),
    G(8, [["KFUM-Kam. Oslo 2",1,1,0,10,2],["Frøya IL Born 2011",1,1,0,5,4],["Baune, SK",1,0,1,2,8],["Tune IL",0,0,2,2,5]]),
    G(9, [["Klemetsrud IL 2",2,0,0,8,1],["Torridal IL",2,0,0,7,0],["HIF/Stein",0,0,2,1,5],["Folldal IF",0,0,2,0,10]]),
    G(10, [["Os TF 1",2,0,0,9,3],["IL ROS",1,0,1,6,3],["V. Sverresborg/Vestbyen",1,0,1,6,7],["Hasle-Løren IL 2",0,0,2,1,9]]),
    G(11, [["Jevnaker IF",2,0,0,8,1],["Florø SK",1,0,1,6,6],["Nessegutten/Sverre 2",1,0,1,6,6],["Manglerud Star Fotball 2",0,0,2,1,8]]),
    G(12, [["Follo FK",2,0,0,10,0],["Elverum Fotball Sort",1,0,1,5,5],["Oppsal IF Fotball 2",1,0,1,3,5],["Askvoll IL",0,0,2,0,8]]),
    G(13, [["Bærum SK A",2,0,0,8,0],["Etne IL 1",1,0,1,3,3],["Flekkerøy",1,0,1,2,2],["Nordre Land IL/Torpa",0,0,2,1,9]]),
    G(14, [["Gjøa Youth (Brooklyn)",2,0,0,14,0],["Verdal IL",1,0,1,7,4],["Bremnes IL",1,0,1,4,1],["Klemetsrud IL 1",0,0,2,0,20]]),
    G(15, [["Kolbotn IL 1",2,0,0,13,0],["Storm BK 1",1,0,1,2,2],["Oppdal IL G15",1,0,1,2,6],["Ringebu-Fåvang FK",0,0,2,0,9]]),
    G(16, [["Hasle-Løren IL 1",2,0,0,8,1],["Molde FK",2,0,0,5,1],["Skjoldar/Vats/Fjordar",0,0,2,1,3],["Kvernbit, IL",0,0,2,1,10]]),
    G(17, [["Randesund IL 1",2,0,0,13,1],["Vaulen IL",2,0,0,9,0],["Vuku IL",0,0,2,0,4],["Os TF 3",0,0,2,1,18]]),
    G(18, [["Langfjorden FK/Skåla",1,1,0,5,3],["Sportsklubben Karmøy",1,1,0,3,1],["Grei, SF",1,0,1,1,2],["Rosendal TL",0,0,2,2,5]]),
    G(19, [["FK Fyllingsdalen 1",2,0,0,11,0],["Fløya, IF",1,0,1,5,3],["Kjelsås IL 2",1,0,1,2,5],["Korgen IL",0,0,2,0,10]]),
    G(20, [["Haslum IL Rød",2,0,0,13,2],["Ranheim IL 1",2,0,0,5,1],["Green-Kenya Academy",0,0,2,3,9],["FK Fyllingsdalen 2",0,0,2,0,9]]),
    G(21, [["Førde IL 1",2,0,0,6,1],["Astor Fotballklubb 1",0,1,0,0,0],["Forward, SK",0,1,1,0,2],["SELECCION ELITE",0,0,1,1,4]]),
    G(22, [["Varegg/Sandviken 1",2,0,0,7,0],["Lillestrøm",1,0,1,8,3],["Holmlia SK",1,0,1,2,5],["Hasundgot IL",0,0,2,1,10]]),
    G(23, [["Førde IL 2",2,0,0,5,3],["Bærum SK",1,0,1,9,2],["Tiller IL",1,0,1,12,6],["Tana Ballklubb",0,0,2,3,18]]),
    G(24, [["Better Future Pakistan",1,1,0,3,2],["Sauda IL",1,0,1,2,2],["Trio, IL",0,2,0,3,3],["Kolbotn IL 2",0,1,1,2,3]]),
    G(25, [["Tallinna JK Augur",1,1,0,9,2],["Vålerenga Fotball 1",1,1,0,4,3],["SK Vard Haugesund 2",1,0,1,8,2],["Vinne IL",0,0,2,0,14]]),
    G(26, [["Sædalen Idrettslag",2,0,0,11,1],["Melhus IL",2,0,0,7,1],["Surnadal IL",0,0,2,1,6],["KFUM-Kam. Oslo 3",0,0,2,1,12]]),
    G(27, [["SK Vard Haugesund 1",2,0,0,5,0],["HSV Fotball 2",1,0,1,7,4],["Osterøy IL",1,0,1,1,1],["Vålerenga Fotball 2",0,0,2,0,8]]),
    G(28, [["Varegg/Sandviken 2",1,1,0,3,2],["Ørsta IL",0,2,0,4,4],["Finnøy IL",0,2,0,3,3],["Snarøya SK",0,1,1,3,4]]),
    G(29, [["Nord, SK",2,0,0,8,2],["Odda FK",1,0,1,12,2],["Gossen IL Gekko",1,0,1,4,3],["Bærums Verk Hauger 3/4",0,0,2,0,17]]),
    G(30, [["Sogndal IL",2,0,0,6,0],["Skeid",1,0,1,7,7],["Vågå/Lom",1,0,1,4,6],["Ranheim IL 2",0,0,2,3,7]]),
    G(31, [["Gui Sportsklubb",2,0,0,7,0],["Krokelvdalen Idrettslag",1,0,1,4,6],["Nationalkameratene",0,1,1,3,5],["Eidsvåg IL",0,1,1,1,4]]),
    G(32, [["Åndalsnes",2,0,0,9,7],["Orkanger IF",1,0,1,9,4],["Grüner Fotball",1,0,1,8,6],["Vestsiden-Askøy IL",0,0,2,1,10]]),
    G(33, [["Kjelsås IL 1",2,0,0,5,1],["Eid IL",1,0,1,5,3],["Freidig, SPK",1,0,1,4,4],["Træff",0,0,2,0,6]]),
    G(34, [["Bauleni United (BUSA)",2,0,0,8,2],["Greåker IF",1,0,1,1,3],["Guard/Rollon",0,1,1,2,3],["Frigg Oslo FK",0,1,1,4,7]]),
    G(35, [["Grorud IL",2,0,0,10,0],["Emblem IL",0,2,0,0,0],["Kopervik IL G15",0,1,1,0,2],["Stjørdals-Blink",0,1,1,0,8]])
  ];

  // ---------- Playoff A ----------
  const gs = (g,pos,note) => { const s = {type:"group", group:String(g), pos}; if(note) s.note = note; return s; };
  const W  = id => ({type:"winner", match:id});
  const M = (id, home, away, time) => ({id, home, away, hs:null, as:null, time: time||""});

  // 1/64-finaler (innledende) – bekreftet fra offisiell stige.
  // P6 utledet: 2. i gr. 24 og 33 er de eneste som gjenstår.
  const r64 = [
    M("P1", gs(31,2), gs(30,2)),
    M("P2", gs(26,2), gs(34,2)),
    M("P3", gs(27,2), gs(35,2)),
    M("P4", gs(25,2), gs(32,2)),
    M("P5", gs(28,2), gs(29,2)),
    M("P6", gs(24,2), gs(33,2))
  ];

  // 1/32-finaler i offisiell trerekkefølge (ovenfra og ned)
  const r32pairs = [
    [gs(1,1),  W("P1")],   [gs(32,1), gs(33,1)],
    [gs(16,1), gs(14,2)],  [gs(17,1), gs(15,2)],
    [gs(8,1),  gs(23,2)],  [gs(25,1), gs(7,2)],
    [gs(9,1),  gs(22,2)],  [gs(24,1), gs(6,2)],
    [gs(4,1),  W("P2")],   [gs(29,1), gs(3,2)],
    [gs(13,1), gs(19,2)],  [gs(20,1), gs(10,2)],
    [gs(5,1),  W("P3")],   [gs(28,1), gs(2,2)],
    [gs(12,1), gs(18,2)],  [gs(21,1), gs(11,2)],
    [gs(2,1),  W("P4")],   [gs(31,1), gs(34,1)],
    [gs(15,1), gs(16,2)],  [gs(18,1), gs(9,2)],
    [gs(7,1),  gs(21,2)],  [gs(26,1), gs(1,2)],
    [gs(10,1), gs(17,2)],  [gs(23,1), gs(8,2)],
    [gs(3,1),  W("P5")],   [gs(30,1), gs(35,1)],
    [gs(14,1), gs(13,2)],  [gs(19,1), gs(12,2)],
    [gs(6,1),  W("P6")],   [gs(27,1), gs(4,2)],
    [gs(11,1), gs(20,2)],  [gs(22,1), gs(5,2)]
  ];
  const r32 = r32pairs.map((p,i) => M("A"+(i+1), p[0], p[1]));

  // Senere runder genereres: vinnere av nabokamper møtes
  function nextRound(prev, prefix){
    const out = [];
    for(let i=0; i<prev.length; i+=2){
      out.push(M(prefix+(i/2+1), W(prev[i].id), W(prev[i+1].id)));
    }
    return out;
  }
  const r16 = nextRound(r32, "B");
  const r8  = nextRound(r16, "C");
  const qf  = nextRound(r8,  "D");
  const sf  = nextRound(qf,  "E");
  const fin = nextRound(sf,  "F");
  fin[0].time = "Finale: fre 31.07 kl. 15:00";

  const brackets = [
    {
      id: "A", name: "Playoff A",
      rounds: [
        {name:"1/64-finaler", matches:r64},
        {name:"1/32-finaler", matches:r32},
        {name:"1/16-finaler", matches:r16},
        {name:"1/8-finaler",  matches:r8},
        {name:"Kvartfinaler", matches:qf},
        {name:"Semifinaler",  matches:sf},
        {name:"Finale",       matches:fin}
      ]
    }
  ];

  return { meta, rules, groups, brackets };
})();

if (typeof window !== "undefined") window.DATA = DATA;
