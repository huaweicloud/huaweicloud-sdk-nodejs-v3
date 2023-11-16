import { VersionSetRule } from './VersionSetRule';


export class VersionSetProperty {
    public enable?: boolean;
    public rules?: Array<VersionSetRule>;
    public constructor() { 
    }
    public withEnable(enable: boolean): VersionSetProperty {
        this['enable'] = enable;
        return this;
    }
    public withRules(rules: Array<VersionSetRule>): VersionSetProperty {
        this['rules'] = rules;
        return this;
    }
}