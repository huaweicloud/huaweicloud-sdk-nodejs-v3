import { RestoreInstanceRequestBody } from './RestoreInstanceRequestBody';


export class RestoreInstanceRequest {
    private 'X-Language'?: string;
    public body?: RestoreInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): RestoreInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RestoreInstanceRequestBody): RestoreInstanceRequest {
        this['body'] = body;
        return this;
    }
}