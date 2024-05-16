import { TagFilter } from './TagFilter';


export class SearchResourceSharesReqBody {
    public limit?: number;
    public name?: string;
    public marker?: string;
    private 'permission_id'?: string;
    private 'resource_owner'?: SearchResourceSharesReqBodyResourceOwnerEnum | string;
    private 'resource_share_ids'?: Array<string>;
    private 'resource_share_status'?: string;
    private 'tag_filters'?: Array<TagFilter>;
    public constructor(resourceOwner?: string) { 
        this['resource_owner'] = resourceOwner;
    }
    public withLimit(limit: number): SearchResourceSharesReqBody {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): SearchResourceSharesReqBody {
        this['name'] = name;
        return this;
    }
    public withMarker(marker: string): SearchResourceSharesReqBody {
        this['marker'] = marker;
        return this;
    }
    public withPermissionId(permissionId: string): SearchResourceSharesReqBody {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
    public withResourceOwner(resourceOwner: SearchResourceSharesReqBodyResourceOwnerEnum | string): SearchResourceSharesReqBody {
        this['resource_owner'] = resourceOwner;
        return this;
    }
    public set resourceOwner(resourceOwner: SearchResourceSharesReqBodyResourceOwnerEnum | string  | undefined) {
        this['resource_owner'] = resourceOwner;
    }
    public get resourceOwner(): SearchResourceSharesReqBodyResourceOwnerEnum | string | undefined {
        return this['resource_owner'];
    }
    public withResourceShareIds(resourceShareIds: Array<string>): SearchResourceSharesReqBody {
        this['resource_share_ids'] = resourceShareIds;
        return this;
    }
    public set resourceShareIds(resourceShareIds: Array<string>  | undefined) {
        this['resource_share_ids'] = resourceShareIds;
    }
    public get resourceShareIds(): Array<string> | undefined {
        return this['resource_share_ids'];
    }
    public withResourceShareStatus(resourceShareStatus: string): SearchResourceSharesReqBody {
        this['resource_share_status'] = resourceShareStatus;
        return this;
    }
    public set resourceShareStatus(resourceShareStatus: string  | undefined) {
        this['resource_share_status'] = resourceShareStatus;
    }
    public get resourceShareStatus(): string | undefined {
        return this['resource_share_status'];
    }
    public withTagFilters(tagFilters: Array<TagFilter>): SearchResourceSharesReqBody {
        this['tag_filters'] = tagFilters;
        return this;
    }
    public set tagFilters(tagFilters: Array<TagFilter>  | undefined) {
        this['tag_filters'] = tagFilters;
    }
    public get tagFilters(): Array<TagFilter> | undefined {
        return this['tag_filters'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchResourceSharesReqBodyResourceOwnerEnum {
    SELF = 'self',
    OTHER_ACCOUNTS = 'other-accounts'
}
