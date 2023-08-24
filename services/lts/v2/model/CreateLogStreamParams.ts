import { TagsBody } from './TagsBody';


export class CreateLogStreamParams {
    private 'log_stream_name'?: string;
    private 'ttl_in_days'?: number;
    public tags?: Array<TagsBody>;
    public constructor(logStreamName?: string) { 
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamName(logStreamName: string): CreateLogStreamParams {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withTtlInDays(ttlInDays: number): CreateLogStreamParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withTags(tags: Array<TagsBody>): CreateLogStreamParams {
        this['tags'] = tags;
        return this;
    }
}