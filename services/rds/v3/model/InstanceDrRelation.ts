import { MasterInstance } from './MasterInstance';
import { SlaveInstance } from './SlaveInstance';


export class InstanceDrRelation {
    private 'instance_id'?: string;
    private 'master_instance'?: MasterInstance;
    private 'slave_instances'?: Array<SlaveInstance>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceDrRelation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMasterInstance(masterInstance: MasterInstance): InstanceDrRelation {
        this['master_instance'] = masterInstance;
        return this;
    }
    public set masterInstance(masterInstance: MasterInstance  | undefined) {
        this['master_instance'] = masterInstance;
    }
    public get masterInstance(): MasterInstance | undefined {
        return this['master_instance'];
    }
    public withSlaveInstances(slaveInstances: Array<SlaveInstance>): InstanceDrRelation {
        this['slave_instances'] = slaveInstances;
        return this;
    }
    public set slaveInstances(slaveInstances: Array<SlaveInstance>  | undefined) {
        this['slave_instances'] = slaveInstances;
    }
    public get slaveInstances(): Array<SlaveInstance> | undefined {
        return this['slave_instances'];
    }
}