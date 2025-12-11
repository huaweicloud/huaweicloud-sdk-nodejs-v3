

export class WtpProtectHostDirResponseInfo {
    private 'protect_dir'?: string;
    private 'exclude_child_dir'?: string;
    private 'exclude_file_path'?: string;
    private 'exclue_file_path'?: string;
    private 'local_backup_dir'?: string;
    private 'protect_status'?: string;
    public error?: string;
    public constructor() { 
    }
    public withProtectDir(protectDir: string): WtpProtectHostDirResponseInfo {
        this['protect_dir'] = protectDir;
        return this;
    }
    public set protectDir(protectDir: string  | undefined) {
        this['protect_dir'] = protectDir;
    }
    public get protectDir(): string | undefined {
        return this['protect_dir'];
    }
    public withExcludeChildDir(excludeChildDir: string): WtpProtectHostDirResponseInfo {
        this['exclude_child_dir'] = excludeChildDir;
        return this;
    }
    public set excludeChildDir(excludeChildDir: string  | undefined) {
        this['exclude_child_dir'] = excludeChildDir;
    }
    public get excludeChildDir(): string | undefined {
        return this['exclude_child_dir'];
    }
    public withExcludeFilePath(excludeFilePath: string): WtpProtectHostDirResponseInfo {
        this['exclude_file_path'] = excludeFilePath;
        return this;
    }
    public set excludeFilePath(excludeFilePath: string  | undefined) {
        this['exclude_file_path'] = excludeFilePath;
    }
    public get excludeFilePath(): string | undefined {
        return this['exclude_file_path'];
    }
    public withExclueFilePath(exclueFilePath: string): WtpProtectHostDirResponseInfo {
        this['exclue_file_path'] = exclueFilePath;
        return this;
    }
    public set exclueFilePath(exclueFilePath: string  | undefined) {
        this['exclue_file_path'] = exclueFilePath;
    }
    public get exclueFilePath(): string | undefined {
        return this['exclue_file_path'];
    }
    public withLocalBackupDir(localBackupDir: string): WtpProtectHostDirResponseInfo {
        this['local_backup_dir'] = localBackupDir;
        return this;
    }
    public set localBackupDir(localBackupDir: string  | undefined) {
        this['local_backup_dir'] = localBackupDir;
    }
    public get localBackupDir(): string | undefined {
        return this['local_backup_dir'];
    }
    public withProtectStatus(protectStatus: string): WtpProtectHostDirResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withError(error: string): WtpProtectHostDirResponseInfo {
        this['error'] = error;
        return this;
    }
}