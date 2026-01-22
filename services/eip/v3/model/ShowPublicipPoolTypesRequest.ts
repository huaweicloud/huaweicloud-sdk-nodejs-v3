

export class ShowPublicipPoolTypesRequest {
    public marker?: string;
    public limit?: number;
    public fields?: string;
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
    public withMarker(marker: string): ShowPublicipPoolTypesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ShowPublicipPoolTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFields(fields: string): ShowPublicipPoolTypesRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: string): ShowPublicipPoolTypesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowPublicipPoolTypesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withId(id: string): ShowPublicipPoolTypesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPublicipPoolTypesRequest {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): ShowPublicipPoolTypesRequest {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): ShowPublicipPoolTypesRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ShowPublicipPoolTypesRequest {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowPublicipPoolTypesRequest {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ShowPublicipPoolTypesRequest {
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