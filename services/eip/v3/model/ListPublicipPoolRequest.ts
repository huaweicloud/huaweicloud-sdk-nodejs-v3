

export class ListPublicipPoolRequest {
    public marker?: string;
    public limit?: number;
    public fields?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public id?: string;
    public name?: string;
    public size?: number;
    public status?: string;
    public type?: string;
    public description?: string;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListPublicipPoolRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPublicipPoolRequest {
        this['limit'] = limit;
        return this;
    }
    public withFields(fields: Array<string>): ListPublicipPoolRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: string): ListPublicipPoolRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPublicipPoolRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withId(id: string): ListPublicipPoolRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListPublicipPoolRequest {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): ListPublicipPoolRequest {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): ListPublicipPoolRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListPublicipPoolRequest {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ListPublicipPoolRequest {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListPublicipPoolRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}