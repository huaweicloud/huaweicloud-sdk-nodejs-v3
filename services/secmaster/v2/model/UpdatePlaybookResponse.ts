import { PlaybookInfo } from './PlaybookInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePlaybookResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: PlaybookInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdatePlaybookResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdatePlaybookResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: PlaybookInfo): UpdatePlaybookResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdatePlaybookResponse {
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