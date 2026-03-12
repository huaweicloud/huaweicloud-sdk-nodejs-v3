

export class ListAllInstanceRepositoriesRequest {
    public marker?: string;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListAllInstanceRepositoriesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListAllInstanceRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAllInstanceRepositoriesRequest {
        this['name'] = name;
        return this;
    }
}