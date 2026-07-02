

export class StartKafkaLogTaskReqEntity {
    private 'log_file_name'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor() { 
    }
    public withLogFileName(logFileName: string): StartKafkaLogTaskReqEntity {
        this['log_file_name'] = logFileName;
        return this;
    }
    public set logFileName(logFileName: string  | undefined) {
        this['log_file_name'] = logFileName;
    }
    public get logFileName(): string | undefined {
        return this['log_file_name'];
    }
    public withLogGroupName(logGroupName: string): StartKafkaLogTaskReqEntity {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): StartKafkaLogTaskReqEntity {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
}