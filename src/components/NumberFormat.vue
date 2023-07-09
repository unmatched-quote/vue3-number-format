<template>
    <span>{{ formattedNumber() }}</span>
    <slot v-if="!numValid">Invalid number supplied: {{ number }}</slot>
</template>

<script lang="ts" setup>

import numeral from 'numeral';
import {ref} from 'vue';

const numValid = ref(true);

const props = withDefaults(defineProps<{
    number: string | number,
    to: string
}>(), {
    to: '0,0.00'
});

const formattedNumber = () =>
{
    const {number, to} = props;

    if (number === null || number === undefined || number === '')
    {
        numValid.value = false;

        return;
    }

    let coerced = parseFloat(number as string);

    if (isNaN(coerced)) {
        numValid.value = false;
        return;
    }

    try
    {
        return numeral(coerced).format(to);
    } catch (e)
    {
        console.warn(e);

        return null;
    }
}

</script>
