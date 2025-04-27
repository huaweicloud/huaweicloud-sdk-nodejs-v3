

export class UpdateEndpointRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateEndpointRequestBody {
        this['name'] = name;
        return this;
    }
}