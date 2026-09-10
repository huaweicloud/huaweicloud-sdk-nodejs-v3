

export class AttachShareFilesystemResponseBody200Jobs {
    private 'server_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withServerId(serverId: string): AttachShareFilesystemResponseBody200Jobs {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withJobId(jobId: string): AttachShareFilesystemResponseBody200Jobs {
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