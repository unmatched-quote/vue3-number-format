import { describe, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';

import VNumberFormat from "../NumberFormat.vue";

const wrapper:VueWrapper = mount(VNumberFormat, {
    props: {
        number: 200000.0,
        to: '0,0.00',
    }
});

describe('VNumber', async () =>
{
    it('format number correctly', () => {
        expect(wrapper.html()).toContain("200,000.00");
    });

    it('format number passed as string correctly', async () => {
        await wrapper.setProps({ number: "8100"});
        expect(wrapper.html()).toContain("8,100.00");
    });

    it('show error message for invalid number', async () => {
        await wrapper.setProps({ number: 'abc' });
        const errorMsg = "Invalid number supplied: abc";
        expect((wrapper.vm as any).numValid).toBe(false);
        expect(wrapper.html()).toContain(errorMsg);
    });
});