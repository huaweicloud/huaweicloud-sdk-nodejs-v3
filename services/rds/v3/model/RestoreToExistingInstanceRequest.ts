import { RestoreToExistingInstanceRequestBody } from './RestoreToExistingInstanceRequestBody';


export class RestoreToExistingInstanceRequest {
    private 'X-Language'?: string;
    public body?: RestoreToExistingInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): RestoreToExistingInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RestoreToExistingInstanceRequestBody): RestoreToExistingInstanceRequest {
        this['body'] = body;
        return this;
    }
}