import { MultipleDeleteInsReq } from './MultipleDeleteInsReq';


export class BatchDeleteInstanceRequest {
    private 'X-Language'?: string;
    public body?: MultipleDeleteInsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchDeleteInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: MultipleDeleteInsReq): BatchDeleteInstanceRequest {
        this['body'] = body;
        return this;
    }
}