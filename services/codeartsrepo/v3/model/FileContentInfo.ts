

export class FileContentInfo {
    private 'file_name'?: string;
    private 'file_path'?: string;
    public size?: number;
    public encoding?: string;
    private 'content_sha256'?: string;
    public ref?: string;
    private 'blob_id'?: string;
    private 'commit_id'?: string;
    private 'last_commit_id'?: string;
    public content?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): FileContentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): FileContentInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSize(size: number): FileContentInfo {
        this['size'] = size;
        return this;
    }
    public withEncoding(encoding: string): FileContentInfo {
        this['encoding'] = encoding;
        return this;
    }
    public withContentSha256(contentSha256: string): FileContentInfo {
        this['content_sha256'] = contentSha256;
        return this;
    }
    public set contentSha256(contentSha256: string  | undefined) {
        this['content_sha256'] = contentSha256;
    }
    public get contentSha256(): string | undefined {
        return this['content_sha256'];
    }
    public withRef(ref: string): FileContentInfo {
        this['ref'] = ref;
        return this;
    }
    public withBlobId(blobId: string): FileContentInfo {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withCommitId(commitId: string): FileContentInfo {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withLastCommitId(lastCommitId: string): FileContentInfo {
        this['last_commit_id'] = lastCommitId;
        return this;
    }
    public set lastCommitId(lastCommitId: string  | undefined) {
        this['last_commit_id'] = lastCommitId;
    }
    public get lastCommitId(): string | undefined {
        return this['last_commit_id'];
    }
    public withContent(content: string): FileContentInfo {
        this['content'] = content;
        return this;
    }
}