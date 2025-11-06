

export class PipelineBasicDto {
    public id?: number;
    private 'web_url'?: string;
    public sha?: string;
    public ref?: string;
    public status?: PipelineBasicDtoStatusEnum | string;
    public constructor() { 
    }
    public withId(id: number): PipelineBasicDto {
        this['id'] = id;
        return this;
    }
    public withWebUrl(webUrl: string): PipelineBasicDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withSha(sha: string): PipelineBasicDto {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): PipelineBasicDto {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: PipelineBasicDtoStatusEnum | string): PipelineBasicDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineBasicDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
