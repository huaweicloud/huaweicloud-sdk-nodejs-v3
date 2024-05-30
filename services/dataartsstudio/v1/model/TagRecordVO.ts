import { BizTypeEnum } from './BizTypeEnum';


export class TagRecordVO {
    public id?: string;
    private 'tag_id'?: string;
    private 'tag_name'?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(tagId?: string, bizId?: string, bizType?: BizTypeEnum) { 
        this['tag_id'] = tagId;
        this['biz_id'] = bizId;
        this['biz_type'] = bizType;
    }
    public withId(id: string): TagRecordVO {
        this['id'] = id;
        return this;
    }
    public withTagId(tagId: string): TagRecordVO {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withTagName(tagName: string): TagRecordVO {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withBizId(bizId: string): TagRecordVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): TagRecordVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withCreateBy(createBy: string): TagRecordVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): TagRecordVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): TagRecordVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): TagRecordVO {
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