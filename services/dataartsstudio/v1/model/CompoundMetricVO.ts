import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { MetricMonitorVO } from './MetricMonitorVO';


export class CompoundMetricVO {
    public id?: string;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'dimension_group'?: string;
    private 'group_name'?: string;
    private 'group_code'?: string;
    private 'compound_type'?: CompoundMetricVOCompoundTypeEnum | string;
    private 'comparison_type'?: CompoundMetricVOComparisonTypeEnum | string;
    private 'metric_ids'?: Array<string>;
    private 'metric_names'?: Array<string>;
    private 'compound_metric_ids'?: Array<string>;
    private 'compound_metric_names'?: Array<string>;
    private 'cal_fn_ids'?: Array<string>;
    private 'cal_exp'?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    private 'data_type'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public status?: BizStatusEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    public monitor?: MetricMonitorVO;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'summary_table_id'?: string;
    public constructor(nameEn?: string, nameCh?: string, dimensionGroup?: string, compoundType?: string, l3Id?: string, dataType?: string) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['dimension_group'] = dimensionGroup;
        this['compound_type'] = compoundType;
        this['l3_id'] = l3Id;
        this['data_type'] = dataType;
    }
    public withId(id: string): CompoundMetricVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): CompoundMetricVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): CompoundMetricVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): CompoundMetricVO {
        this['description'] = description;
        return this;
    }
    public withDimensionGroup(dimensionGroup: string): CompoundMetricVO {
        this['dimension_group'] = dimensionGroup;
        return this;
    }
    public set dimensionGroup(dimensionGroup: string  | undefined) {
        this['dimension_group'] = dimensionGroup;
    }
    public get dimensionGroup(): string | undefined {
        return this['dimension_group'];
    }
    public withGroupName(groupName: string): CompoundMetricVO {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupCode(groupCode: string): CompoundMetricVO {
        this['group_code'] = groupCode;
        return this;
    }
    public set groupCode(groupCode: string  | undefined) {
        this['group_code'] = groupCode;
    }
    public get groupCode(): string | undefined {
        return this['group_code'];
    }
    public withCompoundType(compoundType: CompoundMetricVOCompoundTypeEnum | string): CompoundMetricVO {
        this['compound_type'] = compoundType;
        return this;
    }
    public set compoundType(compoundType: CompoundMetricVOCompoundTypeEnum | string  | undefined) {
        this['compound_type'] = compoundType;
    }
    public get compoundType(): CompoundMetricVOCompoundTypeEnum | string | undefined {
        return this['compound_type'];
    }
    public withComparisonType(comparisonType: CompoundMetricVOComparisonTypeEnum | string): CompoundMetricVO {
        this['comparison_type'] = comparisonType;
        return this;
    }
    public set comparisonType(comparisonType: CompoundMetricVOComparisonTypeEnum | string  | undefined) {
        this['comparison_type'] = comparisonType;
    }
    public get comparisonType(): CompoundMetricVOComparisonTypeEnum | string | undefined {
        return this['comparison_type'];
    }
    public withMetricIds(metricIds: Array<string>): CompoundMetricVO {
        this['metric_ids'] = metricIds;
        return this;
    }
    public set metricIds(metricIds: Array<string>  | undefined) {
        this['metric_ids'] = metricIds;
    }
    public get metricIds(): Array<string> | undefined {
        return this['metric_ids'];
    }
    public withMetricNames(metricNames: Array<string>): CompoundMetricVO {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withCompoundMetricIds(compoundMetricIds: Array<string>): CompoundMetricVO {
        this['compound_metric_ids'] = compoundMetricIds;
        return this;
    }
    public set compoundMetricIds(compoundMetricIds: Array<string>  | undefined) {
        this['compound_metric_ids'] = compoundMetricIds;
    }
    public get compoundMetricIds(): Array<string> | undefined {
        return this['compound_metric_ids'];
    }
    public withCompoundMetricNames(compoundMetricNames: Array<string>): CompoundMetricVO {
        this['compound_metric_names'] = compoundMetricNames;
        return this;
    }
    public set compoundMetricNames(compoundMetricNames: Array<string>  | undefined) {
        this['compound_metric_names'] = compoundMetricNames;
    }
    public get compoundMetricNames(): Array<string> | undefined {
        return this['compound_metric_names'];
    }
    public withCalFnIds(calFnIds: Array<string>): CompoundMetricVO {
        this['cal_fn_ids'] = calFnIds;
        return this;
    }
    public set calFnIds(calFnIds: Array<string>  | undefined) {
        this['cal_fn_ids'] = calFnIds;
    }
    public get calFnIds(): Array<string> | undefined {
        return this['cal_fn_ids'];
    }
    public withCalExp(calExp: string): CompoundMetricVO {
        this['cal_exp'] = calExp;
        return this;
    }
    public set calExp(calExp: string  | undefined) {
        this['cal_exp'] = calExp;
    }
    public get calExp(): string | undefined {
        return this['cal_exp'];
    }
    public withL1Id(l1Id: string): CompoundMetricVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): CompoundMetricVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): CompoundMetricVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withDataType(dataType: string): CompoundMetricVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withCreateBy(createBy: string): CompoundMetricVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): CompoundMetricVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withStatus(status: BizStatusEnum): CompoundMetricVO {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): CompoundMetricVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): CompoundMetricVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): CompoundMetricVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): CompoundMetricVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withMonitor(monitor: MetricMonitorVO): CompoundMetricVO {
        this['monitor'] = monitor;
        return this;
    }
    public withL1(l1: string): CompoundMetricVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): CompoundMetricVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): CompoundMetricVO {
        this['l3'] = l3;
        return this;
    }
    public withSummaryTableId(summaryTableId: string): CompoundMetricVO {
        this['summary_table_id'] = summaryTableId;
        return this;
    }
    public set summaryTableId(summaryTableId: string  | undefined) {
        this['summary_table_id'] = summaryTableId;
    }
    public get summaryTableId(): string | undefined {
        return this['summary_table_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CompoundMetricVOCompoundTypeEnum {
    EXPRESSION = 'EXPRESSION',
    PERIODICITY_VALUED_COMPARISON = 'PERIODICITY_VALUED_COMPARISON',
    INTERVAL_VALUED_COMPARISON = 'INTERVAL_VALUED_COMPARISON'
}
/**
    * @export
    * @enum {string}
    */
export enum CompoundMetricVOComparisonTypeEnum {
    YEAR_TO_YEAR = 'YEAR_TO_YEAR',
    MONTH_TO_MONTH = 'MONTH_TO_MONTH',
    WEEK_TO_WEEK = 'WEEK_TO_WEEK'
}
