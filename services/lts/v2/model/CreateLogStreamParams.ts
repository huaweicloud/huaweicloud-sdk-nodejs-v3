import { TagsBody } from './TagsBody';


export class CreateLogStreamParams {
    private 'log_stream_name'?: string;
    private 'ttl_in_days'?: number;
    public tags?: Array<TagsBody>;
    private 'log_stream_name_alias'?: string;
    private 'enterprise_project_name'?: string;
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
    public withLogStreamNameAlias(logStreamNameAlias: string): CreateLogStreamParams {
        this['log_stream_name_alias'] = logStreamNameAlias;
        return this;
    }
    public set logStreamNameAlias(logStreamNameAlias: string  | undefined) {
        this['log_stream_name_alias'] = logStreamNameAlias;
    }
    public get logStreamNameAlias(): string | undefined {
        return this['log_stream_name_alias'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): CreateLogStreamParams {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
}