export const LOADING_TEXT = 'Skipping...';

export const NETFLIX = 'netflix';
const PRIME = 'prime';

export const elementMapping = [{
  type: NETFLIX,
  selector: "[aria-label='Skip Intro']",
},{
  type: NETFLIX,
  selector: "[aria-label='Skip Recap']",
},{
  type: NETFLIX,
  selector: "[aria-label='Continue Playing']",
},{
  type: PRIME,
  selector: ".skipElement",
},{
  type: PRIME,
  selector: ".adSkipButton",
},{
  type: PRIME,
  selector: ".nextUpCard",
}];