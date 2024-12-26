import { QueryDRInfoRequest } from './QueryDRInfoRequest';


export class ListDrInfosRequest {
    private 'X-Language'?: string;
    public body?: QueryDRInfoRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListDrInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryDRInfoRequest): ListDrInfosRequest {
        this['body'] = body;
        return this;
    }
}