import { Customttribute } from './Customttribute';


export class ExecuteResourceInstance {
    private 'resource_id'?: string;
    private 'region_id'?: string;
    public provider?: string;
    public type?: ExecuteResourceInstanceTypeEnum | string;
    private 'custom_attributes'?: Array<Customttribute>;
    private 'agent_sn'?: string;
    private 'project_id'?: string;
    public constructor(resourceId?: string, regionId?: string) { 
        this['resource_id'] = resourceId;
        this['region_id'] = regionId;
    }
    public withResourceId(resourceId: string): ExecuteResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withRegionId(regionId: string): ExecuteResourceInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProvider(provider: string): ExecuteResourceInstance {
        this['provider'] = provider;
        return this;
    }
    public withType(type: ExecuteResourceInstanceTypeEnum | string): ExecuteResourceInstance {
        this['type'] = type;
        return this;
    }
    public withCustomAttributes(customAttributes: Array<Customttribute>): ExecuteResourceInstance {
        this['custom_attributes'] = customAttributes;
        return this;
    }
    public set customAttributes(customAttributes: Array<Customttribute>  | undefined) {
        this['custom_attributes'] = customAttributes;
    }
    public get customAttributes(): Array<Customttribute> | undefined {
        return this['custom_attributes'];
    }
    public withAgentSn(agentSn: string): ExecuteResourceInstance {
        this['agent_sn'] = agentSn;
        return this;
    }
    public set agentSn(agentSn: string  | undefined) {
        this['agent_sn'] = agentSn;
    }
    public get agentSn(): string | undefined {
        return this['agent_sn'];
    }
    public withProjectId(projectId: string): ExecuteResourceInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteResourceInstanceTypeEnum {
    CLOUDSERVER = 'CLOUDSERVER'
}
