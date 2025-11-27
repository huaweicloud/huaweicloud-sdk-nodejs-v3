import { GroupRelationConfiguration } from './GroupRelationConfiguration';


export class GroupQueryResponseData {
    public id?: string;
    public name?: string;
    public vendor?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'component_id'?: string;
    private 'application_id'?: string;
    private 'ep_id'?: string;
    private 'sync_mode'?: string;
    private 'rule_tags'?: string;
    private 'relation_configurations'?: Array<GroupRelationConfiguration>;
    public constructor(epId?: string) { 
        this['ep_id'] = epId;
    }
    public withId(id: string): GroupQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withVendor(vendor: string): GroupQueryResponseData {
        this['vendor'] = vendor;
        return this;
    }
    public withCode(code: string): GroupQueryResponseData {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): GroupQueryResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): GroupQueryResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withComponentId(componentId: string): GroupQueryResponseData {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): GroupQueryResponseData {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEpId(epId: string): GroupQueryResponseData {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withSyncMode(syncMode: string): GroupQueryResponseData {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withRuleTags(ruleTags: string): GroupQueryResponseData {
        this['rule_tags'] = ruleTags;
        return this;
    }
    public set ruleTags(ruleTags: string  | undefined) {
        this['rule_tags'] = ruleTags;
    }
    public get ruleTags(): string | undefined {
        return this['rule_tags'];
    }
    public withRelationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>): GroupQueryResponseData {
        this['relation_configurations'] = relationConfigurations;
        return this;
    }
    public set relationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>  | undefined) {
        this['relation_configurations'] = relationConfigurations;
    }
    public get relationConfigurations(): Array<GroupRelationConfiguration> | undefined {
        return this['relation_configurations'];
    }
}