

export class BtrfsSubvolumn {
    public uuid?: string;
    private 'is_snapshot'?: string;
    private 'subvol_id'?: string;
    private 'parent_id'?: string;
    private 'subvol_name'?: string;
    private 'subvol_mount_path'?: string;
    public constructor(uuid?: string, isSnapshot?: string, subvolId?: string, parentId?: string, subvolName?: string, subvolMountPath?: string) { 
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
    public set isSnapshot(isSnapshot: string  | undefined) {
        this['is_snapshot'] = isSnapshot;
    }
    public get isSnapshot(): string | undefined {
        return this['is_snapshot'];
    }
    public withSubvolId(subvolId: string): BtrfsSubvolumn {
        this['subvol_id'] = subvolId;
        return this;
    }
    public set subvolId(subvolId: string  | undefined) {
        this['subvol_id'] = subvolId;
    }
    public get subvolId(): string | undefined {
        return this['subvol_id'];
    }
    public withParentId(parentId: string): BtrfsSubvolumn {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSubvolName(subvolName: string): BtrfsSubvolumn {
        this['subvol_name'] = subvolName;
        return this;
    }
    public set subvolName(subvolName: string  | undefined) {
        this['subvol_name'] = subvolName;
    }
    public get subvolName(): string | undefined {
        return this['subvol_name'];
    }
    public withSubvolMountPath(subvolMountPath: string): BtrfsSubvolumn {
        this['subvol_mount_path'] = subvolMountPath;
        return this;
    }
    public set subvolMountPath(subvolMountPath: string  | undefined) {
        this['subvol_mount_path'] = subvolMountPath;
    }
    public get subvolMountPath(): string | undefined {
        return this['subvol_mount_path'];
    }
}