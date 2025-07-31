

export class WebTamperProtectHostDirRequestInfo {
    private 'protect_dir'?: string;
    private 'exclude_child_dir'?: string;
    private 'exclude_file_path'?: string;
    private 'local_backup_dir'?: string;
    public constructor() { 
    }
    public withProtectDir(protectDir: string): WebTamperProtectHostDirRequestInfo {
        this['protect_dir'] = protectDir;
        return this;
    }
    public set protectDir(protectDir: string  | undefined) {
        this['protect_dir'] = protectDir;
    }
    public get protectDir(): string | undefined {
        return this['protect_dir'];
    }
    public withExcludeChildDir(excludeChildDir: string): WebTamperProtectHostDirRequestInfo {
        this['exclude_child_dir'] = excludeChildDir;
        return this;
    }
    public set excludeChildDir(excludeChildDir: string  | undefined) {
        this['exclude_child_dir'] = excludeChildDir;
    }
    public get excludeChildDir(): string | undefined {
        return this['exclude_child_dir'];
    }
    public withExcludeFilePath(excludeFilePath: string): WebTamperProtectHostDirRequestInfo {
        this['exclude_file_path'] = excludeFilePath;
        return this;
    }
    public set excludeFilePath(excludeFilePath: string  | undefined) {
        this['exclude_file_path'] = excludeFilePath;
    }
    public get excludeFilePath(): string | undefined {
        return this['exclude_file_path'];
    }
    public withLocalBackupDir(localBackupDir: string): WebTamperProtectHostDirRequestInfo {
        this['local_backup_dir'] = localBackupDir;
        return this;
    }
    public set localBackupDir(localBackupDir: string  | undefined) {
        this['local_backup_dir'] = localBackupDir;
    }
    public get localBackupDir(): string | undefined {
        return this['local_backup_dir'];
    }
}