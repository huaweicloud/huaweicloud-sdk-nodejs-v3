
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKnowledgeIntentResponse extends SdkResponse {
    private 'intent_id'?: string;
    public identify?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withIntentId(intentId: string): CreateKnowledgeIntentResponse {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withIdentify(identify: string): CreateKnowledgeIntentResponse {
        this['identify'] = identify;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateKnowledgeIntentResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}