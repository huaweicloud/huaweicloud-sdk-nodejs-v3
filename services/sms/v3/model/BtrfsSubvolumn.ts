

export class BtrfsSubvolumn {
    public uuid: string;
    private 'is_snapshot': string | undefined;
    private 'subvol_id': string | undefined;
    private 'parent_id': string | undefined;
    private 'subvol_name': string | undefined;
    private 'subvol_mount_path': string | undefined;
    public constructor(uuid?: any, isSnapshot?: any, subvolId?: any, parentId?: any, subvolName?: any, subvolMountPath?: any) { 
        this['uuid'] = uuid;
        this['is_snapshot'] = isSnapshot;
        this['subvol_id'] = subvolId;
        this['parent_id'] = parentId;
        this['subvol_name'] = subvolName;
        this['subvol_mount_path'] = subvolMountPath;
    }
    public withUuid(uuid: string): BtrfsSubvolumn {
        this['uuid'] = uuid;
        return this;
    }
    public withIsSnapshot(isSnapshot: string): BtrfsSubvolumn {
        this['is_snapshot'] = isSnapshot;
        return this;
    }
    public set isSnapshot(isSnapshot: string | undefined) {
        this['is_snapshot'] = isSnapshot;
    }
    public get isSnapshot() {
        return this['is_snapshot'];
    }
    public withSubvolId(subvolId: string): BtrfsSubvolumn {
        this['subvol_id'] = subvolId;
        return this;
    }
    public set subvolId(subvolId: string | undefined) {
        this['subvol_id'] = subvolId;
    }
    public get subvolId() {
        return this['subvol_id'];
    }
    public withParentId(parentId: string): BtrfsSubvolumn {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withSubvolName(subvolName: string): BtrfsSubvolumn {
        this['subvol_name'] = subvolName;
        return this;
    }
    public set subvolName(subvolName: string | undefined) {
        this['subvol_name'] = subvolName;
    }
    public get subvolName() {
        return this['subvol_name'];
    }
    public withSubvolMountPath(subvolMountPath: string): BtrfsSubvolumn {
        this['subvol_mount_path'] = subvolMountPath;
        return this;
    }
    public set subvolMountPath(subvolMountPath: string | undefined) {
        this['subvol_mount_path'] = subvolMountPath;
    }
    public get subvolMountPath() {
        return this['subvol_mount_path'];
    }
}