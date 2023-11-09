

export class RecordJobInfo {
    private 'deploy_type'?: string;
    private 'source_url'?: string;
    private 'first_batch_weight'?: number;
    private 'first_batch_replica'?: number;
    public replica?: number;
    private 'remaining_batch'?: number;
    public constructor() { 
    }
    public withDeployType(deployType: string): RecordJobInfo {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withSourceUrl(sourceUrl: string): RecordJobInfo {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withFirstBatchWeight(firstBatchWeight: number): RecordJobInfo {
        this['first_batch_weight'] = firstBatchWeight;
        return this;
    }
    public set firstBatchWeight(firstBatchWeight: number  | undefined) {
        this['first_batch_weight'] = firstBatchWeight;
    }
    public get firstBatchWeight(): number | undefined {
        return this['first_batch_weight'];
    }
    public withFirstBatchReplica(firstBatchReplica: number): RecordJobInfo {
        this['first_batch_replica'] = firstBatchReplica;
        return this;
    }
    public set firstBatchReplica(firstBatchReplica: number  | undefined) {
        this['first_batch_replica'] = firstBatchReplica;
    }
    public get firstBatchReplica(): number | undefined {
        return this['first_batch_replica'];
    }
    public withReplica(replica: number): RecordJobInfo {
        this['replica'] = replica;
        return this;
    }
    public withRemainingBatch(remainingBatch: number): RecordJobInfo {
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