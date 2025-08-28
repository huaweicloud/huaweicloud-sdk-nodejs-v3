
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInteractiveChatResponse extends SdkResponse {
    public message?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): CreateInteractiveChatResponse {
        this['message'] = message;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateInteractiveChatResponse {
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