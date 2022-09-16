import { AUDIO_FEATURES } from "./constants";
import Bowser from 'bowser';

export const checkIfMobile = () => Bowser.getParser(window.navigator.userAgent).is('mobile');

export const getAverageObject = objects => {
    let accumulator = {};
    const keys = Object.keys(AUDIO_FEATURES);
    keys.forEach(key => accumulator[key] = 0);
    objects.forEach(object => keys.forEach(key => accumulator[key] += object[key]));
    keys.forEach(key => accumulator[key] = (accumulator[key] / objects.length).toFixed(5));
    return accumulator;
}