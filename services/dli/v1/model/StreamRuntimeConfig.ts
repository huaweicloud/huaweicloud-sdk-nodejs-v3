import { FlinkRuntimeConfig } from './FlinkRuntimeConfig';
import { Properties } from './Properties';
import { StreamLoggingConfig } from './StreamLoggingConfig';


export class StreamRuntimeConfig {
    private 'staging_uri'?: string;
    public logging?: StreamLoggingConfig;
    public properties?: Properties;
    private 'flink_runtime_config'?: FlinkRuntimeConfig;
    public constructor() { 
    }
    public withStagingUri(stagingUri: string): StreamRuntimeConfig {
        this['staging_uri'] = stagingUri;
        return this;
    }
    public set stagingUri(stagingUri: string  | undefined) {
        this['staging_uri'] = stagingUri;
    }
    public get stagingUri(): string | undefined {
        return this['staging_uri'];
    }
    public withLogging(logging: StreamLoggingConfig): StreamRuntimeConfig {
        this['logging'] = logging;
        return this;
    }
    public withProperties(properties: Properties): StreamRuntimeConfig {
        this['properties'] = properties;
        return this;
    }
    public withFlinkRuntimeConfig(flinkRuntimeConfig: FlinkRuntimeConfig): StreamRuntimeConfig {
        this['flink_runtime_config'] = flinkRuntimeConfig;
        return this;
    }
    public set flinkRuntimeConfig(flinkRuntimeConfig: FlinkRuntimeConfig  | undefined) {
        this['flink_runtime_config'] = flinkRuntimeConfig;
    }
    public get flinkRuntimeConfig(): FlinkRuntimeConfig | undefined {
        return this['flink_runtime_config'];
    }
}