

export class JobScriptBatchListModel {
    private 'batch_index'?: number;
    private 'total_instances'?: number;
    private 'rotation_strategy'?: JobScriptBatchListModelRotationStrategyEnum | string;
    public properties?: string;
    public constructor() { 
    }
    public withBatchIndex(batchIndex: number): JobScriptBatchListModel {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withTotalInstances(totalInstances: number): JobScriptBatchListModel {
        this['total_instances'] = totalInstances;
        return this;
    }
    public set totalInstances(totalInstances: number  | undefined) {
        this['total_instances'] = totalInstances;
    }
    public get totalInstances(): number | undefined {
        return this['total_instances'];
    }
    public withRotationStrategy(rotationStrategy: JobScriptBatchListModelRotationStrategyEnum | string): JobScriptBatchListModel {
        this['rotation_strategy'] = rotationStrategy;
        return this;
    }
    public set rotationStrategy(rotationStrategy: JobScriptBatchListModelRotationStrategyEnum | string  | undefined) {
        this['rotation_strategy'] = rotationStrategy;
    }
    public get rotationStrategy(): JobScriptBatchListModelRotationStrategyEnum | string | undefined {
        return this['rotation_strategy'];
    }
    public withProperties(properties: string): JobScriptBatchListModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobScriptBatchListModelRotationStrategyEnum {
    CONTINUE = 'CONTINUE',
    PAUSE = 'PAUSE'
}
