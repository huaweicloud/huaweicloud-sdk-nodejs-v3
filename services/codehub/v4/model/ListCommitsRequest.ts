

export class ListCommitsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'ref_name'?: string;
    public since?: string;
    public until?: string;
    public path?: string;
    public message?: string;
    public author?: string;
    private 'order_by_date'?: boolean;
    public follow?: boolean;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListCommitsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListCommitsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommitsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRefName(refName: string): ListCommitsRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withSince(since: string): ListCommitsRequest {
        this['since'] = since;
        return this;
    }
    public withUntil(until: string): ListCommitsRequest {
        this['until'] = until;
        return this;
    }
    public withPath(path: string): ListCommitsRequest {
        this['path'] = path;
        return this;
    }
    public withMessage(message: string): ListCommitsRequest {
        this['message'] = message;
        return this;
    }
    public withAuthor(author: string): ListCommitsRequest {
        this['author'] = author;
        return this;
    }
    public withOrderByDate(orderByDate: boolean): ListCommitsRequest {
        this['order_by_date'] = orderByDate;
        return this;
    }
    public set orderByDate(orderByDate: boolean  | undefined) {
        this['order_by_date'] = orderByDate;
    }
    public get orderByDate(): boolean | undefined {
        return this['order_by_date'];
    }
    public withFollow(follow: boolean): ListCommitsRequest {
        this['follow'] = follow;
        return this;
    }
}