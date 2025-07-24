

export class ExternalBranchInfoVo {
    public id?: string;
    public type?: string;
    public author?: string;
    public name?: string;
    public region?: string;
    private 'last_modifier'?: string;
    private 'last_modified'?: Date;
    private 'last_modified_timestamp'?: number;
    private 'creation_date'?: Date;
    private 'creation_date_timestamp'?: number;
    private 'author_name'?: string;
    private 'is_base_branch'?: number;
    public constructor() { 
    }
    public withId(id: string): ExternalBranchInfoVo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ExternalBranchInfoVo {
        this['type'] = type;
        return this;
    }
    public withAuthor(author: string): ExternalBranchInfoVo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): ExternalBranchInfoVo {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): ExternalBranchInfoVo {
        this['region'] = region;
        return this;
    }
    public withLastModifier(lastModifier: string): ExternalBranchInfoVo {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastModified(lastModified: Date): ExternalBranchInfoVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): ExternalBranchInfoVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withCreationDate(creationDate: Date): ExternalBranchInfoVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): ExternalBranchInfoVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withAuthorName(authorName: string): ExternalBranchInfoVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withIsBaseBranch(isBaseBranch: number): ExternalBranchInfoVo {
        this['is_base_branch'] = isBaseBranch;
        return this;
    }
    public set isBaseBranch(isBaseBranch: number  | undefined) {
        this['is_base_branch'] = isBaseBranch;
    }
    public get isBaseBranch(): number | undefined {
        return this['is_base_branch'];
    }
}