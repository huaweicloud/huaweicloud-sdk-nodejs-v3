import { TacticsConfig } from './TacticsConfig';


export class UpdateFunctionReservedInstancesCountRequestBody {
    public count: number;
    private 'idle_mode'?: boolean | undefined;
    private 'tactics_config'?: TacticsConfig | undefined;
    public constructor(count?: any) { 
        this['count'] = count;
    }
    public withCount(count: number): UpdateFunctionReservedInstancesCountRequestBody {
        this['count'] = count;
        return this;
    }
    public withIdleMode(idleMode: boolean): UpdateFunctionReservedInstancesCountRequestBody {
        this['idle_mode'] = idleMode;
        return this;
    }
    public set idleMode(idleMode: boolean | undefined) {
        this['idle_mode'] = idleMode;
    }
    public get idleMode() {
        return this['idle_mode'];
    }
    public withTacticsConfig(tacticsConfig: TacticsConfig): UpdateFunctionReservedInstancesCountRequestBody {
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