

export class ShowGlossaryListRequest {
    public workspace?: string;
    public type?: string;
    public name?: string;
    private 'create_user'?: string;
    public start?: string;
    public end?: string;
    public limit?: string;
    public offset?: string;
    private 'sort_by'?: string;
    private 'sort_order'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowGlossaryListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withType(type: string): ShowGlossaryListRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ShowGlossaryListRequest {
        this['name'] = name;
        return this;
    }
    public withCreateUser(createUser: string): ShowGlossaryListRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withStart(start: string): ShowGlossaryListRequest {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): ShowGlossaryListRequest {
        this['end'] = end;
        return this;
    }
    public withLimit(limit: string): ShowGlossaryListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowGlossaryListRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ShowGlossaryListRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSortOrder(sortOrder: string): ShowGlossaryListRequest {
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