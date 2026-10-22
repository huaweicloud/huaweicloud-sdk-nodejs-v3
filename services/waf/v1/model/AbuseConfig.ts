import { AbuseScope } from './AbuseScope';
import { AbuseThreshold } from './AbuseThreshold';


export class AbuseConfig {
    public scope?: AbuseScope;
    public threshold?: AbuseThreshold;
    public constructor() { 
    }
    public withScope(scope: AbuseScope): AbuseConfig {
        this['scope'] = scope;
        return this;
    }
    public withThreshold(threshold: AbuseThreshold): AbuseConfig {
        this['threshold'] = threshold;
        return this;
    }
}