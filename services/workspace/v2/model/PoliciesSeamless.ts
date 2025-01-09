import { PoliciesSeamlessOptions } from './PoliciesSeamlessOptions';


export class PoliciesSeamless {
    private 'seamless_enable'?: boolean;
    public options?: PoliciesSeamlessOptions;
    public constructor() { 
    }
    public withSeamlessEnable(seamlessEnable: boolean): PoliciesSeamless {
        this['seamless_enable'] = seamlessEnable;
        return this;
    }
    public set seamlessEnable(seamlessEnable: boolean  | undefined) {
        this['seamless_enable'] = seamlessEnable;
    }
    public get seamlessEnable(): boolean | undefined {
        return this['seamless_enable'];
    }
    public withOptions(options: PoliciesSeamlessOptions): PoliciesSeamless {
        this['options'] = options;
        return this;
    }
}