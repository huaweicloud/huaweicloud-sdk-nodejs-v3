

export class GroupInfo {
    public id?: string;
    public name?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'sync_mode'?: string;
    public vendor?: string;
    private 'sync_rules'?: string;
    private 'relation_configurations'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): GroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupInfo {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): GroupInfo {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): GroupInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): GroupInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withApplicationId(applicationId: string): GroupInfo {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): GroupInfo {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withSyncMode(syncMode: string): GroupInfo {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withVendor(vendor: string): GroupInfo {
        this['vendor'] = vendor;
        return this;
    }
    public withSyncRules(syncRules: string): GroupInfo {
        this['sync_rules'] = syncRules;
        return this;
    }
    public set syncRules(syncRules: string  | undefined) {
        this['sync_rules'] = syncRules;
    }
    public get syncRules(): string | undefined {
        return this['sync_rules'];
    }
    public withRelationConfigurations(relationConfigurations: Array<string>): GroupInfo {
        this['relation_configurations'] = relationConfigurations;
        return this;
    }
    public set relationConfigurations(relationConfigurations: Array<string>  | undefined) {
        this['relation_configurations'] = relationConfigurations;
    }
    public get relationConfigurations(): Array<string> | undefined {
        return this['relation_configurations'];
    }
}