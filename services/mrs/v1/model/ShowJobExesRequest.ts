

export class ShowJobExesRequest {
    private 'job_exe_id': string | undefined;
    public constructor(jobExeId?: any) { 
        this['job_exe_id'] = jobExeId;
    }
    public withJobExeId(jobExeId: string): ShowJobExesRequest {
        this['job_exe_id'] = jobExeId;
        return this;
    }
    public set jobExeId(jobExeId: string | undefined) {
        this['job_exe_id'] = jobExeId;
    }
    public get jobExeId() {
        return this['job_exe_id'];
    }
}