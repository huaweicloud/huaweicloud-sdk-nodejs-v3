

export class ListImageRequest {
    public limit?: number;
    public name?: string;
    private 'name_fuzzy_match'?: boolean;
    public namespace?: string;
    public offset?: number;
    private 'service_type'?: ListImageRequestServiceTypeEnum | string;
    private 'sort_dir'?: ListImageRequestSortDirEnum | string;
    private 'sort_key'?: string;
    public type?: ListImageRequestTypeEnum | string;
    private 'workspace_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListImageRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListImageRequest {
        this['name'] = name;
        return this;
    }
    public withNameFuzzyMatch(nameFuzzyMatch: boolean): ListImageRequest {
        this['name_fuzzy_match'] = nameFuzzyMatch;
        return this;
    }
    public set nameFuzzyMatch(nameFuzzyMatch: boolean  | undefined) {
        this['name_fuzzy_match'] = nameFuzzyMatch;
    }
    public get nameFuzzyMatch(): boolean | undefined {
        return this['name_fuzzy_match'];
    }
    public withNamespace(namespace: string): ListImageRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withOffset(offset: number): ListImageRequest {
        this['offset'] = offset;
        return this;
    }
    public withServiceType(serviceType: ListImageRequestServiceTypeEnum | string): ListImageRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListImageRequestServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ListImageRequestServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSortDir(sortDir: ListImageRequestSortDirEnum | string): ListImageRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListImageRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListImageRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListImageRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withType(type: ListImageRequestTypeEnum | string): ListImageRequest {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListImageRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withShowName(showName: string): ListImageRequest {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): ListImageRequest {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImageRequestServiceTypeEnum {
    COMMON = 'COMMON',
    DEV = 'DEV',
    INFERENCE = 'INFERENCE',
    TRAIN = 'TRAIN',
    UNKNOWN = 'UNKNOWN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImageRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImageRequestTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
