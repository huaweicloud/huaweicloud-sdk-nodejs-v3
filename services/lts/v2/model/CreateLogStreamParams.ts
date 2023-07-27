import { TagsBody } from './TagsBody';


export class CreateLogStreamParams {
    private 'log_stream_name'?: CreateLogStreamParamsLogStreamNameEnum | string;
    private 'enterprise_project_name'?: string;
    private 'ttl_in_days'?: CreateLogStreamParamsTtlInDaysEnum | string;
    public tags?: Array<TagsBody>;
    public constructor(logStreamName?: string) { 
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamName(logStreamName: CreateLogStreamParamsLogStreamNameEnum | string): CreateLogStreamParams {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: CreateLogStreamParamsLogStreamNameEnum | string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): CreateLogStreamParamsLogStreamNameEnum | string | undefined {
        return this['log_stream_name'];
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
    public withTtlInDays(ttlInDays: CreateLogStreamParamsTtlInDaysEnum | string): CreateLogStreamParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: CreateLogStreamParamsTtlInDaysEnum | string  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): CreateLogStreamParamsTtlInDaysEnum | string | undefined {
        return this['ttl_in_days'];
    }
    public withTags(tags: Array<TagsBody>): CreateLogStreamParams {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLogStreamParamsLogStreamNameEnum {
    LTS_STREAM_13CI = 'lts-stream-13ci'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLogStreamParamsTtlInDaysEnum {
    E_7 = '7'
}
