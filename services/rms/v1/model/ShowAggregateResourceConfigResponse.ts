
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregateResourceConfigResponse extends SdkResponse {
    private 'resource_id'?: string;
    private 'aggregator_id'?: string;
    private 'aggregator_domain_id'?: string;
    private 'domain_id'?: string;
    private 'ep_id'?: string;
    public provider?: string;
    public type?: string;
    public name?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public created?: string;
    public updated?: string;
    public tags?: { [key: string]: string; };
    public properties?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withResourceId(resourceId: string): ShowAggregateResourceConfigResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withAggregatorId(aggregatorId: string): ShowAggregateResourceConfigResponse {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withAggregatorDomainId(aggregatorDomainId: string): ShowAggregateResourceConfigResponse {
        this['aggregator_domain_id'] = aggregatorDomainId;
        return this;
    }
    public set aggregatorDomainId(aggregatorDomainId: string  | undefined) {
        this['aggregator_domain_id'] = aggregatorDomainId;
    }
    public get aggregatorDomainId(): string | undefined {
        return this['aggregator_domain_id'];
    }
    public withDomainId(domainId: string): ShowAggregateResourceConfigResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEpId(epId: string): ShowAggregateResourceConfigResponse {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withProvider(provider: string): ShowAggregateResourceConfigResponse {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ShowAggregateResourceConfigResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ShowAggregateResourceConfigResponse {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): ShowAggregateResourceConfigResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): ShowAggregateResourceConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreated(created: string): ShowAggregateResourceConfigResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowAggregateResourceConfigResponse {
        this['updated'] = updated;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): ShowAggregateResourceConfigResponse {
        this['tags'] = tags;
        return this;
    }
    public withProperties(properties: { [key: string]: object; }): ShowAggregateResourceConfigResponse {
        this['properties'] = properties;
        return this;
    }
}