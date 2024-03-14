
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateBucketAccessResponse extends SdkResponse {
    public status?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): UpdatePrivateBucketAccessResponse {
        this['status'] = status;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdatePrivateBucketAccessResponse {
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