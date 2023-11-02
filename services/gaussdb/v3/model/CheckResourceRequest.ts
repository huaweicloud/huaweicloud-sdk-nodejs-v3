import { CheckResourceRequestBody } from './CheckResourceRequestBody';


export class CheckResourceRequest {
    private 'X-Language'?: string;
    public body?: CheckResourceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckResourceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CheckResourceRequestBody): CheckResourceRequest {
        this['body'] = body;
        return this;
    }
}