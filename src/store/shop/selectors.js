const getBuckets = () => (state) => state.shop.buckets;
const isLoading = () => state => state.shop.isLoading;

const exportedObject = {
    getBuckets,
    isLoading
}

export default exportedObject;