

export class ShowJobExesRequest {
    private 'job_exe_id'?: string;
    public constructor(jobExeId?: string) { 
        this['job_exe_id'] = jobExeId;
    }
    public withJobExeId(jobExeId: string): ShowJobExesRequest {
        this['job_exe_id'] = jobExeId;
        return this;
    }
    public set jobExeId(jobExeId: string  | undefined) {
        this['job_exe_id'] = jobExeId;
    }
    public get jobExeId(): string | undefined {
        return this['job_exe_id'];
    }
}