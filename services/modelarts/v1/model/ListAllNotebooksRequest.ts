

export class ListAllNotebooksRequest {
    public feature?: ListAllNotebooksRequestFeatureEnum | string;
    public limit?: number;
    public name?: string;
    private 'pool_id'?: string;
    public offset?: number;
    public owner?: string;
    private 'sort_dir'?: ListAllNotebooksRequestSortDirEnum | string;
    private 'sort_key'?: string;
    public status?: ListAllNotebooksRequestStatusEnum | string;
    private 'workspace_id'?: string;
    public flavor?: string;
    private 'image_id'?: string;
    public id?: string;
    public billing?: string;
    public tags?: string;
    public constructor() { 
    }
    public withFeature(feature: ListAllNotebooksRequestFeatureEnum | string): ListAllNotebooksRequest {
        this['feature'] = feature;
        return this;
    }
    public withLimit(limit: number): ListAllNotebooksRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAllNotebooksRequest {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): ListAllNotebooksRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withOffset(offset: number): ListAllNotebooksRequest {
        this['offset'] = offset;
        return this;
    }
    public withOwner(owner: string): ListAllNotebooksRequest {
        this['owner'] = owner;
        return this;
    }
    public withSortDir(sortDir: ListAllNotebooksRequestSortDirEnum | string): ListAllNotebooksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListAllNotebooksRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListAllNotebooksRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListAllNotebooksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: ListAllNotebooksRequestStatusEnum | string): ListAllNotebooksRequest {
        this['status'] = status;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListAllNotebooksRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavor(flavor: string): ListAllNotebooksRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withImageId(imageId: string): ListAllNotebooksRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withId(id: string): ListAllNotebooksRequest {
        this['id'] = id;
        return this;
    }
    public withBilling(billing: string): ListAllNotebooksRequest {
        this['billing'] = billing;
        return this;
    }
    public withTags(tags: string): ListAllNotebooksRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllNotebooksRequestFeatureEnum {
    DEFAULT = 'DEFAULT',
    NOTEBOOK = 'NOTEBOOK'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllNotebooksRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllNotebooksRequestStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    CREATING = 'CREATING',
    DELETED = 'DELETED',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    FROZEN = 'FROZEN',
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    SNAPSHOTTING = 'SNAPSHOTTING',
    STARTING = 'STARTING',
    START_FAILED = 'START_FAILED',
    STOPPED = 'STOPPED',
    STOPPING = 'STOPPING'
}
