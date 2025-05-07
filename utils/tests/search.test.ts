// import { filterCurrencies } from "../search";

// const mockCurrencies = [
//   { id: "1", name: "Bitcoin", symbol: "BTC" },
//   { id: "2", name: "Ethereum", symbol: "ETH" },
//   { id: "3", name: "Ethereum Classic", symbol: "ETC" },
//   { id: "4", name: "Foobar", symbol: "FOO" },
//   { id: "5", name: "Barfoo", symbol: "BAR" },
//   { id: "6", name: "Tronclassic", symbol: "TRC" },
// ];

// describe("filterCurrencies util", () => {
//   it("filters by name starting with query", () => {
//     const result = filterCurrencies(mockCurrencies, "bit");
//     expect(result).toEqual([{ id: "1", name: "Bitcoin", symbol: "BTC" }]);
//   });

//   it("filters by space-prefixed substring match in name", () => {
//     const result = filterCurrencies(mockCurrencies, "classic");
//     expect(result).toEqual([
//       { id: "3", name: "Ethereum Classic", symbol: "ETC" },
//     ]);
//   });

//   it("filters by symbol starting with query", () => {
//     const result = filterCurrencies(mockCurrencies, "ET");
//     expect(result).toEqual([
//       { id: "2", name: "Ethereum", symbol: "ETH" },
//       { id: "3", name: "Ethereum Classic", symbol: "ETC" },
//     ]);
//   });

//   it("returns empty array when no match", () => {
//     const result = filterCurrencies(mockCurrencies, "xyz");
//     expect(result).toEqual([]);
//   });
// });
