import { ApplyObjectInfo } from './ApplyObjectInfo';


export class UpdateTenantUpgradeStrategyRequestBody {
    private 'strategy_name'?: string;
    private 'is_force_upgrade'?: number;
    private 'min_version'?: string;
    private 'target_version'?: string;
    private 'strategy_desc'?: string;
    private 'strategy_priority'?: number;
    public status?: number;
    private 'apply_objects'?: Array<ApplyObjectInfo>;
    public constructor() { 
    }
    public withStrategyName(strategyName: string): UpdateTenantUpgradeStrategyRequestBody {
        this['strategy_name'] = strategyName;
        return this;
    }
    public set strategyName(strategyName: string  | undefined) {
        this['strategy_name'] = strategyName;
    }
    public get strategyName(): string | undefined {
        return this['strategy_name'];
    }
    public withIsForceUpgrade(isForceUpgrade: number): UpdateTenantUpgradeStrategyRequestBody {
        this['is_force_upgrade'] = isForceUpgrade;
        return this;
    }
    public set isForceUpgrade(isForceUpgrade: number  | undefined) {
        this['is_force_upgrade'] = isForceUpgrade;
    }
    public get isForceUpgrade(): number | undefined {
        return this['is_force_upgrade'];
    }
    public withMinVersion(minVersion: string): UpdateTenantUpgradeStrategyRequestBody {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withTargetVersion(targetVersion: string): UpdateTenantUpgradeStrategyRequestBody {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withStrategyDesc(strategyDesc: string): UpdateTenantUpgradeStrategyRequestBody {
        this['strategy_desc'] = strategyDesc;
        return this;
    }
    public set strategyDesc(strategyDesc: string  | undefined) {
        this['strategy_desc'] = strategyDesc;
    }
    public get strategyDesc(): string | undefined {
        return this['strategy_desc'];
    }
    public withStrategyPriority(strategyPriority: number): UpdateTenantUpgradeStrategyRequestBody {
        this['strategy_priority'] = strategyPriority;
        return this;
    }
    public set strategyPriority(strategyPriority: number  | undefined) {
        this['strategy_priority'] = strategyPriority;
    }
    public get strategyPriority(): number | undefined {
        return this['strategy_priority'];
    }
    public withStatus(status: number): UpdateTenantUpgradeStrategyRequestBody {
        this['status'] = status;
        return this;
    }
    public withApplyObjects(applyObjects: Array<ApplyObjectInfo>): UpdateTenantUpgradeStrategyRequestBody {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<ApplyObjectInfo>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<ApplyObjectInfo> | undefined {
        return this['apply_objects'];
    }
}