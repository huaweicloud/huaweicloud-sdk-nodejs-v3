import { BizVersionManageVO } from './BizVersionManageVO';


export class SecrecyLevelVO {
    public id?: string;
    public uuid?: string;
    public name?: string;
    public slevel?: number;
    public description?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'new_biz'?: BizVersionManageVO;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): SecrecyLevelVO {
        this['id'] = id;
        return this;
    }
    public withUuid(uuid: string): SecrecyLevelVO {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): SecrecyLevelVO {
        this['name'] = name;
        return this;
    }
    public withSlevel(slevel: number): SecrecyLevelVO {
        this['slevel'] = slevel;
        return this;
    }
    public withDescription(description: string): SecrecyLevelVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): SecrecyLevelVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): SecrecyLevelVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): SecrecyLevelVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): SecrecyLevelVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): SecrecyLevelVO {
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