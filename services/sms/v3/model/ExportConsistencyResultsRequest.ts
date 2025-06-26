import { BatchGetConsistencyResultReq } from './BatchGetConsistencyResultReq';


export class ExportConsistencyResultsRequest {
    private 'X-Language'?: string;
    public body?: BatchGetConsistencyResultReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ExportConsistencyResultsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchGetConsistencyResultReq): ExportConsistencyResultsRequest {
        this['body'] = body;
        return this;
    }
}