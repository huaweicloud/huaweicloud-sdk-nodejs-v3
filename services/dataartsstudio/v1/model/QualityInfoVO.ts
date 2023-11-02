import { BizTypeEnum } from './BizTypeEnum';


export class QualityInfoVO {
    public id?: number;
    private 'table_id'?: number;
    private 'attr_id'?: number;
    private 'biz_type'?: BizTypeEnum;
    private 'data_quality_id'?: number;
    private 'show_control'?: number;
    private 'data_quality_name'?: string;
    private 'alert_conf'?: string;
    public expression?: string;
    private 'extend_info'?: string;
    private 'from_standard'?: boolean;
    private 'result_description'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(dataQualityId?: number) { 
        this['data_quality_id'] = dataQualityId;
    }
    public withId(id: number): QualityInfoVO {
        this['id'] = id;
        return this;
    }
    public withTableId(tableId: number): QualityInfoVO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
        return this['table_id'];
    }
    public withAttrId(attrId: number): QualityInfoVO {
        this['attr_id'] = attrId;
        return this;
    }
    public set attrId(attrId: number  | undefined) {
        this['attr_id'] = attrId;
    }
    public get attrId(): number | undefined {
        return this['attr_id'];
    }
    public withBizType(bizType: BizTypeEnum): QualityInfoVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withDataQualityId(dataQualityId: number): QualityInfoVO {
        this['data_quality_id'] = dataQualityId;
        return this;
    }
    public set dataQualityId(dataQualityId: number  | undefined) {
        this['data_quality_id'] = dataQualityId;
    }
    public get dataQualityId(): number | undefined {
        return this['data_quality_id'];
    }
    public withShowControl(showControl: number): QualityInfoVO {
        this['show_control'] = showControl;
        return this;
    }
    public set showControl(showControl: number  | undefined) {
        this['show_control'] = showControl;
    }
    public get showControl(): number | undefined {
        return this['show_control'];
    }
    public withDataQualityName(dataQualityName: string): QualityInfoVO {
        this['data_quality_name'] = dataQualityName;
        return this;
    }
    public set dataQualityName(dataQualityName: string  | undefined) {
        this['data_quality_name'] = dataQualityName;
    }
    public get dataQualityName(): string | undefined {
        return this['data_quality_name'];
    }
    public withAlertConf(alertConf: string): QualityInfoVO {
        this['alert_conf'] = alertConf;
        return this;
    }
    public set alertConf(alertConf: string  | undefined) {
        this['alert_conf'] = alertConf;
    }
    public get alertConf(): string | undefined {
        return this['alert_conf'];
    }
    public withExpression(expression: string): QualityInfoVO {
        this['expression'] = expression;
        return this;
    }
    public withExtendInfo(extendInfo: string): QualityInfoVO {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: string  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): string | undefined {
        return this['extend_info'];
    }
    public withFromStandard(fromStandard: boolean): QualityInfoVO {
        this['from_standard'] = fromStandard;
        return this;
    }
    public set fromStandard(fromStandard: boolean  | undefined) {
        this['from_standard'] = fromStandard;
    }
    public get fromStandard(): boolean | undefined {
        return this['from_standard'];
    }
    public withResultDescription(resultDescription: string): QualityInfoVO {
        this['result_description'] = resultDescription;
        return this;
    }
    public set resultDescription(resultDescription: string  | undefined) {
        this['result_description'] = resultDescription;
    }
    public get resultDescription(): string | undefined {
        return this['result_description'];
    }
    public withCreateBy(createBy: string): QualityInfoVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): QualityInfoVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): QualityInfoVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): QualityInfoVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}