
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHdaUpgradeFlagResponse extends SdkResponse {
    private 'upgrade_flag'?: number;
    public constructor() { 
        super();
    }
    public withUpgradeFlag(upgradeFlag: number): ShowHdaUpgradeFlagResponse {
        this['upgrade_flag'] = upgradeFlag;
        return this;
    }
    public set upgradeFlag(upgradeFlag: number  | undefined) {
        this['upgrade_flag'] = upgradeFlag;
    }
    public get upgradeFlag(): number | undefined {
        return this['upgrade_flag'];
    }
}