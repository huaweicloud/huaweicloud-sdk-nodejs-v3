

export class JobRecords {
    private 'job_name'?: string;
    private 'record_type'?: JobRecordsRecordTypeEnum | string;
    private 'record_time'?: string;
    public request?: string;
    public response?: string;
    public code?: string;
    public message?: string;
    private 'job_status'?: JobRecordsJobStatusEnum | string;
    public constructor() { 
    }
    public withJobName(jobName: string): JobRecords {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withRecordType(recordType: JobRecordsRecordTypeEnum | string): JobRecords {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: JobRecordsRecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): JobRecordsRecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withRecordTime(recordTime: string): JobRecords {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: string  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): string | undefined {
        return this['record_time'];
    }
    public withRequest(request: string): JobRecords {
        this['request'] = request;
        return this;
    }
    public withResponse(response: string): JobRecords {
        this['response'] = response;
        return this;
    }
    public withCode(code: string): JobRecords {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): JobRecords {
        this['message'] = message;
        return this;
    }
    public withJobStatus(jobStatus: JobRecordsJobStatusEnum | string): JobRecords {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: JobRecordsJobStatusEnum | string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): JobRecordsJobStatusEnum | string | undefined {
        return this['job_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobRecordsRecordTypeEnum {
    API = 'API',
    MEG = 'MEG'
}
/**
    * @export
    * @enum {string}
    */
export enum JobRecordsJobStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}
