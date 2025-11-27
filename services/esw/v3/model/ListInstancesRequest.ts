

export class ListInstancesRequest {
    public id?: string;
    public name?: string;
    public description?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListInstancesRequest {
        this['description'] = description;
        return this;
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListInstancesRequest {
        this['marker'] = marker;
        return this;
    }
}