import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizTypeEnum } from './BizTypeEnum';
import { BizVersionManageVO } from './BizVersionManageVO';


export class AtomicIndexVO {
    public id?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'create_by'?: string;
    private 'cal_exp'?: string;
    private 'cal_fn_ids'?: Array<number>;
    private 'l1_id'?: number;
    private 'l2_id'?: string;
    private 'l3_id'?: number;
    private 'table_id'?: number;
    private 'tb_name'?: string;
    private 'dw_type'?: string;
    private 'field_ids'?: Array<number>;
    private 'field_names'?: Array<string>;
    public status?: BizStatusEnum;
    private 'biz_type'?: BizTypeEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    public constructor(nameEn?: string, nameCh?: string, calExp?: string, l3Id?: number, tableId?: number, fieldIds?: Array<number>) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['cal_exp'] = calExp;
        this['l3_id'] = l3Id;
        this['table_id'] = tableId;
        this['field_ids'] = fieldIds;
    }
    public withId(id: number): AtomicIndexVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): AtomicIndexVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): AtomicIndexVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): AtomicIndexVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): AtomicIndexVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCalExp(calExp: string): AtomicIndexVO {
        this['cal_exp'] = calExp;
        return this;
    }
    public set calExp(calExp: string  | undefined) {
        this['cal_exp'] = calExp;
    }
    public get calExp(): string | undefined {
        return this['cal_exp'];
    }
    public withCalFnIds(calFnIds: Array<number>): AtomicIndexVO {
        this['cal_fn_ids'] = calFnIds;
        return this;
    }
    public set calFnIds(calFnIds: Array<number>  | undefined) {
        this['cal_fn_ids'] = calFnIds;
    }
    public get calFnIds(): Array<number> | undefined {
        return this['cal_fn_ids'];
    }
    public withL1Id(l1Id: number): AtomicIndexVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: number  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): number | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): AtomicIndexVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: number): AtomicIndexVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: number  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): number | undefined {
        return this['l3_id'];
    }
    public withTableId(tableId: number): AtomicIndexVO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
        return this['table_id'];
    }
    public withTbName(tbName: string): AtomicIndexVO {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withDwType(dwType: string): AtomicIndexVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withFieldIds(fieldIds: Array<number>): AtomicIndexVO {
        this['field_ids'] = fieldIds;
        return this;
    }
    public set fieldIds(fieldIds: Array<number>  | undefined) {
        this['field_ids'] = fieldIds;
    }
    public get fieldIds(): Array<number> | undefined {
        return this['field_ids'];
    }
    public withFieldNames(fieldNames: Array<string>): AtomicIndexVO {
        this['field_names'] = fieldNames;
        return this;
    }
    public set fieldNames(fieldNames: Array<string>  | undefined) {
        this['field_names'] = fieldNames;
    }
    public get fieldNames(): Array<string> | undefined {
        return this['field_names'];
    }
    public withStatus(status: BizStatusEnum): AtomicIndexVO {
        this['status'] = status;
        return this;
    }
    public withBizType(bizType: BizTypeEnum): AtomicIndexVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withCreateTime(createTime: Date): AtomicIndexVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AtomicIndexVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withL1(l1: string): AtomicIndexVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): AtomicIndexVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): AtomicIndexVO {
        this['l3'] = l3;
        return this;
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): AtomicIndexVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): AtomicIndexVO {
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