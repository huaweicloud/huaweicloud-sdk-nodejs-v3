import { PipelineDto } from './PipelineDto';
import { PipelineStageDto } from './PipelineStageDto';


export class PipelineDetailDto {
    public id?: number;
    private 'web_url'?: string;
    public sha?: string;
    public ref?: string;
    public status?: PipelineDetailDtoStatusEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    private 'repository_id'?: number;
    private 'is_invalid'?: boolean;
    public type?: PipelineDetailDtoTypeEnum | string;
    public stages?: Array<PipelineStageDto>;
    private 'is_latest'?: boolean;
    private 'trigger_user'?: string;
    private 'all_job_finished'?: boolean;
    public constructor() { 
    }
    public withId(id: number): PipelineDetailDto {
        this['id'] = id;
        return this;
    }
    public withWebUrl(webUrl: string): PipelineDetailDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withSha(sha: string): PipelineDetailDto {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): PipelineDetailDto {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: PipelineDetailDtoStatusEnum | string): PipelineDetailDto {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): PipelineDetailDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PipelineDetailDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStartedAt(startedAt: string): PipelineDetailDto {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): PipelineDetailDto {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withRepositoryId(repositoryId: number): PipelineDetailDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIsInvalid(isInvalid: boolean): PipelineDetailDto {
        this['is_invalid'] = isInvalid;
        return this;
    }
    public set isInvalid(isInvalid: boolean  | undefined) {
        this['is_invalid'] = isInvalid;
    }
    public get isInvalid(): boolean | undefined {
        return this['is_invalid'];
    }
    public withType(type: PipelineDetailDtoTypeEnum | string): PipelineDetailDto {
        this['type'] = type;
        return this;
    }
    public withStages(stages: Array<PipelineStageDto>): PipelineDetailDto {
        this['stages'] = stages;
        return this;
    }
    public withIsLatest(isLatest: boolean): PipelineDetailDto {
        this['is_latest'] = isLatest;
        return this;
    }
    public set isLatest(isLatest: boolean  | undefined) {
        this['is_latest'] = isLatest;
    }
    public get isLatest(): boolean | undefined {
        return this['is_latest'];
    }
    public withTriggerUser(triggerUser: string): PipelineDetailDto {
        this['trigger_user'] = triggerUser;
        return this;
    }
    public set triggerUser(triggerUser: string  | undefined) {
        this['trigger_user'] = triggerUser;
    }
    public get triggerUser(): string | undefined {
        return this['trigger_user'];
    }
    public withAllJobFinished(allJobFinished: boolean): PipelineDetailDto {
        this['all_job_finished'] = allJobFinished;
        return this;
    }
    public set allJobFinished(allJobFinished: boolean  | undefined) {
        this['all_job_finished'] = allJobFinished;
    }
    public get allJobFinished(): boolean | undefined {
        return this['all_job_finished'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineDetailDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
/**
    * @export
    * @enum {string}
    */
export enum PipelineDetailDtoTypeEnum {
    MERGE_REQUEST = 'MERGE REQUEST'
}
