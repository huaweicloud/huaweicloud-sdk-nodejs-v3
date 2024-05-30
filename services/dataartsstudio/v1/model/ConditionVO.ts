import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';


export class ConditionVO {
    public id?: string;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'create_by'?: string;
    private 'condition_fn'?: ConditionVOConditionFnEnum | string;
    private 'condition_fn_param'?: string;
    public status?: BizStatusEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'base_time'?: number;
    public constructor(nameEn?: string, nameCh?: string) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
    }
    public withId(id: string): ConditionVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): ConditionVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): ConditionVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): ConditionVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): ConditionVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withConditionFn(conditionFn: ConditionVOConditionFnEnum | string): ConditionVO {
        this['condition_fn'] = conditionFn;
        return this;
    }
    public set conditionFn(conditionFn: ConditionVOConditionFnEnum | string  | undefined) {
        this['condition_fn'] = conditionFn;
    }
    public get conditionFn(): ConditionVOConditionFnEnum | string | undefined {
        return this['condition_fn'];
    }
    public withConditionFnParam(conditionFnParam: string): ConditionVO {
        this['condition_fn_param'] = conditionFnParam;
        return this;
    }
    public set conditionFnParam(conditionFnParam: string  | undefined) {
        this['condition_fn_param'] = conditionFnParam;
    }
    public get conditionFnParam(): string | undefined {
        return this['condition_fn_param'];
    }
    public withStatus(status: BizStatusEnum): ConditionVO {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): ConditionVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ConditionVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): ConditionVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): ConditionVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withBaseTime(baseTime: number): ConditionVO {
        this['base_time'] = baseTime;
        return this;
    }
    public set baseTime(baseTime: number  | undefined) {
        this['base_time'] = baseTime;
    }
    public get baseTime(): number | undefined {
        return this['base_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConditionVOConditionFnEnum {
    LAST_YEAR = 'LAST_YEAR',
    CURRENT_YEAR = 'CURRENT_YEAR',
    BETWEEN_YEAR = 'BETWEEN_YEAR',
    LAST_MONTH = 'LAST_MONTH',
    CURRENT_MONTH = 'CURRENT_MONTH',
    BETWEEN_MONTH = 'BETWEEN_MONTH',
    LAST_DAY = 'LAST_DAY',
    CURRENT_DAY = 'CURRENT_DAY',
    BETWEEN_DAY = 'BETWEEN_DAY',
    LAST_HOUR = 'LAST_HOUR',
    CURRENT_HOUR = 'CURRENT_HOUR',
    BETWEEN_HOUR = 'BETWEEN_HOUR',
    LAST_MINUTE = 'LAST_MINUTE',
    CURRENT_MINUTE = 'CURRENT_MINUTE',
    BETWEEN_MINUTE = 'BETWEEN_MINUTE'
}
