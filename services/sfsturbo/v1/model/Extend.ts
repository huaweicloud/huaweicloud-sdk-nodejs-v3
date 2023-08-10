import { BssInfoExtend } from './BssInfoExtend';


export class Extend {
    private 'new_size'?: number;
    private 'new_bandwidth'?: number;
    private 'bss_param'?: BssInfoExtend;
    public constructor(newSize?: number) { 
        this['new_size'] = newSize;
    }
    public withNewSize(newSize: number): Extend {
        this['new_size'] = newSize;
        return this;
    }
    public set newSize(newSize: number  | undefined) {
        this['new_size'] = newSize;
    }
    public get newSize(): number | undefined {
        return this['new_size'];
    }
    public withNewBandwidth(newBandwidth: number): Extend {
        this['new_bandwidth'] = newBandwidth;
        return this;
    }
    public set newBandwidth(newBandwidth: number  | undefined) {
        this['new_bandwidth'] = newBandwidth;
    }
    public get newBandwidth(): number | undefined {
        return this['new_bandwidth'];
    }
    public withBssParam(bssParam: BssInfoExtend): Extend {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssInfoExtend  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssInfoExtend | undefined {
        return this['bss_param'];
    }
}