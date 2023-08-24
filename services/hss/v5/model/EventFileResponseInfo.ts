

export class EventFileResponseInfo {
    private 'file_path'?: string;
    private 'file_alias'?: string;
    private 'file_size'?: number;
    private 'file_mtime'?: number;
    private 'file_atime'?: number;
    private 'file_ctime'?: number;
    private 'file_hash'?: string;
    private 'file_md5'?: string;
    private 'file_sha256'?: string;
    private 'file_type'?: string;
    private 'file_content'?: string;
    private 'file_attr'?: string;
    private 'file_operation'?: number;
    private 'file_action'?: string;
    private 'file_change_attr'?: string;
    private 'file_new_path'?: string;
    private 'file_desc'?: string;
    private 'file_key_word'?: string;
    private 'is_dir'?: boolean;
    private 'fd_info'?: string;
    private 'fd_count'?: number;
    public constructor() { 
    }
    public withFilePath(filePath: string): EventFileResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileAlias(fileAlias: string): EventFileResponseInfo {
        this['file_alias'] = fileAlias;
        return this;
    }
    public set fileAlias(fileAlias: string  | undefined) {
        this['file_alias'] = fileAlias;
    }
    public get fileAlias(): string | undefined {
        return this['file_alias'];
    }
    public withFileSize(fileSize: number): EventFileResponseInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileMtime(fileMtime: number): EventFileResponseInfo {
        this['file_mtime'] = fileMtime;
        return this;
    }
    public set fileMtime(fileMtime: number  | undefined) {
        this['file_mtime'] = fileMtime;
    }
    public get fileMtime(): number | undefined {
        return this['file_mtime'];
    }
    public withFileAtime(fileAtime: number): EventFileResponseInfo {
        this['file_atime'] = fileAtime;
        return this;
    }
    public set fileAtime(fileAtime: number  | undefined) {
        this['file_atime'] = fileAtime;
    }
    public get fileAtime(): number | undefined {
        return this['file_atime'];
    }
    public withFileCtime(fileCtime: number): EventFileResponseInfo {
        this['file_ctime'] = fileCtime;
        return this;
    }
    public set fileCtime(fileCtime: number  | undefined) {
        this['file_ctime'] = fileCtime;
    }
    public get fileCtime(): number | undefined {
        return this['file_ctime'];
    }
    public withFileHash(fileHash: string): EventFileResponseInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFileMd5(fileMd5: string): EventFileResponseInfo {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileSha256(fileSha256: string): EventFileResponseInfo {
        this['file_sha256'] = fileSha256;
        return this;
    }
    public set fileSha256(fileSha256: string  | undefined) {
        this['file_sha256'] = fileSha256;
    }
    public get fileSha256(): string | undefined {
        return this['file_sha256'];
    }
    public withFileType(fileType: string): EventFileResponseInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFileContent(fileContent: string): EventFileResponseInfo {
        this['file_content'] = fileContent;
        return this;
    }
    public set fileContent(fileContent: string  | undefined) {
        this['file_content'] = fileContent;
    }
    public get fileContent(): string | undefined {
        return this['file_content'];
    }
    public withFileAttr(fileAttr: string): EventFileResponseInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withFileOperation(fileOperation: number): EventFileResponseInfo {
        this['file_operation'] = fileOperation;
        return this;
    }
    public set fileOperation(fileOperation: number  | undefined) {
        this['file_operation'] = fileOperation;
    }
    public get fileOperation(): number | undefined {
        return this['file_operation'];
    }
    public withFileAction(fileAction: string): EventFileResponseInfo {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
    public withFileChangeAttr(fileChangeAttr: string): EventFileResponseInfo {
        this['file_change_attr'] = fileChangeAttr;
        return this;
    }
    public set fileChangeAttr(fileChangeAttr: string  | undefined) {
        this['file_change_attr'] = fileChangeAttr;
    }
    public get fileChangeAttr(): string | undefined {
        return this['file_change_attr'];
    }
    public withFileNewPath(fileNewPath: string): EventFileResponseInfo {
        this['file_new_path'] = fileNewPath;
        return this;
    }
    public set fileNewPath(fileNewPath: string  | undefined) {
        this['file_new_path'] = fileNewPath;
    }
    public get fileNewPath(): string | undefined {
        return this['file_new_path'];
    }
    public withFileDesc(fileDesc: string): EventFileResponseInfo {
        this['file_desc'] = fileDesc;
        return this;
    }
    public set fileDesc(fileDesc: string  | undefined) {
        this['file_desc'] = fileDesc;
    }
    public get fileDesc(): string | undefined {
        return this['file_desc'];
    }
    public withFileKeyWord(fileKeyWord: string): EventFileResponseInfo {
        this['file_key_word'] = fileKeyWord;
        return this;
    }
    public set fileKeyWord(fileKeyWord: string  | undefined) {
        this['file_key_word'] = fileKeyWord;
    }
    public get fileKeyWord(): string | undefined {
        return this['file_key_word'];
    }
    public withIsDir(isDir: boolean): EventFileResponseInfo {
        this['is_dir'] = isDir;
        return this;
    }
    public set isDir(isDir: boolean  | undefined) {
        this['is_dir'] = isDir;
    }
    public get isDir(): boolean | undefined {
        return this['is_dir'];
    }
    public withFdInfo(fdInfo: string): EventFileResponseInfo {
        this['fd_info'] = fdInfo;
        return this;
    }
    public set fdInfo(fdInfo: string  | undefined) {
        this['fd_info'] = fdInfo;
    }
    public get fdInfo(): string | undefined {
        return this['fd_info'];
    }
    public withFdCount(fdCount: number): EventFileResponseInfo {
        this['fd_count'] = fdCount;
        return this;
    }
    public set fdCount(fdCount: number  | undefined) {
        this['fd_count'] = fdCount;
    }
    public get fdCount(): number | undefined {
        return this['fd_count'];
    }
}