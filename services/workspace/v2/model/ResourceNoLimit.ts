import { SimpleResource } from './SimpleResource';


export class ResourceNoLimit {
    public type?: string;
    public quota?: number;
    public used?: number;
    public unit?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceNoLimit {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): ResourceNoLimit {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ResourceNoLimit {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): ResourceNoLimit {
        this['unit'] = unit;
        return this;
    }
}