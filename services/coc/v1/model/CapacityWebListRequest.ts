import { CapacityWebListRequestProviderObj } from './CapacityWebListRequestProviderObj';


export class CapacityWebListRequest {
    private 'group_id'?: string;
    private 'component_id'?: string;
    private 'application_id'?: string;
    private 'domain_id'?: string;
    private 'provider_obj'?: Array<CapacityWebListRequestProviderObj>;
    public constructor(providerObj?: Array<CapacityWebListRequestProviderObj>) { 
        this['provider_obj'] = providerObj;
    }
    public withGroupId(groupId: string): CapacityWebListRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withComponentId(componentId: string): CapacityWebListRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): CapacityWebListRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withDomainId(domainId: string): CapacityWebListRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProviderObj(providerObj: Array<CapacityWebListRequestProviderObj>): CapacityWebListRequest {
        this['provider_obj'] = providerObj;
        return this;
    }
    public set providerObj(providerObj: Array<CapacityWebListRequestProviderObj>  | undefined) {
        this['provider_obj'] = providerObj;
    }
    public get providerObj(): Array<CapacityWebListRequestProviderObj> | undefined {
        return this['provider_obj'];
    }
}