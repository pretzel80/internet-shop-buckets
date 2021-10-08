import types from "./types";

const setBuckets = buckets => ({
    type: types.SET_BUCKETS,
    payload: buckets
})

const exportedObject = {
    setBuckets
}

export default exportedObject;
