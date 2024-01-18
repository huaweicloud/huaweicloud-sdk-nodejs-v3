
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOnceCodeResponse extends SdkResponse {
    private 'once_code'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOnceCode(onceCode: string): CreateOnceCodeResponse {
        this['once_code'] = onceCode;
        return this;
    }
    public set onceCode(onceCode: string  | undefined) {
        this['once_code'] = onceCode;
    }
    public get onceCode(): string | undefined {
        return this['once_code'];
    }
    public withXRequestId(xRequestId: string): CreateOnceCodeResponse {
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