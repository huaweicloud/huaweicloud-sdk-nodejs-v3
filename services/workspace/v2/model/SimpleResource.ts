import { SimpleResourceNoUsed } from './SimpleResourceNoUsed';


export class SimpleResource {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): SimpleResource {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): SimpleResource {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): SimpleResource {
        this['used'] = used;
        return this;
    }
}