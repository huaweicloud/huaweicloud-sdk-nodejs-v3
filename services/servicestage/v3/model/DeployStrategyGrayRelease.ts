

export class DeployStrategyGrayRelease {
    public type?: DeployStrategyGrayReleaseTypeEnum | string;
    private 'first_batch_weight'?: number;
    private 'first_batch_replica'?: number;
    private 'remaining_batch'?: number;
    public constructor(type?: string, firstBatchWeight?: number, firstBatchReplica?: number, remainingBatch?: number) { 
        this['type'] = type;
        this['first_batch_weight'] = firstBatchWeight;
        this['first_batch_replica'] = firstBatchReplica;
        this['remaining_batch'] = remainingBatch;
    }
    public withType(type: DeployStrategyGrayReleaseTypeEnum | string): DeployStrategyGrayRelease {
        this['type'] = type;
        return this;
    }
    public withFirstBatchWeight(firstBatchWeight: number): DeployStrategyGrayRelease {
        this['first_batch_weight'] = firstBatchWeight;
        return this;
    }
    public set firstBatchWeight(firstBatchWeight: number  | undefined) {
        this['first_batch_weight'] = firstBatchWeight;
    }
    public get firstBatchWeight(): number | undefined {
        return this['first_batch_weight'];
    }
    public withFirstBatchReplica(firstBatchReplica: number): DeployStrategyGrayRelease {
        this['first_batch_replica'] = firstBatchReplica;
        return this;
    }
    public set firstBatchReplica(firstBatchReplica: number  | undefined) {
        this['first_batch_replica'] = firstBatchReplica;
    }
    public get firstBatchReplica(): number | undefined {
        return this['first_batch_replica'];
    }
    public withRemainingBatch(remainingBatch: number): DeployStrategyGrayRelease {
        this['remaining_batch'] = remainingBatch;
        return this;
    }
    public set remainingBatch(remainingBatch: number  | undefined) {
        this['remaining_batch'] = remainingBatch;
    }
    public get remainingBatch(): number | undefined {
        return this['remaining_batch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseTypeEnum {
    WEIGHT = 'weight',
    CONTENT = 'content'
}
