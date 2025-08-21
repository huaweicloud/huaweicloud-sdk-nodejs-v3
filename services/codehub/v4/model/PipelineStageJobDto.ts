import { BaseJobDto } from './BaseJobDto';


export class PipelineStageJobDto {
    public id?: number;
    public name?: string;
    private 'sort_id'?: number;
    public status?: PipelineStageJobDtoStatusEnum | string;
    public jobs?: Array<BaseJobDto>;
    public constructor() { 
    }
    public withId(id: number): PipelineStageJobDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PipelineStageJobDto {
        this['name'] = name;
        return this;
    }
    public withSortId(sortId: number): PipelineStageJobDto {
        this['sort_id'] = sortId;
        return this;
    }
    public set sortId(sortId: number  | undefined) {
        this['sort_id'] = sortId;
    }
    public get sortId(): number | undefined {
        return this['sort_id'];
    }
    public withStatus(status: PipelineStageJobDtoStatusEnum | string): PipelineStageJobDto {
        this['status'] = status;
        return this;
    }
    public withJobs(jobs: Array<BaseJobDto>): PipelineStageJobDto {
        this['jobs'] = jobs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineStageJobDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
