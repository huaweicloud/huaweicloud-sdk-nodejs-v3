

export class ListAppsV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    public status?: ListAppsV2RequestStatusEnum | number;
    private 'app_key'?: string;
    public creator?: string;
    private 'precise_search'?: string;
    private 'related_domain_id'?: string;
    private 'related_project_id'?: string;
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
    public withStatus(status: ListAppsV2RequestStatusEnum | number): ListAppsV2Request {
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
    public withRelatedDomainId(relatedDomainId: string): ListAppsV2Request {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelatedProjectId(relatedProjectId: string): ListAppsV2Request {
        this['related_project_id'] = relatedProjectId;
        return this;
    }
    public set relatedProjectId(relatedProjectId: string  | undefined) {
        this['related_project_id'] = relatedProjectId;
    }
    public get relatedProjectId(): string | undefined {
        return this['related_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAppsV2RequestStatusEnum {
    NUMBER_1 = 1
}
