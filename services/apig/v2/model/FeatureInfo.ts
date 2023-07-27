

export class FeatureInfo {
    public id?: string;
    public name?: string;
    public enable?: boolean;
    public config?: string;
    private 'instance_id'?: string;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): FeatureInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FeatureInfo {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): FeatureInfo {
        this['enable'] = enable;
        return this;
    }
    public withConfig(config: string): FeatureInfo {
        this['config'] = config;
        return this;
    }
    public withInstanceId(instanceId: string): FeatureInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUpdateTime(updateTime: Date): FeatureInfo {
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