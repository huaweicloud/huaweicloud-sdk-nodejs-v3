import { PlaybookVersionInfo } from './PlaybookVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyPlaybookVersionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: PlaybookVersionInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CopyPlaybookVersionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CopyPlaybookVersionResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: PlaybookVersionInfo): CopyPlaybookVersionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CopyPlaybookVersionResponse {
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