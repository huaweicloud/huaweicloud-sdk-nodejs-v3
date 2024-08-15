import { Customttribute } from './Customttribute';
import { ResourceInstanceProp } from './ResourceInstanceProp';


export class ResourceInstance {
    private 'resource_id'?: string;
    public provider?: string;
    private 'region_id'?: string;
    public type?: ResourceInstanceTypeEnum | string;
    private 'custom_attributes'?: Array<Customttribute>;
    private 'agent_sn'?: string;
    private 'agent_status'?: string;
    public properties?: ResourceInstanceProp;
    public constructor(resourceId?: string, provider?: string, regionId?: string, type?: string) { 
        this['resource_id'] = resourceId;
        this['provider'] = provider;
        this['region_id'] = regionId;
        this['type'] = type;
    }
    public withResourceId(resourceId: string): ResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withProvider(provider: string): ResourceInstance {
        this['provider'] = provider;
        return this;
    }
    public withRegionId(regionId: string): ResourceInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withType(type: ResourceInstanceTypeEnum | string): ResourceInstance {
        this['type'] = type;
        return this;
    }
    public withCustomAttributes(customAttributes: Array<Customttribute>): ResourceInstance {
        this['custom_attributes'] = customAttributes;
        return this;
    }
    public set customAttributes(customAttributes: Array<Customttribute>  | undefined) {
        this['custom_attributes'] = customAttributes;
    }
    public get customAttributes(): Array<Customttribute> | undefined {
        return this['custom_attributes'];
    }
    public withAgentSn(agentSn: string): ResourceInstance {
        this['agent_sn'] = agentSn;
        return this;
    }
    public set agentSn(agentSn: string  | undefined) {
        this['agent_sn'] = agentSn;
    }
    public get agentSn(): string | undefined {
        return this['agent_sn'];
    }
    public withAgentStatus(agentStatus: string): ResourceInstance {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProperties(properties: ResourceInstanceProp): ResourceInstance {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceInstanceTypeEnum {
    CLOUDSERVER = 'CLOUDSERVER'
}
