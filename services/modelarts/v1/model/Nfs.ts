

export class Nfs {
    private 'nfs_server_path'?: string;
    private 'local_path'?: string;
    private 'read_only'?: boolean;
    public constructor() { 
    }
    public withNfsServerPath(nfsServerPath: string): Nfs {
        this['nfs_server_path'] = nfsServerPath;
        return this;
    }
    public set nfsServerPath(nfsServerPath: string  | undefined) {
        this['nfs_server_path'] = nfsServerPath;
    }
    public get nfsServerPath(): string | undefined {
        return this['nfs_server_path'];
    }
    public withLocalPath(localPath: string): Nfs {
        this['local_path'] = localPath;
        return this;
    }
    public set localPath(localPath: string  | undefined) {
        this['local_path'] = localPath;
    }
    public get localPath(): string | undefined {
        return this['local_path'];
    }
    public withReadOnly(readOnly: boolean): Nfs {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
}