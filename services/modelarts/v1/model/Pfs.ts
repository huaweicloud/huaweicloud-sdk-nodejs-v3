

export class Pfs {
    private 'pfs_path'?: string;
    private 'local_path'?: string;
    public constructor() { 
    }
    public withPfsPath(pfsPath: string): Pfs {
        this['pfs_path'] = pfsPath;
        return this;
    }
    public set pfsPath(pfsPath: string  | undefined) {
        this['pfs_path'] = pfsPath;
    }
    public get pfsPath(): string | undefined {
        return this['pfs_path'];
    }
    public withLocalPath(localPath: string): Pfs {
        this['local_path'] = localPath;
        return this;
    }
    public set localPath(localPath: string  | undefined) {
        this['local_path'] = localPath;
    }
    public get localPath(): string | undefined {
        return this['local_path'];
    }
}