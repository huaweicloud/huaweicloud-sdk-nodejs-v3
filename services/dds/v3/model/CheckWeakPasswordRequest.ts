import { WeakPasswordCheckRequestBody } from './WeakPasswordCheckRequestBody';


export class CheckWeakPasswordRequest {
    private 'X-Language'?: string;
    public body?: WeakPasswordCheckRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckWeakPasswordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: WeakPasswordCheckRequestBody): CheckWeakPasswordRequest {
        this['body'] = body;
        return this;
    }
}