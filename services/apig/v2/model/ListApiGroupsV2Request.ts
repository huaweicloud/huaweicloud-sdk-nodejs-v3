

export class ListApiGroupsV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListApiGroupsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApiGroupsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApiGroupsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListApiGroupsV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListApiGroupsV2Request {
        this['name'] = name;
        return this;
    }
    public withPreciseSearch(preciseSearch: string): ListApiGroupsV2Request {
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