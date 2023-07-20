
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopIndividualStreamJobResponse extends SdkResponse {
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): StopIndividualStreamJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}