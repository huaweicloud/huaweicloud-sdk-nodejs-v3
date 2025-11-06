import { BaseJobDto } from './BaseJobDto';


export class JobWithStageDto {
    public id?: number;
    public sha?: string;
    public ref?: string;
    public status?: JobWithStageDtoStatusEnum | string;
    public name?: string;
    private 'target_url'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    private 'third_build_id'?: string;
    private 'stage_id'?: number;
    public stage?: string;
    public constructor() { 
    }
    public withId(id: number): JobWithStageDto {
        this['id'] = id;
        return this;
    }
    public withSha(sha: string): JobWithStageDto {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): JobWithStageDto {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: JobWithStageDtoStatusEnum | string): JobWithStageDto {
        this['status'] = status;
        return this;
    }
    public withName(name: string): JobWithStageDto {
        this['name'] = name;
        return this;
    }
    public withTargetUrl(targetUrl: string): JobWithStageDto {
        this['target_url'] = targetUrl;
        return this;
    }
    public set targetUrl(targetUrl: string  | undefined) {
        this['target_url'] = targetUrl;
    }
    public get targetUrl(): string | undefined {
        return this['target_url'];
    }
    public withCreatedAt(createdAt: string): JobWithStageDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): JobWithStageDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStartedAt(startedAt: string): JobWithStageDto {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): JobWithStageDto {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withThirdBuildId(thirdBuildId: string): JobWithStageDto {
        this['third_build_id'] = thirdBuildId;
        return this;
    }
    public set thirdBuildId(thirdBuildId: string  | undefined) {
        this['third_build_id'] = thirdBuildId;
    }
    public get thirdBuildId(): string | undefined {
        return this['third_build_id'];
    }
    public withStageId(stageId: number): JobWithStageDto {
        this['stage_id'] = stageId;
        return this;
    }
    public set stageId(stageId: number  | undefined) {
        this['stage_id'] = stageId;
    }
    public get stageId(): number | undefined {
        return this['stage_id'];
    }
    public withStage(stage: string): JobWithStageDto {
        this['stage'] = stage;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobWithStageDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
