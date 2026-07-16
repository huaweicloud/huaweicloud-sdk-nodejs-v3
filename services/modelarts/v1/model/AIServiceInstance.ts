

export class AIServiceInstance {
    public id?: string;
    public status?: string;
    public endpoints?: string;
    public constructor() { 
    }
    public withId(id: string): AIServiceInstance {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): AIServiceInstance {
        this['status'] = status;
        return this;
    }
    public withEndpoints(endpoints: string): AIServiceInstance {
        this['endpoints'] = endpoints;
        return this;
    }
}