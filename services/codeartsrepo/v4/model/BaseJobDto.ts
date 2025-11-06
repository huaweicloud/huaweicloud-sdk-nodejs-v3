

export class BaseJobDto {
    public id?: number;
    public sha?: string;
    public ref?: string;
    public status?: BaseJobDtoStatusEnum | string;
    public name?: string;
    private 'target_url'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    private 'third_build_id'?: string;
    public constructor() { 
    }
    public withId(id: number): BaseJobDto {
        this['id'] = id;
        return this;
    }
    public withSha(sha: string): BaseJobDto {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): BaseJobDto {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: BaseJobDtoStatusEnum | string): BaseJobDto {
        this['status'] = status;
        return this;
    }
    public withName(name: string): BaseJobDto {
        this['name'] = name;
        return this;
    }
    public withTargetUrl(targetUrl: string): BaseJobDto {
        this['target_url'] = targetUrl;
        return this;
    }
    public set targetUrl(targetUrl: string  | undefined) {
        this['target_url'] = targetUrl;
    }
    public get targetUrl(): string | undefined {
        return this['target_url'];
    }
    public withCreatedAt(createdAt: string): BaseJobDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): BaseJobDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStartedAt(startedAt: string): BaseJobDto {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): BaseJobDto {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withThirdBuildId(thirdBuildId: string): BaseJobDto {
        this['third_build_id'] = thirdBuildId;
        return this;
    }
    public set thirdBuildId(thirdBuildId: string  | undefined) {
        this['third_build_id'] = thirdBuildId;
    }
    public get thirdBuildId(): string | undefined {
        return this['third_build_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseJobDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
