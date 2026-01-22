import { ConfigInfo } from './ConfigInfo';


export class StatsConfigDetails {
    private 'config_type'?: number;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    private 'config_info'?: ConfigInfo;
    public constructor() { 
    }
    public withConfigType(configType: number): StatsConfigDetails {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: number  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): number | undefined {
        return this['config_type'];
    }
    public withResourceType(resourceType: string): StatsConfigDetails {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): StatsConfigDetails {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withConfigInfo(configInfo: ConfigInfo): StatsConfigDetails {
        this['config_info'] = configInfo;
        return this;
    }
    public set configInfo(configInfo: ConfigInfo  | undefined) {
        this['config_info'] = configInfo;
    }
    public get configInfo(): ConfigInfo | undefined {
        return this['config_info'];
    }
}