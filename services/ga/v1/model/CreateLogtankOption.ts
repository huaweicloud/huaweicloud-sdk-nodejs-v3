import { LogtankResourceType } from './LogtankResourceType';


export class CreateLogtankOption {
    private 'resource_type'?: LogtankResourceType;
    private 'resource_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public constructor(resourceType?: LogtankResourceType, resourceId?: string, logGroupId?: string, logStreamId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
    }
    public withResourceType(resourceType: LogtankResourceType): CreateLogtankOption {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: LogtankResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): LogtankResourceType | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateLogtankOption {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLogGroupId(logGroupId: string): CreateLogtankOption {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): CreateLogtankOption {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
}