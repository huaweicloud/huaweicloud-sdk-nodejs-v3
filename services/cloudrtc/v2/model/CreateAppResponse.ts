
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppResponse extends SdkResponse {
    private 'app_id'?: string | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): CreateAppResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withXRequestId(xRequestId: string): CreateAppResponse {
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