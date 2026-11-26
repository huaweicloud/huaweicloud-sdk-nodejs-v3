import { PolicyEngineType } from './PolicyEngineType';


export class ListPolicyEnginesRequest {
    public type?: PolicyEngineType;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withType(type: PolicyEngineType): ListPolicyEnginesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListPolicyEnginesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyEnginesRequest {
        this['marker'] = marker;
        return this;
    }
}