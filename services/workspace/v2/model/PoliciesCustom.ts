import { PoliciesCustomOptions } from './PoliciesCustomOptions';


export class PoliciesCustom {
    private 'custom_configuration1_enable'?: boolean;
    public options?: PoliciesCustomOptions;
    public constructor() { 
    }
    public withCustomConfiguration1Enable(customConfiguration1Enable: boolean): PoliciesCustom {
        this['custom_configuration1_enable'] = customConfiguration1Enable;
        return this;
    }
    public set customConfiguration1Enable(customConfiguration1Enable: boolean  | undefined) {
        this['custom_configuration1_enable'] = customConfiguration1Enable;
    }
    public get customConfiguration1Enable(): boolean | undefined {
        return this['custom_configuration1_enable'];
    }
    public withOptions(options: PoliciesCustomOptions): PoliciesCustom {
        this['options'] = options;
        return this;
    }
}