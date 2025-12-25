import { CreateServiceAgencyRequestBody } from './CreateServiceAgencyRequestBody';


export class CreateServiceAgencyRequest {
    private 'X-Language'?: string;
    public body?: CreateServiceAgencyRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateServiceAgencyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateServiceAgencyRequestBody): CreateServiceAgencyRequest {
        this['body'] = body;
        return this;
    }
}