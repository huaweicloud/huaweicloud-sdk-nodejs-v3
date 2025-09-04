import { BatchUpgradeDatabasesRequestBody } from './BatchUpgradeDatabasesRequestBody';


export class BatchUpgradeDatabasesRequest {
    private 'X-Language'?: string;
    public body?: BatchUpgradeDatabasesRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchUpgradeDatabasesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchUpgradeDatabasesRequestBody): BatchUpgradeDatabasesRequest {
        this['body'] = body;
        return this;
    }
}