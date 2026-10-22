import { LtsFiles } from './LtsFiles';


export class LtsConfigurationV2 {
    public status?: string;
    public type?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public files?: Array<LtsFiles>;
    public constructor(status?: string, type?: string) { 
        this['status'] = status;
        this['type'] = type;
    }
    public withStatus(status: string): LtsConfigurationV2 {
        this['status'] = status;
        return this;
    }
    public withType(type: string): LtsConfigurationV2 {
        this['type'] = type;
        return this;
    }
    public withLogGroupId(logGroupId: string): LtsConfigurationV2 {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LtsConfigurationV2 {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withFiles(files: Array<LtsFiles>): LtsConfigurationV2 {
        this['files'] = files;
        return this;
    }
}