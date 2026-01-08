

export class ListDesktopSnapshotRequest {
    private 'desktop_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'desktop_name'?: string;
    private 'desktop_names'?: Array<string>;
    private 'snapshot_name'?: string;
    private 'snapshot_names'?: Array<string>;
    private 'disk_type'?: ListDesktopSnapshotRequestDiskTypeEnum | string;
    private 'create_type'?: ListDesktopSnapshotRequestCreateTypeEnum | string;
    public status?: string;
    private 'sort_field'?: ListDesktopSnapshotRequestSortFieldEnum | string;
    private 'sort_type'?: ListDesktopSnapshotRequestSortTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): ListDesktopSnapshotRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): ListDesktopSnapshotRequest {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withDesktopName(desktopName: string): ListDesktopSnapshotRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopNames(desktopNames: Array<string>): ListDesktopSnapshotRequest {
        this['desktop_names'] = desktopNames;
        return this;
    }
    public set desktopNames(desktopNames: Array<string>  | undefined) {
        this['desktop_names'] = desktopNames;
    }
    public get desktopNames(): Array<string> | undefined {
        return this['desktop_names'];
    }
    public withSnapshotName(snapshotName: string): ListDesktopSnapshotRequest {
        this['snapshot_name'] = snapshotName;
        return this;
    }
    public set snapshotName(snapshotName: string  | undefined) {
        this['snapshot_name'] = snapshotName;
    }
    public get snapshotName(): string | undefined {
        return this['snapshot_name'];
    }
    public withSnapshotNames(snapshotNames: Array<string>): ListDesktopSnapshotRequest {
        this['snapshot_names'] = snapshotNames;
        return this;
    }
    public set snapshotNames(snapshotNames: Array<string>  | undefined) {
        this['snapshot_names'] = snapshotNames;
    }
    public get snapshotNames(): Array<string> | undefined {
        return this['snapshot_names'];
    }
    public withDiskType(diskType: ListDesktopSnapshotRequestDiskTypeEnum | string): ListDesktopSnapshotRequest {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: ListDesktopSnapshotRequestDiskTypeEnum | string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): ListDesktopSnapshotRequestDiskTypeEnum | string | undefined {
        return this['disk_type'];
    }
    public withCreateType(createType: ListDesktopSnapshotRequestCreateTypeEnum | string): ListDesktopSnapshotRequest {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: ListDesktopSnapshotRequestCreateTypeEnum | string  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): ListDesktopSnapshotRequestCreateTypeEnum | string | undefined {
        return this['create_type'];
    }
    public withStatus(status: string): ListDesktopSnapshotRequest {
        this['status'] = status;
        return this;
    }
    public withSortField(sortField: ListDesktopSnapshotRequestSortFieldEnum | string): ListDesktopSnapshotRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListDesktopSnapshotRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListDesktopSnapshotRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListDesktopSnapshotRequestSortTypeEnum | string): ListDesktopSnapshotRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListDesktopSnapshotRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListDesktopSnapshotRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withOffset(offset: number): ListDesktopSnapshotRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopSnapshotRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDesktopSnapshotRequestDiskTypeEnum {
    SYSTEM_DISK = 'SYSTEM_DISK',
    DATA_DISKS = 'DATA_DISKS',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDesktopSnapshotRequestCreateTypeEnum {
    AUTO = 'AUTO',
    MANUALLY = 'MANUALLY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDesktopSnapshotRequestSortFieldEnum {
    CREATE_TIME = 'create_time',
    SNAPSHOT_NAME = 'snapshot_name'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDesktopSnapshotRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
