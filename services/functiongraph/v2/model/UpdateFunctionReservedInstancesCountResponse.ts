import { TacticsConfig } from './TacticsConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFunctionReservedInstancesCountResponse extends SdkResponse {
    public count?: number;
    private 'idle_mode'?: boolean | undefined;
    private 'tactics_config'?: TacticsConfig | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): UpdateFunctionReservedInstancesCountResponse {
        this['count'] = count;
        return this;
    }
    public withIdleMode(idleMode: boolean): UpdateFunctionReservedInstancesCountResponse {
        this['idle_mode'] = idleMode;
        return this;
    }
    public set idleMode(idleMode: boolean | undefined) {
        this['idle_mode'] = idleMode;
    }
    public get idleMode() {
        return this['idle_mode'];
    }
    public withTacticsConfig(tacticsConfig: TacticsConfig): UpdateFunctionReservedInstancesCountResponse {
        this['tactics_config'] = tacticsConfig;
        return this;
    }
    public set tacticsConfig(tacticsConfig: TacticsConfig | undefined) {
        this['tactics_config'] = tacticsConfig;
    }
    public get tacticsConfig() {
        return this['tactics_config'];
    }
}