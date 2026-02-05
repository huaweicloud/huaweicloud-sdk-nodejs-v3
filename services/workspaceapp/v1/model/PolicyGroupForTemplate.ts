

export class PolicyGroupForTemplate {
    public id?: string;
    public name?: string;
    public priority?: number;
    public description?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): PolicyGroupForTemplate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyGroupForTemplate {
        this['name'] = name;
        return this;
    }
    public withPriority(priority: number): PolicyGroupForTemplate {
        this['priority'] = priority;
        return this;
    }
    public withDescription(description: string): PolicyGroupForTemplate {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: Date): PolicyGroupForTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): PolicyGroupForTemplate {
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