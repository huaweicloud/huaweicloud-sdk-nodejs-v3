import { PlaybookVersionInfo } from './PlaybookVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePlaybookVersionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: PlaybookVersionInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdatePlaybookVersionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdatePlaybookVersionResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: PlaybookVersionInfo): UpdatePlaybookVersionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdatePlaybookVersionResponse {
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