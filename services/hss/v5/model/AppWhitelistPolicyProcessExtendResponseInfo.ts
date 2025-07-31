

export class AppWhitelistPolicyProcessExtendResponseInfo {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_hash'?: string;
    private 'container_id'?: string;
    public cmdline?: string;
    private 'file_size'?: number;
    public constructor() { 
    }
    public withProcessName(processName: string): AppWhitelistPolicyProcessExtendResponseInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): AppWhitelistPolicyProcessExtendResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessHash(processHash: string): AppWhitelistPolicyProcessExtendResponseInfo {
        this['process_hash'] = processHash;
        return this;
    }
    public set processHash(processHash: string  | undefined) {
        this['process_hash'] = processHash;
    }
    public get processHash(): string | undefined {
        return this['process_hash'];
    }
    public withContainerId(containerId: string): AppWhitelistPolicyProcessExtendResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withCmdline(cmdline: string): AppWhitelistPolicyProcessExtendResponseInfo {
        this['cmdline'] = cmdline;
        return this;
    }
    public withFileSize(fileSize: number): AppWhitelistPolicyProcessExtendResponseInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
}