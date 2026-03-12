

export class UpdateOcspSwitchRequestBody {
    private 'ocsp_switch'?: boolean;
    public constructor(ocspSwitch?: boolean) { 
        this['ocsp_switch'] = ocspSwitch;
    }
    public withOcspSwitch(ocspSwitch: boolean): UpdateOcspSwitchRequestBody {
        this['ocsp_switch'] = ocspSwitch;
        return this;
    }
    public set ocspSwitch(ocspSwitch: boolean  | undefined) {
        this['ocsp_switch'] = ocspSwitch;
    }
    public get ocspSwitch(): boolean | undefined {
        return this['ocsp_switch'];
    }
}