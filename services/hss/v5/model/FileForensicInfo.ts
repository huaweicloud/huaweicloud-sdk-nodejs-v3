

export class FileForensicInfo {
    private 'file_path'?: string;
    private 'file_new_path'?: string;
    private 'file_name'?: string;
    private 'file_sha256'?: string;
    private 'file_action'?: string;
    private 'file_operation'?: number;
    private 'file_size'?: number;
    private 'file_hash'?: string;
    private 'file_desc'?: string;
    private 'is_dir'?: boolean;
    private 'file_mtime'?: number;
    private 'file_atime'?: number;
    private 'file_ctime'?: number;
    private 'file_alias'?: string;
    private 'file_md5'?: string;
    private 'file_type'?: string;
    private 'file_key_word'?: string;
    public constructor() { 
    }
    public withFilePath(filePath: string): FileForensicInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileNewPath(fileNewPath: string): FileForensicInfo {
        this['file_new_path'] = fileNewPath;
        return this;
    }
    public set fileNewPath(fileNewPath: string  | undefined) {
        this['file_new_path'] = fileNewPath;
    }
    public get fileNewPath(): string | undefined {
        return this['file_new_path'];
    }
    public withFileName(fileName: string): FileForensicInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSha256(fileSha256: string): FileForensicInfo {
        this['file_sha256'] = fileSha256;
        return this;
    }
    public set fileSha256(fileSha256: string  | undefined) {
        this['file_sha256'] = fileSha256;
    }
    public get fileSha256(): string | undefined {
        return this['file_sha256'];
    }
    public withFileAction(fileAction: string): FileForensicInfo {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
    public withFileOperation(fileOperation: number): FileForensicInfo {
        this['file_operation'] = fileOperation;
        return this;
    }
    public set fileOperation(fileOperation: number  | undefined) {
        this['file_operation'] = fileOperation;
    }
    public get fileOperation(): number | undefined {
        return this['file_operation'];
    }
    public withFileSize(fileSize: number): FileForensicInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileHash(fileHash: string): FileForensicInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFileDesc(fileDesc: string): FileForensicInfo {
        this['file_desc'] = fileDesc;
        return this;
    }
    public set fileDesc(fileDesc: string  | undefined) {
        this['file_desc'] = fileDesc;
    }
    public get fileDesc(): string | undefined {
        return this['file_desc'];
    }
    public withIsDir(isDir: boolean): FileForensicInfo {
        this['is_dir'] = isDir;
        return this;
    }
    public set isDir(isDir: boolean  | undefined) {
        this['is_dir'] = isDir;
    }
    public get isDir(): boolean | undefined {
        return this['is_dir'];
    }
    public withFileMtime(fileMtime: number): FileForensicInfo {
        this['file_mtime'] = fileMtime;
        return this;
    }
    public set fileMtime(fileMtime: number  | undefined) {
        this['file_mtime'] = fileMtime;
    }
    public get fileMtime(): number | undefined {
        return this['file_mtime'];
    }
    public withFileAtime(fileAtime: number): FileForensicInfo {
        this['file_atime'] = fileAtime;
        return this;
    }
    public set fileAtime(fileAtime: number  | undefined) {
        this['file_atime'] = fileAtime;
    }
    public get fileAtime(): number | undefined {
        return this['file_atime'];
    }
    public withFileCtime(fileCtime: number): FileForensicInfo {
        this['file_ctime'] = fileCtime;
        return this;
    }
    public set fileCtime(fileCtime: number  | undefined) {
        this['file_ctime'] = fileCtime;
    }
    public get fileCtime(): number | undefined {
        return this['file_ctime'];
    }
    public withFileAlias(fileAlias: string): FileForensicInfo {
        this['file_alias'] = fileAlias;
        return this;
    }
    public set fileAlias(fileAlias: string  | undefined) {
        this['file_alias'] = fileAlias;
    }
    public get fileAlias(): string | undefined {
        return this['file_alias'];
    }
    public withFileMd5(fileMd5: string): FileForensicInfo {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileType(fileType: string): FileForensicInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFileKeyWord(fileKeyWord: string): FileForensicInfo {
        this['file_key_word'] = fileKeyWord;
        return this;
    }
    public set fileKeyWord(fileKeyWord: string  | undefined) {
        this['file_key_word'] = fileKeyWord;
    }
    public get fileKeyWord(): string | undefined {
        return this['file_key_word'];
    }
}