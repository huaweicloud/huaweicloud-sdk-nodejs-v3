

export class InstanceDetail {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public status?: string;
    public type?: string;
    public solution?: string;
    private 'hotfix_versions'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceDetail {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: string): InstanceDetail {
        this['status'] = status;
        return this;
    }
    public withType(type: string): InstanceDetail {
        this['type'] = type;
        return this;
    }
    public withSolution(solution: string): InstanceDetail {
        this['solution'] = solution;
        return this;
    }
    public withHotfixVersions(hotfixVersions: string): InstanceDetail {
        this['hotfix_versions'] = hotfixVersions;
        return this;
    }
    public set hotfixVersions(hotfixVersions: string  | undefined) {
        this['hotfix_versions'] = hotfixVersions;
    }
    public get hotfixVersions(): string | undefined {
        return this['hotfix_versions'];
    }
}