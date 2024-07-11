

export class EnvironmentBaseInfo {
    public name?: string;
    public os?: string;
    public uuid?: string;
    private 'group_id'?: string;
    private 'host_count'?: number;
    public constructor() { 
    }
    public withName(name: string): EnvironmentBaseInfo {
        this['name'] = name;
        return this;
    }
    public withOs(os: string): EnvironmentBaseInfo {
        this['os'] = os;
        return this;
    }
    public withUuid(uuid: string): EnvironmentBaseInfo {
        this['uuid'] = uuid;
        return this;
    }
    public withGroupId(groupId: string): EnvironmentBaseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostCount(hostCount: number): EnvironmentBaseInfo {
        this['host_count'] = hostCount;
        return this;
    }
    public set hostCount(hostCount: number  | undefined) {
        this['host_count'] = hostCount;
    }
    public get hostCount(): number | undefined {
        return this['host_count'];
    }
}