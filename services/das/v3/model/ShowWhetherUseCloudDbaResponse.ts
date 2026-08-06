
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWhetherUseCloudDbaResponse extends SdkResponse {
    private 'can_use'?: boolean;
    public constructor() { 
        super();
    }
    public withCanUse(canUse: boolean): ShowWhetherUseCloudDbaResponse {
        this['can_use'] = canUse;
        return this;
    }
    public set canUse(canUse: boolean  | undefined) {
        this['can_use'] = canUse;
    }
    public get canUse(): boolean | undefined {
        return this['can_use'];
    }
}