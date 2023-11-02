

export class TagRequest {
    private 'tag_ids'?: Array<string>;
    public type?: string;
    public name?: string;
    private 'create_user'?: string;
    public start?: string;
    public end?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_by'?: string;
    private 'sort_order'?: string;
    public constructor() { 
    }
    public withTagIds(tagIds: Array<string>): TagRequest {
        this['tag_ids'] = tagIds;
        return this;
    }
    public set tagIds(tagIds: Array<string>  | undefined) {
        this['tag_ids'] = tagIds;
    }
    public get tagIds(): Array<string> | undefined {
        return this['tag_ids'];
    }
    public withType(type: string): TagRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): TagRequest {
        this['name'] = name;
        return this;
    }
    public withCreateUser(createUser: string): TagRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withStart(start: string): TagRequest {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): TagRequest {
        this['end'] = end;
        return this;
    }
    public withOffset(offset: number): TagRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TagRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: string): TagRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSortOrder(sortOrder: string): TagRequest {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
}