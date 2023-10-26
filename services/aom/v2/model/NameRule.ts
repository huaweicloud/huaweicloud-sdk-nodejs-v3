import { AppNameRule } from './AppNameRule';
import { ApplicationNameRule } from './ApplicationNameRule';


export class NameRule {
    public appNameRule?: Array<AppNameRule>;
    public applicationNameRule?: Array<ApplicationNameRule>;
    public constructor(appNameRule?: Array<AppNameRule>, applicationNameRule?: Array<ApplicationNameRule>) { 
        this['appNameRule'] = appNameRule;
        this['applicationNameRule'] = applicationNameRule;
    }
    public withAppNameRule(appNameRule: Array<AppNameRule>): NameRule {
        this['appNameRule'] = appNameRule;
        return this;
    }
    public withApplicationNameRule(applicationNameRule: Array<ApplicationNameRule>): NameRule {
        this['applicationNameRule'] = applicationNameRule;
        return this;
    }
}