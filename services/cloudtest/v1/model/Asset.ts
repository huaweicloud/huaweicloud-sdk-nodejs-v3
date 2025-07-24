

export class Asset {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'create_time'?: Date;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    private 'update_name'?: string;
    private 'update_num'?: string;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): Asset {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Asset {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Asset {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: Date): Asset {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): Asset {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): Asset {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withUpdateName(updateName: string): Asset {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateNum(updateNum: string): Asset {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: string  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): string | undefined {
        return this['update_num'];
    }
    public withUpdateTime(updateTime: Date): Asset {
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