import { ResourceDimension } from './ResourceDimension';


export class GetResourceGroupResources {
    public status?: GetResourceGroupResourcesStatusEnum | string;
    public dimensions?: Array<ResourceDimension>;
    public tags?: string;
    private 'enterprise_project_id'?: string;
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
