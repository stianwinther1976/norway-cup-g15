// ============================================================
// Norway Cup 2026 – Gutter 15 – resultatdata
// Denne fila er den ENESTE som oppdateres når nye resultater
// kommer inn. Alt annet er visning.
//
// Kampformat: hs/as = hjemmescore/bortescore. null = ikke spilt.
// Sluttspill-slots:
//   {type:"group", group:"A", pos:1}  -> nr. 1 i gruppe A
//   {type:"winner", match:"AS1"}      -> vinner av kamp AS1
//   {type:"loser",  match:"AS1"}      -> taper av kamp AS1
//   {type:"team",  name:"Lagnavn"}    -> fast lag
//   {type:"tbd"}                      -> ukjent ennå
// ============================================================

const DATA = {
  meta: {
    title: "Norway Cup 2026",
    subtitle: "Gutter 15 (G15)",
    updated: "27.07.2026 kl. 16:54",
    sourceUrl: "https://norwaycup.cupmanager.net/2026,nb/result/division/80269931",
    note: "Venter på lagoppsett – gruppene fylles inn så snart de er klare."
  },

  // Poengregler og rekkefølge på tabellkriterier
  rules: {
    win: 3, draw: 1, loss: 0,
    tiebreakers: ["points", "goalDiff", "goalsFor", "headToHead"]
  },

  groups: [
    {
      id: "A",
      name: "Gruppe A",
      teams: ["Lag A1", "Lag A2", "Lag A3", "Lag A4"],
      matches: [
        { home: "Lag A1", away: "Lag A2", hs: null, as: null, time: "" },
        { home: "Lag A3", away: "Lag A4", hs: null, as: null, time: "" },
        { home: "Lag A1", away: "Lag A3", hs: null, as: null, time: "" },
        { home: "Lag A2", away: "Lag A4", hs: null, as: null, time: "" },
        { home: "Lag A4", away: "Lag A1", hs: null, as: null, time: "" },
        { home: "Lag A2", away: "Lag A3", hs: null, as: null, time: "" }
      ]
    },
    {
      id: "B",
      name: "Gruppe B",
      teams: ["Lag B1", "Lag B2", "Lag B3", "Lag B4"],
      matches: [
        { home: "Lag B1", away: "Lag B2", hs: null, as: null, time: "" },
        { home: "Lag B3", away: "Lag B4", hs: null, as: null, time: "" },
        { home: "Lag B1", away: "Lag B3", hs: null, as: null, time: "" },
        { home: "Lag B2", away: "Lag B4", hs: null, as: null, time: "" },
        { home: "Lag B4", away: "Lag B1", hs: null, as: null, time: "" },
        { home: "Lag B2", away: "Lag B3", hs: null, as: null, time: "" }
      ]
    }
  ],

  brackets: [
    {
      id: "A",
      name: "A-sluttspill",
      rounds: [
        {
          name: "Kvartfinaler",
          matches: [
            { id: "AQ1", home: { type: "group", group: "A", pos: 1 }, away: { type: "group", group: "B", pos: 2 }, hs: null, as: null, time: "" },
            { id: "AQ2", home: { type: "group", group: "B", pos: 1 }, away: { type: "group", group: "A", pos: 2 }, hs: null, as: null, time: "" }
          ]
        },
        {
          name: "Finale",
          matches: [
            { id: "AF", home: { type: "winner", match: "AQ1" }, away: { type: "winner", match: "AQ2" }, hs: null, as: null, time: "Fre 31.07 15:00" }
          ]
        }
      ]
    },
    {
      id: "B",
      name: "B-sluttspill",
      rounds: [
        {
          name: "Semifinaler",
          matches: [
            { id: "BS1", home: { type: "group", group: "A", pos: 3 }, away: { type: "group", group: "B", pos: 4 }, hs: null, as: null, time: "" },
            { id: "BS2", home: { type: "group", group: "B", pos: 3 }, away: { type: "group", group: "A", pos: 4 }, hs: null, as: null, time: "" }
          ]
        },
        {
          name: "Finale",
          matches: [
            { id: "BF", home: { type: "winner", match: "BS1" }, away: { type: "winner", match: "BS2" }, hs: null, as: null, time: "Fre 31.07 12:00" }
          ]
        }
      ]
    }
  ]
};

// Gjør DATA tilgjengelig for index.html
if (typeof window !== "undefined") window.DATA = DATA;
