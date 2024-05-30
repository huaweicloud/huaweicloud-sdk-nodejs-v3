import { BizTypeEnum } from './BizTypeEnum';
import { DimensionHierarchiesVO } from './DimensionHierarchiesVO';


export class DerivativeIndexDimensionVO {
    private 'group_id'?: string;
    public role?: string;
    private 'dimension_id'?: string;
    private 'hierarchies_id'?: string;
    public ordinal?: number;
    private 'group_name'?: string;
    private 'group_code'?: string;
    private 'biz_type'?: BizTypeEnum;
    public hierarchies?: Array<DimensionHierarchiesVO>;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    private 'dw_type'?: string;
    public id?: string;
    public constructor(groupId?: string, bizType?: BizTypeEnum) { 
        this['group_id'] = groupId;
        this['biz_type'] = bizType;
    }
    public withGroupId(groupId: string): DerivativeIndexDimensionVO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRole(role: string): DerivativeIndexDimensionVO {
        this['role'] = role;
        return this;
    }
    public withDimensionId(dimensionId: string): DerivativeIndexDimensionVO {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: string  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): string | undefined {
        return this['dimension_id'];
    }
    public withHierarchiesId(hierarchiesId: string): DerivativeIndexDimensionVO {
        this['hierarchies_id'] = hierarchiesId;
        return this;
    }
    public set hierarchiesId(hierarchiesId: string  | undefined) {
        this['hierarchies_id'] = hierarchiesId;
    }
    public get hierarchiesId(): string | undefined {
        return this['hierarchies_id'];
    }
    public withOrdinal(ordinal: number): DerivativeIndexDimensionVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withGroupName(groupName: string): DerivativeIndexDimensionVO {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupCode(groupCode: string): DerivativeIndexDimensionVO {
        this['group_code'] = groupCode;
        return this;
    }
    public set groupCode(groupCode: string  | undefined) {
        this['group_code'] = groupCode;
    }
    public get groupCode(): string | undefined {
        return this['group_code'];
    }
    public withBizType(bizType: BizTypeEnum): DerivativeIndexDimensionVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withHierarchies(hierarchies: Array<DimensionHierarchiesVO>): DerivativeIndexDimensionVO {
        this['hierarchies'] = hierarchies;
        return this;
    }
    public withL1(l1: string): DerivativeIndexDimensionVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): DerivativeIndexDimensionVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): DerivativeIndexDimensionVO {
        this['l3'] = l3;
        return this;
    }
    public withL1Id(l1Id: string): DerivativeIndexDimensionVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): DerivativeIndexDimensionVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): DerivativeIndexDimensionVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withDwType(dwType: string): DerivativeIndexDimensionVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withId(id: string): DerivativeIndexDimensionVO {
        this['id'] = id;
        return this;
    }
}