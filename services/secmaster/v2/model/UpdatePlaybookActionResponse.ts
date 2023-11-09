import { ActionInfo } from './ActionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePlaybookActionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ActionInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdatePlaybookActionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdatePlaybookActionResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ActionInfo): UpdatePlaybookActionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdatePlaybookActionResponse {
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