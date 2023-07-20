import { TmsTagEntity } from './TmsTagEntity';


export class CreateFlinkTemplateRequestBody {
    public name?: string;
    public desc?: string;
    private 'sql_body'?: string;
    public tags?: Array<TmsTagEntity>;
    private 'job_type'?: CreateFlinkTemplateRequestBodyJobTypeEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateFlinkTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): CreateFlinkTemplateRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withSqlBody(sqlBody: string): CreateFlinkTemplateRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withTags(tags: Array<TmsTagEntity>): CreateFlinkTemplateRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withJobType(jobType: CreateFlinkTemplateRequestBodyJobTypeEnum | string): CreateFlinkTemplateRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: CreateFlinkTemplateRequestBodyJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): CreateFlinkTemplateRequestBodyJobTypeEnum | string | undefined {
        return this['job_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFlinkTemplateRequestBodyJobTypeEnum {
    FLINK_SQL_JOB = 'flink_sql_job',
    FLINK_OPENSOURCE_SQL_JOB = 'flink_opensource_sql_job'
}
