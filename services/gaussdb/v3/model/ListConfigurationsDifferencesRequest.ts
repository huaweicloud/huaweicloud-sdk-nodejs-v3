import { ListConfigurationsDifferencesRequestBody } from './ListConfigurationsDifferencesRequestBody';


export class ListConfigurationsDifferencesRequest {
    private 'X-Language'?: string;
    public body?: ListConfigurationsDifferencesRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListConfigurationsDifferencesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ListConfigurationsDifferencesRequestBody): ListConfigurationsDifferencesRequest {
        this['body'] = body;
        return this;
    }
}