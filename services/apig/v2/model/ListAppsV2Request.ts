

export class ListAppsV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    public status?: number;
    private 'app_key'?: string;
    public creator?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAppsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAppsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListAppsV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAppsV2Request {
        this['name'] = name;
        return this;
    }
    public withStatus(status: number): ListAppsV2Request {
        this['status'] = status;
        return this;
    }
    public withAppKey(appKey: string): ListAppsV2Request {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withCreator(creator: string): ListAppsV2Request {
        this['creator'] = creator;
        return this;
    }
    public withPreciseSearch(preciseSearch: string): ListAppsV2Request {
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