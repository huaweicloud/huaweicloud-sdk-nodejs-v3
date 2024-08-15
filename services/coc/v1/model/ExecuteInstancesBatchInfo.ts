import { ExecuteResourceInstance } from './ExecuteResourceInstance';


export class ExecuteInstancesBatchInfo {
    private 'batch_index'?: number;
    private 'target_instances'?: Array<ExecuteResourceInstance>;
    private 'rotation_strategy'?: ExecuteInstancesBatchInfoRotationStrategyEnum | string;
    public constructor(batchIndex?: number, targetInstances?: Array<ExecuteResourceInstance>, rotationStrategy?: string) { 
        this['batch_index'] = batchIndex;
        this['target_instances'] = targetInstances;
        this['rotation_strategy'] = rotationStrategy;
    }
    public withBatchIndex(batchIndex: number): ExecuteInstancesBatchInfo {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withTargetInstances(targetInstances: Array<ExecuteResourceInstance>): ExecuteInstancesBatchInfo {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: Array<ExecuteResourceInstance>  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): Array<ExecuteResourceInstance> | undefined {
        return this['target_instances'];
    }
    public withRotationStrategy(rotationStrategy: ExecuteInstancesBatchInfoRotationStrategyEnum | string): ExecuteInstancesBatchInfo {
        this['rotation_strategy'] = rotationStrategy;
        return this;
    }
    public set rotationStrategy(rotationStrategy: ExecuteInstancesBatchInfoRotationStrategyEnum | string  | undefined) {
        this['rotation_strategy'] = rotationStrategy;
    }
    public get rotationStrategy(): ExecuteInstancesBatchInfoRotationStrategyEnum | string | undefined {
        return this['rotation_strategy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteInstancesBatchInfoRotationStrategyEnum {
    CONTINUE = 'CONTINUE',
    PAUSE = 'PAUSE'
}
