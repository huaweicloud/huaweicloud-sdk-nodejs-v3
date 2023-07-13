

export class CompressRequest {
    private 'compress_switch'?: number | undefined;
    public constructor() { 
    }
    public withCompressSwitch(compressSwitch: number): CompressRequest {
        this['compress_switch'] = compressSwitch;
        return this;
    }
    public set compressSwitch(compressSwitch: number | undefined) {
        this['compress_switch'] = compressSwitch;
    }
    public get compressSwitch() {
        return this['compress_switch'];
    }
}