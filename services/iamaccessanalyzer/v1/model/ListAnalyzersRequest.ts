import { AnalyzerType } from './AnalyzerType';


export class ListAnalyzersRequest {
    public limit?: number;
    public marker?: string;
    public type?: AnalyzerType;
    public constructor() { 
    }
    public withLimit(limit: number): ListAnalyzersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAnalyzersRequest {
        this['marker'] = marker;
        return this;
    }
    public withType(type: AnalyzerType): ListAnalyzersRequest {
        this['type'] = type;
        return this;
    }
}