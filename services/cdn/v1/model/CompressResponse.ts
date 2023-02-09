import { CompressRules } from './CompressRules';


export class CompressResponse {
    private 'compress_switch': number | undefined;
    private 'compress_rules'?: Array<CompressRules> | undefined;
    public constructor(compressSwitch?: any) { 
        this['compress_switch'] = compressSwitch;
    }
    public withCompressSwitch(compressSwitch: number): CompressResponse {
        this['compress_switch'] = compressSwitch;
        return this;
    }
    public set compressSwitch(compressSwitch: number | undefined) {
        this['compress_switch'] = compressSwitch;
    }
    public get compressSwitch() {
        return this['compress_switch'];
    }
    public withCompressRules(compressRules: Array<CompressRules>): CompressResponse {
        this['compress_rules'] = compressRules;
        return this;
    }
    public set compressRules(compressRules: Array<CompressRules> | undefined) {
        this['compress_rules'] = compressRules;
    }
    public get compressRules() {
        return this['compress_rules'];
    }
}