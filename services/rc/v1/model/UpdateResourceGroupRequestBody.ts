

export class UpdateResourceGroupRequestBody {
    public description?: string;
    public constructor(description?: string) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateResourceGroupRequestBody {
        this['description'] = description;
        return this;
    }
}