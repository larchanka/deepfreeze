'use strict';

const deepFreeze = (obj) => {
  let prop, propKey;
  
  Object.freeze(obj);
  
  for (propKey in obj) {
    prop = obj[propKey];
    if (!obj.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }

    deepFreeze(prop);
  }
};

export default deepFreeze;
