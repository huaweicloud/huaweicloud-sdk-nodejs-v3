import { ApprovalVO } from './ApprovalVO';
import { AtomicIndexVO } from './AtomicIndexVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { CommonConditionVO } from './CommonConditionVO';
import { DerivativeIndexDimensionVO } from './DerivativeIndexDimensionVO';
import { MetricMonitorVO } from './MetricMonitorVO';


export class DerivativeIndexVO {
    public id?: string;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'create_by'?: string;
    private 'data_type'?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    public status?: BizStatusEnum;
    private 'atomic_index_id'?: string;
    private 'time_condition_id'?: string;
    private 'time_field_id'?: string;
    private 'time_field_name'?: string;
    private 'common_conditions'?: Array<CommonConditionVO>;
    private 'dimension_groups'?: Array<DerivativeIndexDimensionVO>;
    public monitor?: MetricMonitorVO;
    private 'atomic_index'?: AtomicIndexVO;
    private 'time_condition_name'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'summary_table_id'?: string;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    public constructor(nameEn?: string, nameCh?: string, l3Id?: string, atomicIndexId?: string) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['l3_id'] = l3Id;
        this['atomic_index_id'] = atomicIndexId;
    }
    public withId(id: string): DerivativeIndexVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): DerivativeIndexVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): DerivativeIndexVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): DerivativeIndexVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): DerivativeIndexVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withDataType(dataType: string): DerivativeIndexVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withL1Id(l1Id: string): DerivativeIndexVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): DerivativeIndexVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): DerivativeIndexVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withStatus(status: BizStatusEnum): DerivativeIndexVO {
        this['status'] = status;
        return this;
    }
    public withAtomicIndexId(atomicIndexId: string): DerivativeIndexVO {
        this['atomic_index_id'] = atomicIndexId;
        return this;
    }
    public set atomicIndexId(atomicIndexId: string  | undefined) {
        this['atomic_index_id'] = atomicIndexId;
    }
    public get atomicIndexId(): string | undefined {
        return this['atomic_index_id'];
    }
    public withTimeConditionId(timeConditionId: string): DerivativeIndexVO {
        this['time_condition_id'] = timeConditionId;
        return this;
    }
    public set timeConditionId(timeConditionId: string  | undefined) {
        this['time_condition_id'] = timeConditionId;
    }
    public get timeConditionId(): string | undefined {
        return this['time_condition_id'];
    }
    public withTimeFieldId(timeFieldId: string): DerivativeIndexVO {
        this['time_field_id'] = timeFieldId;
        return this;
    }
    public set timeFieldId(timeFieldId: string  | undefined) {
        this['time_field_id'] = timeFieldId;
    }
    public get timeFieldId(): string | undefined {
        return this['time_field_id'];
    }
    public withTimeFieldName(timeFieldName: string): DerivativeIndexVO {
        this['time_field_name'] = timeFieldName;
        return this;
    }
    public set timeFieldName(timeFieldName: string  | undefined) {
        this['time_field_name'] = timeFieldName;
    }
    public get timeFieldName(): string | undefined {
        return this['time_field_name'];
    }
    public withCommonConditions(commonConditions: Array<CommonConditionVO>): DerivativeIndexVO {
        this['common_conditions'] = commonConditions;
        return this;
    }
    public set commonConditions(commonConditions: Array<CommonConditionVO>  | undefined) {
        this['common_conditions'] = commonConditions;
    }
    public get commonConditions(): Array<CommonConditionVO> | undefined {
        return this['common_conditions'];
    }
    public withDimensionGroups(dimensionGroups: Array<DerivativeIndexDimensionVO>): DerivativeIndexVO {
        this['dimension_groups'] = dimensionGroups;
        return this;
    }
    public set dimensionGroups(dimensionGroups: Array<DerivativeIndexDimensionVO>  | undefined) {
        this['dimension_groups'] = dimensionGroups;
    }
    public get dimensionGroups(): Array<DerivativeIndexDimensionVO> | undefined {
        return this['dimension_groups'];
    }
    public withMonitor(monitor: MetricMonitorVO): DerivativeIndexVO {
        this['monitor'] = monitor;
        return this;
    }
    public withAtomicIndex(atomicIndex: AtomicIndexVO): DerivativeIndexVO {
        this['atomic_index'] = atomicIndex;
        return this;
    }
    public set atomicIndex(atomicIndex: AtomicIndexVO  | undefined) {
        this['atomic_index'] = atomicIndex;
    }
    public get atomicIndex(): AtomicIndexVO | undefined {
        return this['atomic_index'];
    }
    public withTimeConditionName(timeConditionName: string): DerivativeIndexVO {
        this['time_condition_name'] = timeConditionName;
        return this;
    }
    public set timeConditionName(timeConditionName: string  | undefined) {
        this['time_condition_name'] = timeConditionName;
    }
    public get timeConditionName(): string | undefined {
        return this['time_condition_name'];
    }
    public withCreateTime(createTime: Date): DerivativeIndexVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DerivativeIndexVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withL1(l1: string): DerivativeIndexVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): DerivativeIndexVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): DerivativeIndexVO {
        this['l3'] = l3;
        return this;
    }
    public withSummaryTableId(summaryTableId: string): DerivativeIndexVO {
        this['summary_table_id'] = summaryTableId;
        return this;
    }
    public set summaryTableId(summaryTableId: string  | undefined) {
        this['summary_table_id'] = summaryTableId;
    }
    public get summaryTableId(): string | undefined {
        return this['summary_table_id'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): DerivativeIndexVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): DerivativeIndexVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
}