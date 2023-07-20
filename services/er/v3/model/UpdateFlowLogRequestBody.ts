

export class UpdateFlowLogRequestBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateFlowLogRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateFlowLogRequestBody {
        this['description'] = description;
        return this;
    }
}