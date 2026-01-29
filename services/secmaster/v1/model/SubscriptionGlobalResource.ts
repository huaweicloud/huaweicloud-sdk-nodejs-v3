import { SubscriptionResourceInfo } from './SubscriptionResourceInfo';


export class SubscriptionGlobalResource {
    private 'project_id'?: string;
    private 'region_id'?: string;
    public resources?: Array<SubscriptionResourceInfo>;
    public constructor() { 
    }
    public withProjectId(projectId: string): SubscriptionGlobalResource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): SubscriptionGlobalResource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResources(resources: Array<SubscriptionResourceInfo>): SubscriptionGlobalResource {
        this['resources'] = resources;
        return this;
    }
}