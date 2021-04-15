

export class ListResizeFlavorsRequest {
    private 'instance_uuid'?: string | undefined;
    public limit?: number;
    public marker?: string;
    private 'sort_dir'?: ListResizeFlavorsRequestSortDirEnum | undefined;
    private 'sort_key'?: ListResizeFlavorsRequestSortKeyEnum | undefined;
    private 'source_flavor_id'?: string | undefined;
    private 'source_flavor_name'?: string | undefined;
    public constructor() { 
    }
    public withInstanceUuid(instanceUuid: string): ListResizeFlavorsRequest {
        this['instance_uuid'] = instanceUuid;
        return this;
    }
    public set instanceUuid(instanceUuid: string | undefined) {
        this['instance_uuid'] = instanceUuid;
    }
    public get instanceUuid() {
        return this['instance_uuid'];
    }
    public withLimit(limit: number): ListResizeFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResizeFlavorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortDir(sortDir: ListResizeFlavorsRequestSortDirEnum): ListResizeFlavorsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListResizeFlavorsRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: ListResizeFlavorsRequestSortKeyEnum): ListResizeFlavorsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListResizeFlavorsRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSourceFlavorId(sourceFlavorId: string): ListResizeFlavorsRequest {
        this['source_flavor_id'] = sourceFlavorId;
        return this;
    }
    public set sourceFlavorId(sourceFlavorId: string | undefined) {
        this['source_flavor_id'] = sourceFlavorId;
    }
    public get sourceFlavorId() {
        return this['source_flavor_id'];
    }
    public withSourceFlavorName(sourceFlavorName: string): ListResizeFlavorsRequest {
        this['source_flavor_name'] = sourceFlavorName;
        return this;
    }
    public set sourceFlavorName(sourceFlavorName: string | undefined) {
        this['source_flavor_name'] = sourceFlavorName;
    }
    public get sourceFlavorName() {
        return this['source_flavor_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResizeFlavorsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListResizeFlavorsRequestSortKeyEnum {
    FLAVORID = 'flavorid',
    SORT_KEY = 'sort_key',
    NAME = 'name',
    MEMORY_MB = 'memory_mb',
    VCPUS = 'vcpus',
    ROOT_GB = 'root_gb'
}
