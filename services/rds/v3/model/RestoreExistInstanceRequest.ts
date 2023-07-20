import { RestoreExistingInstanceRequestBody } from './RestoreExistingInstanceRequestBody';


export class RestoreExistInstanceRequest {
    private 'X-Language'?: string;
    public body?: RestoreExistingInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): RestoreExistInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RestoreExistingInstanceRequestBody): RestoreExistInstanceRequest {
        this['body'] = body;
        return this;
    }
}