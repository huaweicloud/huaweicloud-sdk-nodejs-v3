import { DeleteDictionaryRequest } from './DeleteDictionaryRequest';


export class DeleteConfigurationDictionariesRequest {
    private 'X-Language'?: string;
    public body?: DeleteDictionaryRequest;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): DeleteConfigurationDictionariesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteDictionaryRequest): DeleteConfigurationDictionariesRequest {
        this['body'] = body;
        return this;
    }
}