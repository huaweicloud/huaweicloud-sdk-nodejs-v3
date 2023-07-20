import { OpenGaussInstanceRequestBody } from './OpenGaussInstanceRequestBody';


export class CreateDbInstanceRequest {
    private 'X-Language'?: string;
    public body?: OpenGaussInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateDbInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OpenGaussInstanceRequestBody): CreateDbInstanceRequest {
        this['body'] = body;
        return this;
    }
}