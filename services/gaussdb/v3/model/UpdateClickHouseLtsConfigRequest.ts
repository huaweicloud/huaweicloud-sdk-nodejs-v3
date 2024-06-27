import { CreateChLtsConfigRequestBody } from './CreateChLtsConfigRequestBody';


export class UpdateClickHouseLtsConfigRequest {
    private 'X-Language'?: string;
    public body?: CreateChLtsConfigRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): UpdateClickHouseLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateChLtsConfigRequestBody): UpdateClickHouseLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}