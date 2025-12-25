

export class UpdateDataspaceRequestBody {
    public description?: string;
    public constructor(description?: string) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateDataspaceRequestBody {
        this['description'] = description;
        return this;
    }
}