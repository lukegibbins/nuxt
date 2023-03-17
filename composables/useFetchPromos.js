// functions which don't need specifically importing.
// could be a good idea to store generic functions
// componsables can also be nested

export default async (filters) => {
    const {data, error}  = await useFetch(`/api/getPromos`, {
        params: {
            ...filters
        }
    });

    if (error.value){
        throw createError({
            ...error.value,
            statusMessage: "unable to fetch"
        })
    }

    return data;
}