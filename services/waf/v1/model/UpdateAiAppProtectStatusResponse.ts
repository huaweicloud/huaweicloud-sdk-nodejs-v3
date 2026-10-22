
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAiAppProtectStatusResponse extends SdkResponse {
    public appId?: string;
    private 'protect_status'?: number;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateAiAppProtectStatusResponse {
        this['appId'] = appId;
        return this;
    }
    public withProtectStatus(protectStatus: number): UpdateAiAppProtectStatusResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
}