import { EntityInfo } from './EntityInfo';


export class ApplicableInstancesInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public entities?: Array<EntityInfo>;
    public constructor(instanceId?: string, instanceName?: string, entities?: Array<EntityInfo>) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['entities'] = entities;
    }
    public withInstanceId(instanceId: string): ApplicableInstancesInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApplicableInstancesInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEntities(entities: Array<EntityInfo>): ApplicableInstancesInfo {
        this['entities'] = entities;
        return this;
    }
}