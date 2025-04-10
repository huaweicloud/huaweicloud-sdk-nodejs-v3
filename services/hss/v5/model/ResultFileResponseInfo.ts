

export class ResultFileResponseInfo {
    private 'file_path'?: string;
    private 'file_hash'?: string;
    private 'file_size'?: number;
    private 'file_owner'?: string;
    private 'file_attr'?: string;
    private 'file_ctime'?: number;
    private 'file_mtime'?: number;
    public constructor() { 
    }
    public withFilePath(filePath: string): ResultFileResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileHash(fileHash: string): ResultFileResponseInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFileSize(fileSize: number): ResultFileResponseInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileOwner(fileOwner: string): ResultFileResponseInfo {
        this['file_owner'] = fileOwner;
        return this;
    }
    public set fileOwner(fileOwner: string  | undefined) {
        this['file_owner'] = fileOwner;
    }
    public get fileOwner(): string | undefined {
        return this['file_owner'];
    }
    public withFileAttr(fileAttr: string): ResultFileResponseInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withFileCtime(fileCtime: number): ResultFileResponseInfo {
        this['file_ctime'] = fileCtime;
        return this;
    }
    public set fileCtime(fileCtime: number  | undefined) {
        this['file_ctime'] = fileCtime;
    }
    public get fileCtime(): number | undefined {
        return this['file_ctime'];
    }
    public withFileMtime(fileMtime: number): ResultFileResponseInfo {
        this['file_mtime'] = fileMtime;
        return this;
    }
    public set fileMtime(fileMtime: number  | undefined) {
        this['file_mtime'] = fileMtime;
    }
    public get fileMtime(): number | undefined {
        return this['file_mtime'];
    }
}