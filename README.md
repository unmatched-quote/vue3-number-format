# Number Format

`VNumberFormat` is a Vue 3 component for formatting numbers from value/format to a value/format.

It uses [numeral.js](http://numeraljs.com/) under the hood, use numeral's documentation to see the options for number formats.

## Usage

### Register the component

```typescript
import Vue from 'vue';
import { VNumberFormat } from 'vue3-jsc-number-format';

Vue.component('VNumberFormat', VNumberFormat);
```

### Template usage

```vue
<template>
    <v-number-format number="9200" to="0,0.00">
</template>
```

### Props

`number` - the number you want to format. Accept a string/number.

`to` - the specific format to use in formatting the number. Accept a string.


### Features

- Shows an error message when null/invalid number is passed

```vue
<template>
    <!-- output: Invalid number supplied: abc -->
    <v-number-format number="this is not a number" to="0,0.00">
</template>
```

Customize the error message via slot

```vue
<template>
    <v-number-format number="this is not a number" to="0,0.00">
	    You passed an invalid number
    <v-number-format>
</template>
```

## Testing

`npm test`

## Developing / building

- Clone the repository
- `npm install`
- `npm run dev`
- To build: `npm run build`

Change the library name at will

