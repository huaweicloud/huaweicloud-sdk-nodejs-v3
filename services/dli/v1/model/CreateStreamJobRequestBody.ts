import { FlinkJarParameter } from './FlinkJarParameter';
import { FlinkSqlParameter } from './FlinkSqlParameter';
import { StreamEnvironmentConfig } from './StreamEnvironmentConfig';
import { StreamRuntimeConfig } from './StreamRuntimeConfig';
import { Tag } from './Tag';


export class CreateStreamJobRequestBody {
    private 'transaction_id'?: string;
    private 'job_type'?: string;
    public description?: string;
    public tags?: Array<Tag>;
    private 'environment_config'?: StreamEnvironmentConfig;
    private 'runtime_config'?: StreamRuntimeConfig;
    private 'flink_sql_parameter'?: FlinkSqlParameter;
    private 'flink_jar_parameter'?: FlinkJarParameter;
    public constructor(transactionId?: string) { 
        this['transaction_id'] = transactionId;
    }
    public withTransactionId(transactionId: string): CreateStreamJobRequestBody {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withJobType(jobType: string): CreateStreamJobRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withDescription(description: string): CreateStreamJobRequestBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateStreamJobRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withEnvironmentConfig(environmentConfig: StreamEnvironmentConfig): CreateStreamJobRequestBody {
        this['environment_config'] = environmentConfig;
        return this;
    }
    public set environmentConfig(environmentConfig: StreamEnvironmentConfig  | undefined) {
        this['environment_config'] = environmentConfig;
    }
    public get environmentConfig(): StreamEnvironmentConfig | undefined {
        return this['environment_config'];
    }
    public withRuntimeConfig(runtimeConfig: StreamRuntimeConfig): CreateStreamJobRequestBody {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: StreamRuntimeConfig  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): StreamRuntimeConfig | undefined {
        return this['runtime_config'];
    }
    public withFlinkSqlParameter(flinkSqlParameter: FlinkSqlParameter): CreateStreamJobRequestBody {
        this['flink_sql_parameter'] = flinkSqlParameter;
        return this;
    }
    public set flinkSqlParameter(flinkSqlParameter: FlinkSqlParameter  | undefined) {
        this['flink_sql_parameter'] = flinkSqlParameter;
    }
    public get flinkSqlParameter(): FlinkSqlParameter | undefined {
        return this['flink_sql_parameter'];
    }
    public withFlinkJarParameter(flinkJarParameter: FlinkJarParameter): CreateStreamJobRequestBody {
        this['flink_jar_parameter'] = flinkJarParameter;
        return this;
    }
    public set flinkJarParameter(flinkJarParameter: FlinkJarParameter  | undefined) {
        this['flink_jar_parameter'] = flinkJarParameter;
    }
    public get flinkJarParameter(): FlinkJarParameter | undefined {
        return this['flink_jar_parameter'];
    }
}