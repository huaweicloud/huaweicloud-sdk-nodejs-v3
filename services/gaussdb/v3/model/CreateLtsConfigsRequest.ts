import { CreateLtsConfigs } from './CreateLtsConfigs';


export class CreateLtsConfigsRequest {
    private 'X-Language'?: string;
    public body?: CreateLtsConfigs;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateLtsConfigs): CreateLtsConfigsRequest {
        this['body'] = body;
        return this;
    }
}