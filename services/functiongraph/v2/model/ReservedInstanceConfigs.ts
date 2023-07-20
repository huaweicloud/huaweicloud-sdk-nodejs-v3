import { TacticsConfig } from './TacticsConfig';


export class ReservedInstanceConfigs {
    private 'function_urn'?: string;
    private 'qualifier_type'?: string;
    private 'qualifier_name'?: string;
    private 'min_count'?: number;
    private 'idle_mode'?: boolean;
    private 'tactics_config'?: TacticsConfig;
    public constructor() { 
    }
    public withFunctionUrn(functionUrn: string): ReservedInstanceConfigs {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withQualifierType(qualifierType: string): ReservedInstanceConfigs {
        this['qualifier_type'] = qualifierType;
        return this;
    }
    public set qualifierType(qualifierType: string  | undefined) {
        this['qualifier_type'] = qualifierType;
    }
    public get qualifierType(): string | undefined {
        return this['qualifier_type'];
    }
    public withQualifierName(qualifierName: string): ReservedInstanceConfigs {
        this['qualifier_name'] = qualifierName;
        return this;
    }
    public set qualifierName(qualifierName: string  | undefined) {
        this['qualifier_name'] = qualifierName;
    }
    public get qualifierName(): string | undefined {
        return this['qualifier_name'];
    }
    public withMinCount(minCount: number): ReservedInstanceConfigs {
        this['min_count'] = minCount;
        return this;
    }
    public set minCount(minCount: number  | undefined) {
        this['min_count'] = minCount;
    }
    public get minCount(): number | undefined {
        return this['min_count'];
    }
    public withIdleMode(idleMode: boolean): ReservedInstanceConfigs {
        this['idle_mode'] = idleMode;
        return this;
    }
    public set idleMode(idleMode: boolean  | undefined) {
        this['idle_mode'] = idleMode;
    }
    public get idleMode(): boolean | undefined {
        return this['idle_mode'];
    }
    public withTacticsConfig(tacticsConfig: TacticsConfig): ReservedInstanceConfigs {
        this['tactics_config'] = tacticsConfig;
        return this;
    }
    public set tacticsConfig(tacticsConfig: TacticsConfig  | undefined) {
        this['tactics_config'] = tacticsConfig;
    }
    public get tacticsConfig(): TacticsConfig | undefined {
        return this['tactics_config'];
    }
}