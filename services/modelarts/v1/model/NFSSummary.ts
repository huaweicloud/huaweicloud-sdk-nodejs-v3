

export class NFSSummary {
    private 'nfs_path'?: string;
    public constructor(nfsPath?: string) { 
        this['nfs_path'] = nfsPath;
    }
    public withNfsPath(nfsPath: string): NFSSummary {
        this['nfs_path'] = nfsPath;
        return this;
    }
    public set nfsPath(nfsPath: string  | undefined) {
        this['nfs_path'] = nfsPath;
    }
    public get nfsPath(): string | undefined {
        return this['nfs_path'];
    }
}