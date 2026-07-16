

export class ListDevServerJobsRequest {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    public visible?: boolean;
    public constructor() { 
    }
    public withId(id: string): ListDevServerJobsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListDevServerJobsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListDevServerJobsRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListDevServerJobsRequest {
        this['status'] = status;
        return this;
    }
    public withVisible(visible: boolean): ListDevServerJobsRequest {
        this['visible'] = visible;
        return this;
    }
}