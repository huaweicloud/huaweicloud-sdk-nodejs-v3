

export class IsolatedFileResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    private 'isolation_status'?: string;
    private 'file_attr'?: string;
    private 'update_time'?: number;
    public constructor(hostId?: string, hostName?: string, fileHash?: string, filePath?: string, isolationStatus?: string, fileAttr?: string, updateTime?: number) { 
        this['host_id'] = hostId;
        this['host_name'] = hostName;
        this['file_hash'] = fileHash;
        this['file_path'] = filePath;
        this['isolation_status'] = isolationStatus;
        this['file_attr'] = fileAttr;
        this['update_time'] = updateTime;
    }
    public withHostId(hostId: string): IsolatedFileResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): IsolatedFileResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withFileHash(fileHash: string): IsolatedFileResponseInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): IsolatedFileResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withIsolationStatus(isolationStatus: string): IsolatedFileResponseInfo {
        this['isolation_status'] = isolationStatus;
        return this;
    }
    public set isolationStatus(isolationStatus: string  | undefined) {
        this['isolation_status'] = isolationStatus;
    }
    public get isolationStatus(): string | undefined {
        return this['isolation_status'];
    }
    public withFileAttr(fileAttr: string): IsolatedFileResponseInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withUpdateTime(updateTime: number): IsolatedFileResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}