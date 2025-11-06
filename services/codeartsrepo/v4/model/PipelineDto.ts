import { PipelineBasicDto } from './PipelineBasicDto';


export class PipelineDto {
    public id?: number;
    private 'web_url'?: string;
    public sha?: string;
    public ref?: string;
    public status?: PipelineDtoStatusEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public constructor() { 
    }
    public withId(id: number): PipelineDto {
        this['id'] = id;
        return this;
    }
    public withWebUrl(webUrl: string): PipelineDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withSha(sha: string): PipelineDto {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): PipelineDto {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: PipelineDtoStatusEnum | string): PipelineDto {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): PipelineDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PipelineDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStartedAt(startedAt: string): PipelineDto {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): PipelineDto {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
