import { OpenGaussInstanceRequest } from './OpenGaussInstanceRequest';


export class CreateInstanceRequest {
    private 'X-Language'?: string;
    public body?: OpenGaussInstanceRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OpenGaussInstanceRequest): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}