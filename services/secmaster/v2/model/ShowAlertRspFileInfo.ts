

export class ShowAlertRspFileInfo {
    private 'file_path'?: string;
    private 'file_content'?: string;
    private 'file_new_path'?: string;
    private 'file_hash'?: string;
    private 'file_md5'?: string;
    private 'file_sha256'?: string;
    private 'file_attr'?: string;
    public constructor() { 
    }
    public withFilePath(filePath: string): ShowAlertRspFileInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileContent(fileContent: string): ShowAlertRspFileInfo {
        this['file_content'] = fileContent;
        return this;
    }
    public set fileContent(fileContent: string  | undefined) {
        this['file_content'] = fileContent;
    }
    public get fileContent(): string | undefined {
        return this['file_content'];
    }
    public withFileNewPath(fileNewPath: string): ShowAlertRspFileInfo {
        this['file_new_path'] = fileNewPath;
        return this;
    }
    public set fileNewPath(fileNewPath: string  | undefined) {
        this['file_new_path'] = fileNewPath;
    }
    public get fileNewPath(): string | undefined {
        return this['file_new_path'];
    }
    public withFileHash(fileHash: string): ShowAlertRspFileInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFileMd5(fileMd5: string): ShowAlertRspFileInfo {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileSha256(fileSha256: string): ShowAlertRspFileInfo {
        this['file_sha256'] = fileSha256;
        return this;
    }
    public set fileSha256(fileSha256: string  | undefined) {
        this['file_sha256'] = fileSha256;
    }
    public get fileSha256(): string | undefined {
        return this['file_sha256'];
    }
    public withFileAttr(fileAttr: string): ShowAlertRspFileInfo {
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