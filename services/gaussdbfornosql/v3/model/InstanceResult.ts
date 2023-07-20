import { InstanceTagResult } from './InstanceTagResult';


export class InstanceResult {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public tags?: Array<InstanceTagResult>;
    public constructor(instanceId?: string, instanceName?: string, tags?: Array<InstanceTagResult>) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['tags'] = tags;
    }
    public withInstanceId(instanceId: string): InstanceResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withTags(tags: Array<InstanceTagResult>): InstanceResult {
        this['tags'] = tags;
        return this;
    }
}