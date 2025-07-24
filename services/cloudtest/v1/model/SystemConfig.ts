

export class SystemConfig {
    public id?: string;
    public key?: string;
    public value?: string;
    public remark?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    private 'update_name'?: string;
    private 'update_num'?: string;
    public constructor() { 
    }
    public withId(id: string): SystemConfig {
        this['id'] = id;
        return this;
    }
    public withKey(key: string): SystemConfig {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SystemConfig {
        this['value'] = value;
        return this;
    }
    public withRemark(remark: string): SystemConfig {
        this['remark'] = remark;
        return this;
    }
    public withRegionId(regionId: string): SystemConfig {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): SystemConfig {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): SystemConfig {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateName(updateName: string): SystemConfig {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateNum(updateNum: string): SystemConfig {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: string  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): string | undefined {
        return this['update_num'];
    }
}