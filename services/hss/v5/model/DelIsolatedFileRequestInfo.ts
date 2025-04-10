

export class DelIsolatedFileRequestInfo {
    private 'host_id'?: string;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    private 'file_attr'?: string;
    public constructor(hostId?: string, fileHash?: string, filePath?: string, fileAttr?: string) { 
        this['host_id'] = hostId;
        this['file_hash'] = fileHash;
        this['file_path'] = filePath;
        this['file_attr'] = fileAttr;
    }
    public withHostId(hostId: string): DelIsolatedFileRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withFileHash(fileHash: string): DelIsolatedFileRequestInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): DelIsolatedFileRequestInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileAttr(fileAttr: string): DelIsolatedFileRequestInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
}