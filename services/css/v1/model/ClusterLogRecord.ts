

export class ClusterLogRecord {
    public id?: string;
    public clusterId?: string;
    public createAt?: string;
    public logPath?: string;
    public status?: string;
    public finishedAt?: number;
    public jobTypes?: string;
    public failedMsg?: string;
    public jobId?: string;
    public constructor() { 
    }
    public withId(id: string): ClusterLogRecord {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): ClusterLogRecord {
        this['clusterId'] = clusterId;
        return this;
    }
    public withCreateAt(createAt: string): ClusterLogRecord {
        this['createAt'] = createAt;
        return this;
    }
    public withLogPath(logPath: string): ClusterLogRecord {
        this['logPath'] = logPath;
        return this;
    }
    public withStatus(status: string): ClusterLogRecord {
        this['status'] = status;
        return this;
    }
    public withFinishedAt(finishedAt: number): ClusterLogRecord {
        this['finishedAt'] = finishedAt;
        return this;
    }
    public withJobTypes(jobTypes: string): ClusterLogRecord {
        this['jobTypes'] = jobTypes;
        return this;
    }
    public withFailedMsg(failedMsg: string): ClusterLogRecord {
        this['failedMsg'] = failedMsg;
        return this;
    }
    public withJobId(jobId: string): ClusterLogRecord {
        this['jobId'] = jobId;
        return this;
    }
}