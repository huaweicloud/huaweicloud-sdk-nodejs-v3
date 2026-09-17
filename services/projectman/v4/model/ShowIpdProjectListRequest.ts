

export class ShowIpdProjectListRequest {
    public search?: string;
    public model?: string;
    public constructor() { 
    }
    public withSearch(search: string): ShowIpdProjectListRequest {
        this['search'] = search;
        return this;
    }
    public withModel(model: string): ShowIpdProjectListRequest {
        this['model'] = model;
        return this;
    }
}