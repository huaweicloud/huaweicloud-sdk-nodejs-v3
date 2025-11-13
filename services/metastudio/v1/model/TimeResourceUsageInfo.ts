import { ResourceUsageInfo } from './ResourceUsageInfo';


export class TimeResourceUsageInfo {
    public time?: string;
    private 'resources_usage'?: Array<ResourceUsageInfo>;
    public constructor() { 
    }
    public withTime(time: string): TimeResourceUsageInfo {
        this['time'] = time;
        return this;
    }
    public withResourcesUsage(resourcesUsage: Array<ResourceUsageInfo>): TimeResourceUsageInfo {
        this['resources_usage'] = resourcesUsage;
        return this;
    }
    public set resourcesUsage(resourcesUsage: Array<ResourceUsageInfo>  | undefined) {
        this['resources_usage'] = resourcesUsage;
    }
    public get resourcesUsage(): Array<ResourceUsageInfo> | undefined {
        return this['resources_usage'];
    }
}