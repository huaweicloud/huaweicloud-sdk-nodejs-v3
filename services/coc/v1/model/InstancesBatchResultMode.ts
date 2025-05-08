import { ResourceInstance } from './ResourceInstance';


export class InstancesBatchResultMode {
    private 'batch_index'?: number;
    private 'target_instances'?: Array<ResourceInstance>;
    public constructor(batchIndex?: number, targetInstances?: Array<ResourceInstance>) { 
        this['batch_index'] = batchIndex;
        this['target_instances'] = targetInstances;
    }
    public withBatchIndex(batchIndex: number): InstancesBatchResultMode {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withTargetInstances(targetInstances: Array<ResourceInstance>): InstancesBatchResultMode {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: Array<ResourceInstance>  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): Array<ResourceInstance> | undefined {
        return this['target_instances'];
    }
}