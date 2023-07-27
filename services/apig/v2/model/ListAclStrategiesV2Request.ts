

export class ListAclStrategiesV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    private 'acl_type'?: string;
    private 'entity_type'?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAclStrategiesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAclStrategiesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAclStrategiesV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListAclStrategiesV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAclStrategiesV2Request {
        this['name'] = name;
        return this;
    }
    public withAclType(aclType: string): ListAclStrategiesV2Request {
        this['acl_type'] = aclType;
        return this;
    }
    public set aclType(aclType: string  | undefined) {
        this['acl_type'] = aclType;
    }
    public get aclType(): string | undefined {
        return this['acl_type'];
    }
    public withEntityType(entityType: string): ListAclStrategiesV2Request {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): string | undefined {
        return this['entity_type'];
    }
    public withPreciseSearch(preciseSearch: string): ListAclStrategiesV2Request {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
}