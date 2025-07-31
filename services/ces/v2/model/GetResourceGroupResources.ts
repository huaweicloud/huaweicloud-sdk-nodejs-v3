import { ResourceDimension } from './ResourceDimension';


export class GetResourceGroupResources {
    public status?: GetResourceGroupResourcesStatusEnum | string;
    public dimensions?: Array<ResourceDimension>;
    public tags?: string;
    private 'enterprise_project_id'?: string;
    private 'event_status'?: GetResourceGroupResourcesEventStatusEnum | string;
    private 'resource_name'?: string;
    public constructor(status?: string, dimensions?: Array<ResourceDimension>) { 
        this['status'] = status;
        this['dimensions'] = dimensions;
    }
    public withStatus(status: GetResourceGroupResourcesStatusEnum | string): GetResourceGroupResources {
        this['status'] = status;
        return this;
    }
    public withDimensions(dimensions: Array<ResourceDimension>): GetResourceGroupResources {
        this['dimensions'] = dimensions;
        return this;
    }
    public withTags(tags: string): GetResourceGroupResources {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GetResourceGroupResources {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEventStatus(eventStatus: GetResourceGroupResourcesEventStatusEnum | string): GetResourceGroupResources {
        this['event_status'] = eventStatus;
        return this;
    }
    public set eventStatus(eventStatus: GetResourceGroupResourcesEventStatusEnum | string  | undefined) {
        this['event_status'] = eventStatus;
    }
    public get eventStatus(): GetResourceGroupResourcesEventStatusEnum | string | undefined {
        return this['event_status'];
    }
    public withResourceName(resourceName: string): GetResourceGroupResources {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetResourceGroupResourcesStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
/**
    * @export
    * @enum {string}
    */
export enum GetResourceGroupResourcesEventStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
