
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDialogUrlResponse extends SdkResponse {
    public url?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): CreateDialogUrlResponse {
        this['url'] = url;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateDialogUrlResponse {
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