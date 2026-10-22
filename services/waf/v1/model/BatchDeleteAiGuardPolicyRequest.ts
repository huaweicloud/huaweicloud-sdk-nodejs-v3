import { BatchDeleteAiGuardPolicyRequestBody } from './BatchDeleteAiGuardPolicyRequestBody';


export class BatchDeleteAiGuardPolicyRequest {
    private 'Content-Type'?: string;
    public body?: BatchDeleteAiGuardPolicyRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteAiGuardPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchDeleteAiGuardPolicyRequestBody): BatchDeleteAiGuardPolicyRequest {
        this['body'] = body;
        return this;
    }
}