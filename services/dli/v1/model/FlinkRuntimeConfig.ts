import { FlinkResourceConfig } from './FlinkResourceConfig';
import { FlinkRestoreStrategy } from './FlinkRestoreStrategy';


export class FlinkRuntimeConfig {
    public version?: string;
    private 'restore_strategy'?: FlinkRestoreStrategy;
    private 'resource_config'?: FlinkResourceConfig;
    public constructor() { 
    }
    public withVersion(version: string): FlinkRuntimeConfig {
        this['version'] = version;
        return this;
    }
    public withRestoreStrategy(restoreStrategy: FlinkRestoreStrategy): FlinkRuntimeConfig {
        this['restore_strategy'] = restoreStrategy;
        return this;
    }
    public set restoreStrategy(restoreStrategy: FlinkRestoreStrategy  | undefined) {
        this['restore_strategy'] = restoreStrategy;
    }
    public get restoreStrategy(): FlinkRestoreStrategy | undefined {
        return this['restore_strategy'];
    }
    public withResourceConfig(resourceConfig: FlinkResourceConfig): FlinkRuntimeConfig {
        this['resource_config'] = resourceConfig;
        return this;
    }
    public set resourceConfig(resourceConfig: FlinkResourceConfig  | undefined) {
        this['resource_config'] = resourceConfig;
    }
    public get resourceConfig(): FlinkResourceConfig | undefined {
        return this['resource_config'];
    }
}