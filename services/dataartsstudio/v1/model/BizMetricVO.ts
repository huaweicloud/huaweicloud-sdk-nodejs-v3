import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizTypeEnum } from './BizTypeEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { SyncStatusEnum } from './SyncStatusEnum';


export class BizMetricVO {
    public id?: string;
    public name?: string;
    public code?: string;
    private 'name_alias'?: string;
    private 'biz_type'?: BizTypeEnum;
    public status?: BizStatusEnum;
    private 'biz_catalog_id'?: string;
    private 'biz_catalog_path'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'data_origin'?: string;
    public unit?: string;
    private 'time_filters'?: string;
    public dimensions?: string;
    private 'general_filters'?: string;
    private 'interval_type'?: BizMetricVOIntervalTypeEnum | string;
    private 'apply_scenario'?: string;
    private 'technical_metric'?: string;
    private 'technical_metric_name'?: string;
    private 'technical_metric_type'?: BizTypeEnum;
    public measure?: string;
    public owner?: string;
    private 'owner_department'?: string;
    public destination?: string;
    public guid?: string;
    public definition?: string;
    public expression?: string;
    public remark?: string;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'biz_metric'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(name?: string, bizCatalogId?: string, timeFilters?: string, intervalType?: string, owner?: string, ownerDepartment?: string, destination?: string, definition?: string, expression?: string) { 
        this['name'] = name;
        this['biz_catalog_id'] = bizCatalogId;
        this['time_filters'] = timeFilters;
        this['interval_type'] = intervalType;
        this['owner'] = owner;
        this['owner_department'] = ownerDepartment;
        this['destination'] = destination;
        this['definition'] = definition;
        this['expression'] = expression;
    }
    public withId(id: string): BizMetricVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BizMetricVO {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): BizMetricVO {
        this['code'] = code;
        return this;
    }
    public withNameAlias(nameAlias: string): BizMetricVO {
        this['name_alias'] = nameAlias;
        return this;
    }
    public set nameAlias(nameAlias: string  | undefined) {
        this['name_alias'] = nameAlias;
    }
    public get nameAlias(): string | undefined {
        return this['name_alias'];
    }
    public withBizType(bizType: BizTypeEnum): BizMetricVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withStatus(status: BizStatusEnum): BizMetricVO {
        this['status'] = status;
        return this;
    }
    public withBizCatalogId(bizCatalogId: string): BizMetricVO {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withBizCatalogPath(bizCatalogPath: string): BizMetricVO {
        this['biz_catalog_path'] = bizCatalogPath;
        return this;
    }
    public set bizCatalogPath(bizCatalogPath: string  | undefined) {
        this['biz_catalog_path'] = bizCatalogPath;
    }
    public get bizCatalogPath(): string | undefined {
        return this['biz_catalog_path'];
    }
    public withCreateBy(createBy: string): BizMetricVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): BizMetricVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withDataOrigin(dataOrigin: string): BizMetricVO {
        this['data_origin'] = dataOrigin;
        return this;
    }
    public set dataOrigin(dataOrigin: string  | undefined) {
        this['data_origin'] = dataOrigin;
    }
    public get dataOrigin(): string | undefined {
        return this['data_origin'];
    }
    public withUnit(unit: string): BizMetricVO {
        this['unit'] = unit;
        return this;
    }
    public withTimeFilters(timeFilters: string): BizMetricVO {
        this['time_filters'] = timeFilters;
        return this;
    }
    public set timeFilters(timeFilters: string  | undefined) {
        this['time_filters'] = timeFilters;
    }
    public get timeFilters(): string | undefined {
        return this['time_filters'];
    }
    public withDimensions(dimensions: string): BizMetricVO {
        this['dimensions'] = dimensions;
        return this;
    }
    public withGeneralFilters(generalFilters: string): BizMetricVO {
        this['general_filters'] = generalFilters;
        return this;
    }
    public set generalFilters(generalFilters: string  | undefined) {
        this['general_filters'] = generalFilters;
    }
    public get generalFilters(): string | undefined {
        return this['general_filters'];
    }
    public withIntervalType(intervalType: BizMetricVOIntervalTypeEnum | string): BizMetricVO {
        this['interval_type'] = intervalType;
        return this;
    }
    public set intervalType(intervalType: BizMetricVOIntervalTypeEnum | string  | undefined) {
        this['interval_type'] = intervalType;
    }
    public get intervalType(): BizMetricVOIntervalTypeEnum | string | undefined {
        return this['interval_type'];
    }
    public withApplyScenario(applyScenario: string): BizMetricVO {
        this['apply_scenario'] = applyScenario;
        return this;
    }
    public set applyScenario(applyScenario: string  | undefined) {
        this['apply_scenario'] = applyScenario;
    }
    public get applyScenario(): string | undefined {
        return this['apply_scenario'];
    }
    public withTechnicalMetric(technicalMetric: string): BizMetricVO {
        this['technical_metric'] = technicalMetric;
        return this;
    }
    public set technicalMetric(technicalMetric: string  | undefined) {
        this['technical_metric'] = technicalMetric;
    }
    public get technicalMetric(): string | undefined {
        return this['technical_metric'];
    }
    public withTechnicalMetricName(technicalMetricName: string): BizMetricVO {
        this['technical_metric_name'] = technicalMetricName;
        return this;
    }
    public set technicalMetricName(technicalMetricName: string  | undefined) {
        this['technical_metric_name'] = technicalMetricName;
    }
    public get technicalMetricName(): string | undefined {
        return this['technical_metric_name'];
    }
    public withTechnicalMetricType(technicalMetricType: BizTypeEnum): BizMetricVO {
        this['technical_metric_type'] = technicalMetricType;
        return this;
    }
    public set technicalMetricType(technicalMetricType: BizTypeEnum  | undefined) {
        this['technical_metric_type'] = technicalMetricType;
    }
    public get technicalMetricType(): BizTypeEnum | undefined {
        return this['technical_metric_type'];
    }
    public withMeasure(measure: string): BizMetricVO {
        this['measure'] = measure;
        return this;
    }
    public withOwner(owner: string): BizMetricVO {
        this['owner'] = owner;
        return this;
    }
    public withOwnerDepartment(ownerDepartment: string): BizMetricVO {
        this['owner_department'] = ownerDepartment;
        return this;
    }
    public set ownerDepartment(ownerDepartment: string  | undefined) {
        this['owner_department'] = ownerDepartment;
    }
    public get ownerDepartment(): string | undefined {
        return this['owner_department'];
    }
    public withDestination(destination: string): BizMetricVO {
        this['destination'] = destination;
        return this;
    }
    public withGuid(guid: string): BizMetricVO {
        this['guid'] = guid;
        return this;
    }
    public withDefinition(definition: string): BizMetricVO {
        this['definition'] = definition;
        return this;
    }
    public withExpression(expression: string): BizMetricVO {
        this['expression'] = expression;
        return this;
    }
    public withRemark(remark: string): BizMetricVO {
        this['remark'] = remark;
        return this;
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): BizMetricVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): BizMetricVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withCreateTime(createTime: Date): BizMetricVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BizMetricVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withL1(l1: string): BizMetricVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): BizMetricVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): BizMetricVO {
        this['l3'] = l3;
        return this;
    }
    public withBizMetric(bizMetric: SyncStatusEnum): BizMetricVO {
        this['biz_metric'] = bizMetric;
        return this;
    }
    public set bizMetric(bizMetric: SyncStatusEnum  | undefined) {
        this['biz_metric'] = bizMetric;
    }
    public get bizMetric(): SyncStatusEnum | undefined {
        return this['biz_metric'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): BizMetricVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): BizMetricVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BizMetricVOIntervalTypeEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    REAL_TIME = 'REAL_TIME',
    HALF_HOUR = 'HALF_HOUR',
    QUART = 'QUART',
    DOUBLE_WEEK = 'DOUBLE_WEEK',
    HALF_YEAR = 'HALF_YEAR',
    HALF_DAY = 'HALF_DAY'
}
