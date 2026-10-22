import { CreateAiGuardPolicyRequestBody } from './CreateAiGuardPolicyRequestBody';


export class CreateAiGuardPolicyRequest {
    private 'Content-Type'?: string;
    public body?: CreateAiGuardPolicyRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAiGuardPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateAiGuardPolicyRequestBody): CreateAiGuardPolicyRequest {
        this['body'] = body;
        return this;
    }
}