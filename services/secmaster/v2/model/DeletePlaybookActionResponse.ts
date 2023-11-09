
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePlaybookActionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeletePlaybookActionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeletePlaybookActionResponse {
        this['message'] = message;
        return this;
    }
    public withXRequestId(xRequestId: string): DeletePlaybookActionResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}