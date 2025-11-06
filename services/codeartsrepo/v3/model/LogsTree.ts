import { Commit } from './Commit';


export class LogsTree {
    private 'blob_id'?: string;
    public commit?: Commit;
    private 'file_name'?: string;
    private 'file_path'?: string;
    public md5?: string;
    public type?: string;
    public constructor() { 
    }
    public withBlobId(blobId: string): LogsTree {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withCommit(commit: Commit): LogsTree {
        this['commit'] = commit;
        return this;
    }
    public withFileName(fileName: string): LogsTree {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): LogsTree {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withMd5(md5: string): LogsTree {
        this['md5'] = md5;
        return this;
    }
    public withType(type: string): LogsTree {
        this['type'] = type;
        return this;
    }
}