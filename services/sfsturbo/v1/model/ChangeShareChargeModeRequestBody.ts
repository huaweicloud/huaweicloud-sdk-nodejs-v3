import { BssInfo } from './BssInfo';


export class ChangeShareChargeModeRequestBody {
    private 'bss_param'?: BssInfo;
    public constructor(bssParam?: BssInfo) { 
        this['bss_param'] = bssParam;
    }
    public withBssParam(bssParam: BssInfo): ChangeShareChargeModeRequestBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssInfo  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssInfo | undefined {
        return this['bss_param'];
    }
}