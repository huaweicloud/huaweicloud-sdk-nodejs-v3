import { RiskSource } from './RiskSource';


export class PreCheckItemStatus {
    public name?: string;
    public kind?: string;
    public group?: string;
    public level?: string;
    public phase?: string;
    public message?: string;
    public riskSource?: RiskSource;
    public errorCodes?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): PreCheckItemStatus {
        this['name'] = name;
        return this;
    }
    public withKind(kind: string): PreCheckItemStatus {
        this['kind'] = kind;
        return this;
    }
    public withGroup(group: string): PreCheckItemStatus {
        this['group'] = group;
        return this;
    }
    public withLevel(level: string): PreCheckItemStatus {
        this['level'] = level;
        return this;
    }
    public withPhase(phase: string): PreCheckItemStatus {
        this['phase'] = phase;
        return this;
    }
    public withMessage(message: string): PreCheckItemStatus {
        this['message'] = message;
        return this;
    }
    public withRiskSource(riskSource: RiskSource): PreCheckItemStatus {
        this['riskSource'] = riskSource;
        return this;
    }
    public withErrorCodes(errorCodes: Array<string>): PreCheckItemStatus {
        this['errorCodes'] = errorCodes;
        return this;
    }
}