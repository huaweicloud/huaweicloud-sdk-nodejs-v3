
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopMixJobResponse extends SdkResponse {
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): StopMixJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}