import { LicensePropertyRules } from './LicensePropertyRules';


export class LicenseProperty {
    public enable?: boolean;
    public rules?: Array<LicensePropertyRules>;
    public constructor() { 
    }
    public withEnable(enable: boolean): LicenseProperty {
        this['enable'] = enable;
        return this;
    }
    public withRules(rules: Array<LicensePropertyRules>): LicenseProperty {
        this['rules'] = rules;
        return this;
    }
}