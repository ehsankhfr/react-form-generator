class StringUtils {
    /**
     * Capitalize the string
     * @param str Input string
     * @returns {string}
     */
    static capitalize = (str = "") => str.replace(/([A-Z]){1}/g, ' $1')
        .trim()
        .split(/\s+/)
        .filter(word=>!!word)
        .map((word = " ") => {
            const _word = word.toLowerCase();
            return (_word[0].toUpperCase() + _word.substring(1)).trim();
        })
        .join(" ");

}

export default StringUtils;
