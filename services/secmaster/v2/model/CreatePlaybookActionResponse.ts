import { ActionInfo } from './ActionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePlaybookActionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: Array<ActionInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreatePlaybookActionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreatePlaybookActionResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: Array<ActionInfo>): CreatePlaybookActionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreatePlaybookActionResponse {
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