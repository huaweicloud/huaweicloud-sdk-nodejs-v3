import { SetRecyclePolicyRequestBody } from './SetRecyclePolicyRequestBody';


export class SetRecyclePolicyRequest {
    private 'X-Language'?: string;
    public body?: SetRecyclePolicyRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SetRecyclePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetRecyclePolicyRequestBody): SetRecyclePolicyRequest {
        this['body'] = body;
        return this;
    }
}