import { CreateConfigurationRequestBody } from './CreateConfigurationRequestBody';


export class CreateGaussMySqlConfigurationRequest {
    private 'X-Language'?: string;
    public body?: CreateConfigurationRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateGaussMySqlConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateConfigurationRequestBody): CreateGaussMySqlConfigurationRequest {
        this['body'] = body;
        return this;
    }
}