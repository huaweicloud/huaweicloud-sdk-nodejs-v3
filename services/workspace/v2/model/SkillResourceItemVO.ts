

export class SkillResourceItemVO {
    public id?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'skill_version'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SkillResourceItemVO {
        this['id'] = id;
        return this;
    }
    public withResourceType(resourceType: string): SkillResourceItemVO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): SkillResourceItemVO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): SkillResourceItemVO {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withSkillVersion(skillVersion: string): SkillResourceItemVO {
        this['skill_version'] = skillVersion;
        return this;
    }
    public set skillVersion(skillVersion: string  | undefined) {
        this['skill_version'] = skillVersion;
    }
    public get skillVersion(): string | undefined {
        return this['skill_version'];
    }
    public withCreateTime(createTime: string): SkillResourceItemVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}