import { ResourceInstance } from './ResourceInstance';


export class InstancesBatchesMode {
    private 'batch_strategy'?: InstancesBatchesModeBatchStrategyEnum | string;
    private 'target_instances'?: Array<ResourceInstance>;
    public constructor(batchStrategy?: string, targetInstances?: Array<ResourceInstance>) { 
        this['batch_strategy'] = batchStrategy;
        this['target_instances'] = targetInstances;
    }
    public withBatchStrategy(batchStrategy: InstancesBatchesModeBatchStrategyEnum | string): InstancesBatchesMode {
        this['batch_strategy'] = batchStrategy;
        return this;
    }
    public set batchStrategy(batchStrategy: InstancesBatchesModeBatchStrategyEnum | string  | undefined) {
        this['batch_strategy'] = batchStrategy;
    }
    public get batchStrategy(): InstancesBatchesModeBatchStrategyEnum | string | undefined {
        return this['batch_strategy'];
    }
    public withTargetInstances(targetInstances: Array<ResourceInstance>): InstancesBatchesMode {
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

/**
    * @export
    * @enum {string}
    */
export enum InstancesBatchesModeBatchStrategyEnum {
    AUTO_BATCH = 'AUTO_BATCH'
}
