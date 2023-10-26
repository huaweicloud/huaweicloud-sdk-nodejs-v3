import { AppRules } from './AppRules';


export class AppRulesBody {
    public appRules?: Array<AppRules>;
    public constructor() { 
    }
    public withAppRules(appRules: Array<AppRules>): AppRulesBody {
        this['appRules'] = appRules;
        return this;
    }
}