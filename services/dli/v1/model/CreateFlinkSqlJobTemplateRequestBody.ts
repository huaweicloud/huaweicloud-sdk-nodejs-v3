import { Tag } from './Tag';


export class CreateFlinkSqlJobTemplateRequestBody {
    public name?: string;
    public desc?: string;
    private 'sql_body'?: string;
    public tags?: Array<Tag>;
    private 'job_type'?: CreateFlinkSqlJobTemplateRequestBodyJobTypeEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateFlinkSqlJobTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): CreateFlinkSqlJobTemplateRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withSqlBody(sqlBody: string): CreateFlinkSqlJobTemplateRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withTags(tags: Array<Tag>): CreateFlinkSqlJobTemplateRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withJobType(jobType: CreateFlinkSqlJobTemplateRequestBodyJobTypeEnum | string): CreateFlinkSqlJobTemplateRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: CreateFlinkSqlJobTemplateRequestBodyJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): CreateFlinkSqlJobTemplateRequestBodyJobTypeEnum | string | undefined {
        return this['job_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFlinkSqlJobTemplateRequestBodyJobTypeEnum {
    FLINK_SQL_JOB = 'flink_sql_job',
    FLINK_OPENSOURCE_SQL_JOB = 'flink_opensource_sql_job'
}
