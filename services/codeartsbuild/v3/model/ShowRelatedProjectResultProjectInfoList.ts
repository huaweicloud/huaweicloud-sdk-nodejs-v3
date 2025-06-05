

export class ShowRelatedProjectResultProjectInfoList {
    public identifier?: string;
    public name?: string;
    private 'author_id'?: string;
    private 'is_creator'?: boolean;
    private 'author_domain_id'?: string;
    public constructor() { 
    }
    public withIdentifier(identifier: string): ShowRelatedProjectResultProjectInfoList {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): ShowRelatedProjectResultProjectInfoList {
        this['name'] = name;
        return this;
    }
    public withAuthorId(authorId: string): ShowRelatedProjectResultProjectInfoList {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withIsCreator(isCreator: boolean): ShowRelatedProjectResultProjectInfoList {
        this['is_creator'] = isCreator;
        return this;
    }
    public set isCreator(isCreator: boolean  | undefined) {
        this['is_creator'] = isCreator;
    }
    public get isCreator(): boolean | undefined {
        return this['is_creator'];
    }
    public withAuthorDomainId(authorDomainId: string): ShowRelatedProjectResultProjectInfoList {
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