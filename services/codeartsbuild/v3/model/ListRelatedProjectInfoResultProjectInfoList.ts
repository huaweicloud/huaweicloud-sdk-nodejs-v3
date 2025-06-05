

export class ListRelatedProjectInfoResultProjectInfoList {
    public identifier?: string;
    public name?: string;
    private 'author_id'?: string;
    public status?: number;
    private 'author_domain_id'?: string;
    public constructor() { 
    }
    public withIdentifier(identifier: string): ListRelatedProjectInfoResultProjectInfoList {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): ListRelatedProjectInfoResultProjectInfoList {
        this['name'] = name;
        return this;
    }
    public withAuthorId(authorId: string): ListRelatedProjectInfoResultProjectInfoList {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withStatus(status: number): ListRelatedProjectInfoResultProjectInfoList {
        this['status'] = status;
        return this;
    }
    public withAuthorDomainId(authorDomainId: string): ListRelatedProjectInfoResultProjectInfoList {
        this['author_domain_id'] = authorDomainId;
        return this;
    }
    public set authorDomainId(authorDomainId: string  | undefined) {
        this['author_domain_id'] = authorDomainId;
    }
    public get authorDomainId(): string | undefined {
        return this['author_domain_id'];
    }
}