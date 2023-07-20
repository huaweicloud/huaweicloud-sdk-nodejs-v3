import { SetQuotasRequestBody } from './SetQuotasRequestBody';


export class UpdateGaussMySqlQuotasRequest {
    private 'X-Language'?: string;
    public body?: SetQuotasRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): UpdateGaussMySqlQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetQuotasRequestBody): UpdateGaussMySqlQuotasRequest {
        this['body'] = body;
        return this;
    }
}