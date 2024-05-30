import { BizTypeEnum } from './BizTypeEnum';


export class SecrecyLevelRecordVO {
    public id?: string;
    private 'secrecyLevel_id'?: string;
    private 'secrecyLevel_name'?: string;
    public uuid?: string;
    public slevel?: number;
    public description?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(secrecyLevelId?: string, bizId?: string, bizType?: BizTypeEnum) { 
        this['secrecyLevel_id'] = secrecyLevelId;
        this['biz_id'] = bizId;
        this['biz_type'] = bizType;
    }
    public withId(id: string): SecrecyLevelRecordVO {
        this['id'] = id;
        return this;
    }
    public withSecrecyLevelId(secrecyLevelId: string): SecrecyLevelRecordVO {
        this['secrecyLevel_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecyLevel_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecyLevel_id'];
    }
    public withSecrecyLevelName(secrecyLevelName: string): SecrecyLevelRecordVO {
        this['secrecyLevel_name'] = secrecyLevelName;
        return this;
    }
    public set secrecyLevelName(secrecyLevelName: string  | undefined) {
        this['secrecyLevel_name'] = secrecyLevelName;
    }
    public get secrecyLevelName(): string | undefined {
        return this['secrecyLevel_name'];
    }
    public withUuid(uuid: string): SecrecyLevelRecordVO {
        this['uuid'] = uuid;
        return this;
    }
    public withSlevel(slevel: number): SecrecyLevelRecordVO {
        this['slevel'] = slevel;
        return this;
    }
    public withDescription(description: string): SecrecyLevelRecordVO {
        this['description'] = description;
        return this;
    }
    public withBizId(bizId: string): SecrecyLevelRecordVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): SecrecyLevelRecordVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withCreateBy(createBy: string): SecrecyLevelRecordVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): SecrecyLevelRecordVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): SecrecyLevelRecordVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): SecrecyLevelRecordVO {
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