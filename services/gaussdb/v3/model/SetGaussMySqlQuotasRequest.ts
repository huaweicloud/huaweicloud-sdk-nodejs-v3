import { SetQuotasRequestBody } from './SetQuotasRequestBody';


export class SetGaussMySqlQuotasRequest {
    private 'X-Language'?: string;
    public body?: SetQuotasRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SetGaussMySqlQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetQuotasRequestBody): SetGaussMySqlQuotasRequest {
        this['body'] = body;
        return this;
    }
}