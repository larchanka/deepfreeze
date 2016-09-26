# deepfreeze

## Description

Module allows you to freeze any object to prevent its edition. Based on `Object.freeze`.

## Usage

```javascript
let someObject = {
  key1: 'value',
  key2: true,
  keyObj: {
    key3: 10,
    key4: 'string'
  }
};

deepfreeze(someObject);
```
