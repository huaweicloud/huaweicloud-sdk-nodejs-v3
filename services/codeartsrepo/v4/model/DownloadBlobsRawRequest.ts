

export class DownloadBlobsRawRequest {
    private 'repository_id'?: number;
    private 'blob_id'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    public constructor(repositoryId?: number, blobId?: string, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['blob_id'] = blobId;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): DownloadBlobsRawRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBlobId(blobId: string): DownloadBlobsRawRequest {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withFileName(fileName: string): DownloadBlobsRawRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): DownloadBlobsRawRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}