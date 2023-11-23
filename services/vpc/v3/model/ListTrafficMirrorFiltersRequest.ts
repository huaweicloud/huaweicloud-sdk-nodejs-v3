

export class ListTrafficMirrorFiltersRequest {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListTrafficMirrorFiltersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListTrafficMirrorFiltersRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListTrafficMirrorFiltersRequest {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): ListTrafficMirrorFiltersRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListTrafficMirrorFiltersRequest {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLimit(limit: number): ListTrafficMirrorFiltersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrafficMirrorFiltersRequest {
        this['marker'] = marker;
        return this;
    }
}