
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppResponse extends SdkResponse {
    private 'app_id'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): CreateAppResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}