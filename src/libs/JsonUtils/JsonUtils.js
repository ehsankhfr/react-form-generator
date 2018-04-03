class JsonUtils {
    static arrayToJson(arr = []) {
        return arr.reduce((res, elem) => Object.assign(res, {[elem]: elem}), {});
    }
}

export default JsonUtils;
