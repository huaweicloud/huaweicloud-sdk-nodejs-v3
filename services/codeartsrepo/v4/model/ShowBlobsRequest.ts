

export class ShowBlobsRequest {
    private 'repository_id'?: number;
    private 'blob_id'?: string;
    public constructor(repositoryId?: number, blobId?: string) { 
        this['repository_id'] = repositoryId;
        this['blob_id'] = blobId;
    }
    public withRepositoryId(repositoryId: number): ShowBlobsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBlobId(blobId: string): ShowBlobsRequest {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
}