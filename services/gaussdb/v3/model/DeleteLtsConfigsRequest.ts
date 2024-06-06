import { DeleteLtsConfigsRequestBody } from './DeleteLtsConfigsRequestBody';


export class DeleteLtsConfigsRequest {
    private 'X-Language'?: string;
    public body?: DeleteLtsConfigsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): DeleteLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteLtsConfigsRequestBody): DeleteLtsConfigsRequest {
        this['body'] = body;
        return this;
    }
}