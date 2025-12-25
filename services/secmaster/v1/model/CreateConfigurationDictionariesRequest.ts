import { CreateDictionaryRequest } from './CreateDictionaryRequest';


export class CreateConfigurationDictionariesRequest {
    private 'X-Language'?: string;
    public body?: CreateDictionaryRequest;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): CreateConfigurationDictionariesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateDictionaryRequest): CreateConfigurationDictionariesRequest {
        this['body'] = body;
        return this;
    }
}