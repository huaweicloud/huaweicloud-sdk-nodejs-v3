

export class ListDomainNotAddedProjectsV4Request {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListDomainNotAddedProjectsV4Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDomainNotAddedProjectsV4Request {
        this['limit'] = limit;
        return this;
    }
}