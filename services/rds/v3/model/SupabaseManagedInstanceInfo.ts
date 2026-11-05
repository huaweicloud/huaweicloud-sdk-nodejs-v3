

export class SupabaseManagedInstanceInfo {
    private 'instance_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): SupabaseManagedInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): SupabaseManagedInstanceInfo {
        this['status'] = status;
        return this;
    }
}