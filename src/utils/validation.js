const DEFAULT_ERROR_MESSAGE = 'This field is required';
const PLANET_CODE_REGEX = /[A-Z]{2}-[A-Z]{3}-[0-9]{2}$/;
const URL_INVALID = 'Image URL too large';
const CODE_INVALID = 'Code format is invalid';
const DESC_INVALID = 'Description should be minimum 15 char and maximum 300 char';

export const isRequired = (errorMessage = DEFAULT_ERROR_MESSAGE) => ({ requiredAndNotAllWhitespace: (str) => ((str + '') && String(str).replace(/\s/g, '').length !== 0) || errorMessage });
export const isValidCode = () => ({ isCode: (str) => ((str + '') && PLANET_CODE_REGEX.test(str)) || CODE_INVALID });
export const isValidUrlSize = () => ({ isUrl: (str = '') => new Blob([str]).size < 65 || URL_INVALID });
export const isDescription = () => ({ isDesc: (str = '') => (str.length > 15 && str.length < 300) || DESC_INVALID });
