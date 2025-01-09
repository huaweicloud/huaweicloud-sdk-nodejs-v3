

export class ResizeDesktopPoolJobResponse {
    private 'desktop_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): ResizeDesktopPoolJobResponse {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withJobId(jobId: string): ResizeDesktopPoolJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}