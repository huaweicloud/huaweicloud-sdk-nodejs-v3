import { TacticsConfig } from './TacticsConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReservedInstanceConfigsResponse extends SdkResponse {
    private 'function_urn'?: string | undefined;
    private 'qualifier_type'?: string | undefined;
    private 'qualifier_name'?: string | undefined;
    private 'min_count'?: number | undefined;
    private 'idle_mode'?: boolean | undefined;
    private 'tactics_config'?: TacticsConfig | undefined;
    public constructor() { 
        super();
    }
    public withFunctionUrn(functionUrn: string): ListReservedInstanceConfigsResponse {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withQualifierType(qualifierType: string): ListReservedInstanceConfigsResponse {
        this['qualifier_type'] = qualifierType;
        return this;
    }
    public set qualifierType(qualifierType: string | undefined) {
        this['qualifier_type'] = qualifierType;
    }
    public get qualifierType() {
        return this['qualifier_type'];
    }
    public withQualifierName(qualifierName: string): ListReservedInstanceConfigsResponse {
        this['qualifier_name'] = qualifierName;
        return this;
    }
    public set qualifierName(qualifierName: string | undefined) {
        this['qualifier_name'] = qualifierName;
    }
    public get qualifierName() {
        return this['qualifier_name'];
    }
    public withMinCount(minCount: number): ListReservedInstanceConfigsResponse {
        this['min_count'] = minCount;
        return this;
    }
    public set minCount(minCount: number | undefined) {
        this['min_count'] = minCount;
    }
    public get minCount() {
        return this['min_count'];
    }
    public withIdleMode(idleMode: boolean): ListReservedInstanceConfigsResponse {
        this['idle_mode'] = idleMode;
        return this;
    }
    public set idleMode(idleMode: boolean | undefined) {
        this['idle_mode'] = idleMode;
    }
    public get idleMode() {
        return this['idle_mode'];
    }
    public withTacticsConfig(tacticsConfig: TacticsConfig): ListReservedInstanceConfigsResponse {
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