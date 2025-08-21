

export class DownloadArchiveRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public path?: string;
    private 'archive_format'?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): DownloadArchiveRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): DownloadArchiveRequest {
        this['sha'] = sha;
        return this;
    }
    public withPath(path: string): DownloadArchiveRequest {
        this['path'] = path;
        return this;
    }
    public withArchiveFormat(archiveFormat: string): DownloadArchiveRequest {
        this['archive_format'] = archiveFormat;
        return this;
    }
    public set archiveFormat(archiveFormat: string  | undefined) {
        this['archive_format'] = archiveFormat;
    }
    public get archiveFormat(): string | undefined {
        return this['archive_format'];
    }
}