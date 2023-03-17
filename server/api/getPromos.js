import promos from "@/data/promos.json";

// on api/getPromos
// You can attach arguments to each endpoint
// internal API endpoint for fething data from an external server, typically starts with defineEventHandler
// This will fetch and handle data directly from the server.

export default defineEventHandler((event) => {
    let allPromos = promos;
    const { id } = getQuery(event);

    if (id) {
        allPromos = allPromos.filter(x => {
            return x.id == id;
        });
    }

    return allPromos;
});