
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyCertificateResponse extends SdkResponse {
    private 'request_info'?: string;
    public constructor() { 
        super();
    }
    public withRequestInfo(requestInfo: string): ApplyCertificateResponse {
        this['request_info'] = requestInfo;
        return this;
    }
    public set requestInfo(requestInfo: string  | undefined) {
        this['request_info'] = requestInfo;
    }
    public get requestInfo(): string | undefined {
        return this['request_info'];
    }
}