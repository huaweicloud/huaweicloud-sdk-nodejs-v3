import { Metric } from './Metric';


export class DesktopMetric {
    private 'resource_id'?: string;
    private 'resource_pool_id'?: string;
    private 'resource_name'?: string;
    public metric?: Array<Metric>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): DesktopMetric {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourcePoolId(resourcePoolId: string): DesktopMetric {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withResourceName(resourceName: string): DesktopMetric {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withMetric(metric: Array<Metric>): DesktopMetric {
        this['metric'] = metric;
        return this;
    }
}