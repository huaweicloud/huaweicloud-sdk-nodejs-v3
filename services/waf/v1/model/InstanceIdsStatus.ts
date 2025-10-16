

export class InstanceIdsStatus {
    private 'protect_status'?: number;
    private 'instance_ids'?: Array<string>;
    public constructor() { 
    }
    public withProtectStatus(protectStatus: number): InstanceIdsStatus {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withInstanceIds(instanceIds: Array<string>): InstanceIdsStatus {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}