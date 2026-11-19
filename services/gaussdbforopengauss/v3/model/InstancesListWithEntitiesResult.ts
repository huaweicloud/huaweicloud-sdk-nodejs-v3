import { EntityResult } from './EntityResult';


export class InstancesListWithEntitiesResult {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public entities?: Array<EntityResult>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstancesListWithEntitiesResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstancesListWithEntitiesResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEntities(entities: Array<EntityResult>): InstancesListWithEntitiesResult {
        this['entities'] = entities;
        return this;
    }
}