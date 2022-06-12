import { AUDIO_FEATURES } from "./constants";

export const getAverageObject = objects => {
    let accumulator = {};
    AUDIO_FEATURES.forEach(key => accumulator[key] = 0);
    objects.forEach(object => AUDIO_FEATURES.forEach(key => accumulator[key] += object[key]));
    AUDIO_FEATURES.forEach(key => accumulator[key] = (accumulator[key] / objects.length).toFixed(2));
    return accumulator;
}