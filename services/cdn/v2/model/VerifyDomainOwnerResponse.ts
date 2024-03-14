
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class VerifyDomainOwnerResponse extends SdkResponse {
    public result?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): VerifyDomainOwnerResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): VerifyDomainOwnerResponse {
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