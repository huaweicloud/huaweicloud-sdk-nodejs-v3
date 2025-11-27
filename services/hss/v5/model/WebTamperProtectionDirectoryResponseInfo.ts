

export class WebTamperProtectionDirectoryResponseInfo {
    private 'protect_directory'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    private 'backup_directory'?: string;
    private 'exclude_child_directory_list'?: Array<string>;
    private 'exclude_file_list'?: Array<string>;
    public constructor() { 
    }
    public withProtectDirectory(protectDirectory: string): WebTamperProtectionDirectoryResponseInfo {
        this['protect_directory'] = protectDirectory;
        return this;
    }
    public set protectDirectory(protectDirectory: string  | undefined) {
        this['protect_directory'] = protectDirectory;
    }
    public get protectDirectory(): string | undefined {
        return this['protect_directory'];
    }
    public withStatus(status: string): WebTamperProtectionDirectoryResponseInfo {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): WebTamperProtectionDirectoryResponseInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withBackupDirectory(backupDirectory: string): WebTamperProtectionDirectoryResponseInfo {
        this['backup_directory'] = backupDirectory;
        return this;
    }
    public set backupDirectory(backupDirectory: string  | undefined) {
        this['backup_directory'] = backupDirectory;
    }
    public get backupDirectory(): string | undefined {
        return this['backup_directory'];
    }
    public withExcludeChildDirectoryList(excludeChildDirectoryList: Array<string>): WebTamperProtectionDirectoryResponseInfo {
        this['exclude_child_directory_list'] = excludeChildDirectoryList;
        return this;
    }
    public set excludeChildDirectoryList(excludeChildDirectoryList: Array<string>  | undefined) {
        this['exclude_child_directory_list'] = excludeChildDirectoryList;
    }
    public get excludeChildDirectoryList(): Array<string> | undefined {
        return this['exclude_child_directory_list'];
    }
    public withExcludeFileList(excludeFileList: Array<string>): WebTamperProtectionDirectoryResponseInfo {
        this['exclude_file_list'] = excludeFileList;
        return this;
    }
    public set excludeFileList(excludeFileList: Array<string>  | undefined) {
        this['exclude_file_list'] = excludeFileList;
    }
    public get excludeFileList(): Array<string> | undefined {
        return this['exclude_file_list'];
    }
}