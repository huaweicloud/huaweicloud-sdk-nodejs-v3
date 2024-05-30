import { BizStatusEnum } from './BizStatusEnum';
import { BizTypeEnum } from './BizTypeEnum';


export class BizVersionManageVO {
    public id?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'biz_id'?: string;
    private 'biz_info'?: string;
    public status?: BizStatusEnum;
    private 'biz_version'?: number;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): BizVersionManageVO {
        this['id'] = id;
        return this;
    }
    public withBizType(bizType: BizTypeEnum): BizVersionManageVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withBizId(bizId: string): BizVersionManageVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizInfo(bizInfo: string): BizVersionManageVO {
        this['biz_info'] = bizInfo;
        return this;
    }
    public set bizInfo(bizInfo: string  | undefined) {
        this['biz_info'] = bizInfo;
    }
    public get bizInfo(): string | undefined {
        return this['biz_info'];
    }
    public withStatus(status: BizStatusEnum): BizVersionManageVO {
        this['status'] = status;
        return this;
    }
    public withBizVersion(bizVersion: number): BizVersionManageVO {
        this['biz_version'] = bizVersion;
        return this;
    }
    public set bizVersion(bizVersion: number  | undefined) {
        this['biz_version'] = bizVersion;
    }
    public get bizVersion(): number | undefined {
        return this['biz_version'];
    }
    public withCreateTime(createTime: Date): BizVersionManageVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BizVersionManageVO {
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