

export class MoveJobGroupResponseBodyResult {
    private 'job_id'?: string;
    private 'group_path_id'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): MoveJobGroupResponseBodyResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGroupPathId(groupPathId: string): MoveJobGroupResponseBodyResult {
        this['group_path_id'] = groupPathId;
        return this;
    }
    public set groupPathId(groupPathId: string  | undefined) {
        this['group_path_id'] = groupPathId;
    }
    public get groupPathId(): string | undefined {
        return this['group_path_id'];
    }
}