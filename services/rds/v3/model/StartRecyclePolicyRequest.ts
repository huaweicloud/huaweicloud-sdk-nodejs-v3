import { RecyclePolicyRequestBody } from './RecyclePolicyRequestBody';


export class StartRecyclePolicyRequest {
    private 'X-Language'?: string;
    public body?: RecyclePolicyRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): StartRecyclePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RecyclePolicyRequestBody): StartRecyclePolicyRequest {
        this['body'] = body;
        return this;
    }
}