

export class FuncMount {
    private 'mount_type': string | undefined;
    private 'mount_resource': string | undefined;
    private 'mount_share_path'?: string | undefined;
    private 'local_mount_path': string | undefined;
    public constructor(mountType?: any, mountResource?: any, localMountPath?: any) { 
        this['mount_type'] = mountType;
        this['mount_resource'] = mountResource;
        this['local_mount_path'] = localMountPath;
    }
    public withMountType(mountType: string): FuncMount {
        this['mount_type'] = mountType;
        return this;
    }
    public set mountType(mountType: string | undefined) {
        this['mount_type'] = mountType;
    }
    public get mountType() {
        return this['mount_type'];
    }
    public withMountResource(mountResource: string): FuncMount {
        this['mount_resource'] = mountResource;
        return this;
    }
    public set mountResource(mountResource: string | undefined) {
        this['mount_resource'] = mountResource;
    }
    public get mountResource() {
        return this['mount_resource'];
    }
    public withMountSharePath(mountSharePath: string): FuncMount {
        this['mount_share_path'] = mountSharePath;
        return this;
    }
    public set mountSharePath(mountSharePath: string | undefined) {
        this['mount_share_path'] = mountSharePath;
    }
    public get mountSharePath() {
        return this['mount_share_path'];
    }
    public withLocalMountPath(localMountPath: string): FuncMount {
        this['local_mount_path'] = localMountPath;
        return this;
    }
    public set localMountPath(localMountPath: string | undefined) {
        this['local_mount_path'] = localMountPath;
    }
    public get localMountPath() {
        return this['local_mount_path'];
    }
}