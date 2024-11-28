
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantDurationCfgResponse extends SdkResponse {
    private 'tenant_id'?: string;
    private 'basic_min'?: number;
    private 'basic_max'?: number;
    private 'basic_advice_value'?: number;
    private 'middle_min'?: number;
    private 'middle_max'?: number;
    private 'middle_advice_value'?: number;
    private 'advance_min'?: number;
    private 'advance_max'?: number;
    private 'advance_advice_value'?: number;
    private 'flexus_min'?: number;
    private 'flexus_max'?: number;
    private 'flexus_advice_value'?: number;
    private 'cmww_min'?: number;
    private 'cmww_max'?: number;
    private 'cmww_advice_value'?: number;
    private 'ljzn_min'?: number;
    private 'ljzn_max'?: number;
    private 'ljzn_advice_value'?: number;
    public constructor() { 
        super();
    }
    public withTenantId(tenantId: string): ShowTenantDurationCfgResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBasicMin(basicMin: number): ShowTenantDurationCfgResponse {
        this['basic_min'] = basicMin;
        return this;
    }
    public set basicMin(basicMin: number  | undefined) {
        this['basic_min'] = basicMin;
    }
    public get basicMin(): number | undefined {
        return this['basic_min'];
    }
    public withBasicMax(basicMax: number): ShowTenantDurationCfgResponse {
        this['basic_max'] = basicMax;
        return this;
    }
    public set basicMax(basicMax: number  | undefined) {
        this['basic_max'] = basicMax;
    }
    public get basicMax(): number | undefined {
        return this['basic_max'];
    }
    public withBasicAdviceValue(basicAdviceValue: number): ShowTenantDurationCfgResponse {
        this['basic_advice_value'] = basicAdviceValue;
        return this;
    }
    public set basicAdviceValue(basicAdviceValue: number  | undefined) {
        this['basic_advice_value'] = basicAdviceValue;
    }
    public get basicAdviceValue(): number | undefined {
        return this['basic_advice_value'];
    }
    public withMiddleMin(middleMin: number): ShowTenantDurationCfgResponse {
        this['middle_min'] = middleMin;
        return this;
    }
    public set middleMin(middleMin: number  | undefined) {
        this['middle_min'] = middleMin;
    }
    public get middleMin(): number | undefined {
        return this['middle_min'];
    }
    public withMiddleMax(middleMax: number): ShowTenantDurationCfgResponse {
        this['middle_max'] = middleMax;
        return this;
    }
    public set middleMax(middleMax: number  | undefined) {
        this['middle_max'] = middleMax;
    }
    public get middleMax(): number | undefined {
        return this['middle_max'];
    }
    public withMiddleAdviceValue(middleAdviceValue: number): ShowTenantDurationCfgResponse {
        this['middle_advice_value'] = middleAdviceValue;
        return this;
    }
    public set middleAdviceValue(middleAdviceValue: number  | undefined) {
        this['middle_advice_value'] = middleAdviceValue;
    }
    public get middleAdviceValue(): number | undefined {
        return this['middle_advice_value'];
    }
    public withAdvanceMin(advanceMin: number): ShowTenantDurationCfgResponse {
        this['advance_min'] = advanceMin;
        return this;
    }
    public set advanceMin(advanceMin: number  | undefined) {
        this['advance_min'] = advanceMin;
    }
    public get advanceMin(): number | undefined {
        return this['advance_min'];
    }
    public withAdvanceMax(advanceMax: number): ShowTenantDurationCfgResponse {
        this['advance_max'] = advanceMax;
        return this;
    }
    public set advanceMax(advanceMax: number  | undefined) {
        this['advance_max'] = advanceMax;
    }
    public get advanceMax(): number | undefined {
        return this['advance_max'];
    }
    public withAdvanceAdviceValue(advanceAdviceValue: number): ShowTenantDurationCfgResponse {
        this['advance_advice_value'] = advanceAdviceValue;
        return this;
    }
    public set advanceAdviceValue(advanceAdviceValue: number  | undefined) {
        this['advance_advice_value'] = advanceAdviceValue;
    }
    public get advanceAdviceValue(): number | undefined {
        return this['advance_advice_value'];
    }
    public withFlexusMin(flexusMin: number): ShowTenantDurationCfgResponse {
        this['flexus_min'] = flexusMin;
        return this;
    }
    public set flexusMin(flexusMin: number  | undefined) {
        this['flexus_min'] = flexusMin;
    }
    public get flexusMin(): number | undefined {
        return this['flexus_min'];
    }
    public withFlexusMax(flexusMax: number): ShowTenantDurationCfgResponse {
        this['flexus_max'] = flexusMax;
        return this;
    }
    public set flexusMax(flexusMax: number  | undefined) {
        this['flexus_max'] = flexusMax;
    }
    public get flexusMax(): number | undefined {
        return this['flexus_max'];
    }
    public withFlexusAdviceValue(flexusAdviceValue: number): ShowTenantDurationCfgResponse {
        this['flexus_advice_value'] = flexusAdviceValue;
        return this;
    }
    public set flexusAdviceValue(flexusAdviceValue: number  | undefined) {
        this['flexus_advice_value'] = flexusAdviceValue;
    }
    public get flexusAdviceValue(): number | undefined {
        return this['flexus_advice_value'];
    }
    public withCmwwMin(cmwwMin: number): ShowTenantDurationCfgResponse {
        this['cmww_min'] = cmwwMin;
        return this;
    }
    public set cmwwMin(cmwwMin: number  | undefined) {
        this['cmww_min'] = cmwwMin;
    }
    public get cmwwMin(): number | undefined {
        return this['cmww_min'];
    }
    public withCmwwMax(cmwwMax: number): ShowTenantDurationCfgResponse {
        this['cmww_max'] = cmwwMax;
        return this;
    }
    public set cmwwMax(cmwwMax: number  | undefined) {
        this['cmww_max'] = cmwwMax;
    }
    public get cmwwMax(): number | undefined {
        return this['cmww_max'];
    }
    public withCmwwAdviceValue(cmwwAdviceValue: number): ShowTenantDurationCfgResponse {
        this['cmww_advice_value'] = cmwwAdviceValue;
        return this;
    }
    public set cmwwAdviceValue(cmwwAdviceValue: number  | undefined) {
        this['cmww_advice_value'] = cmwwAdviceValue;
    }
    public get cmwwAdviceValue(): number | undefined {
        return this['cmww_advice_value'];
    }
    public withLjznMin(ljznMin: number): ShowTenantDurationCfgResponse {
        this['ljzn_min'] = ljznMin;
        return this;
    }
    public set ljznMin(ljznMin: number  | undefined) {
        this['ljzn_min'] = ljznMin;
    }
    public get ljznMin(): number | undefined {
        return this['ljzn_min'];
    }
    public withLjznMax(ljznMax: number): ShowTenantDurationCfgResponse {
        this['ljzn_max'] = ljznMax;
        return this;
    }
    public set ljznMax(ljznMax: number  | undefined) {
        this['ljzn_max'] = ljznMax;
    }
    public get ljznMax(): number | undefined {
        return this['ljzn_max'];
    }
    public withLjznAdviceValue(ljznAdviceValue: number): ShowTenantDurationCfgResponse {
        this['ljzn_advice_value'] = ljznAdviceValue;
        return this;
    }
    public set ljznAdviceValue(ljznAdviceValue: number  | undefined) {
        this['ljzn_advice_value'] = ljznAdviceValue;
    }
    public get ljznAdviceValue(): number | undefined {
        return this['ljzn_advice_value'];
    }
}