import { DeleteChLtsConfigRequestBody } from './DeleteChLtsConfigRequestBody';


export class DeleteClickHouseLtsConfigRequest {
    private 'X-Language'?: string;
    public body?: DeleteChLtsConfigRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): DeleteClickHouseLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteChLtsConfigRequestBody): DeleteClickHouseLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}