import { ApplyObjectInfo } from './ApplyObjectInfo';


export class CreateTenantUpgradeStrategyRequestBody {
    private 'strategy_type'?: number;
    private 'strategy_name'?: string;
    private 'is_force_upgrade'?: number;
    private 'min_version'?: string;
    private 'target_version'?: string;
    private 'strategy_desc'?: string;
    private 'strategy_priority'?: number;
    public status?: number;
    private 'apply_objects'?: Array<ApplyObjectInfo>;
    public constructor(strategyType?: number, strategyName?: string, isForceUpgrade?: number, minVersion?: string, targetVersion?: string) { 
        this['strategy_type'] = strategyType;
        this['strategy_name'] = strategyName;
        this['is_force_upgrade'] = isForceUpgrade;
        this['min_version'] = minVersion;
        this['target_version'] = targetVersion;
    }
    public withStrategyType(strategyType: number): CreateTenantUpgradeStrategyRequestBody {
        this['strategy_type'] = strategyType;
        return this;
    }
    public set strategyType(strategyType: number  | undefined) {
        this['strategy_type'] = strategyType;
    }
    public get strategyType(): number | undefined {
        return this['strategy_type'];
    }
    public withStrategyName(strategyName: string): CreateTenantUpgradeStrategyRequestBody {
        this['strategy_name'] = strategyName;
        return this;
    }
    public set strategyName(strategyName: string  | undefined) {
        this['strategy_name'] = strategyName;
    }
    public get strategyName(): string | undefined {
        return this['strategy_name'];
    }
    public withIsForceUpgrade(isForceUpgrade: number): CreateTenantUpgradeStrategyRequestBody {
        this['is_force_upgrade'] = isForceUpgrade;
        return this;
    }
    public set isForceUpgrade(isForceUpgrade: number  | undefined) {
        this['is_force_upgrade'] = isForceUpgrade;
    }
    public get isForceUpgrade(): number | undefined {
        return this['is_force_upgrade'];
    }
    public withMinVersion(minVersion: string): CreateTenantUpgradeStrategyRequestBody {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withTargetVersion(targetVersion: string): CreateTenantUpgradeStrategyRequestBody {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withStrategyDesc(strategyDesc: string): CreateTenantUpgradeStrategyRequestBody {
        this['strategy_desc'] = strategyDesc;
        return this;
    }
    public set strategyDesc(strategyDesc: string  | undefined) {
        this['strategy_desc'] = strategyDesc;
    }
    public get strategyDesc(): string | undefined {
        return this['strategy_desc'];
    }
    public withStrategyPriority(strategyPriority: number): CreateTenantUpgradeStrategyRequestBody {
        this['strategy_priority'] = strategyPriority;
        return this;
    }
    public set strategyPriority(strategyPriority: number  | undefined) {
        this['strategy_priority'] = strategyPriority;
    }
    public get strategyPriority(): number | undefined {
        return this['strategy_priority'];
    }
    public withStatus(status: number): CreateTenantUpgradeStrategyRequestBody {
        this['status'] = status;
        return this;
    }
    public withApplyObjects(applyObjects: Array<ApplyObjectInfo>): CreateTenantUpgradeStrategyRequestBody {
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