

export class UpdateRepoConfigRequestBody {
    public description?: string;
    public constructor(description?: string) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateRepoConfigRequestBody {
        this['description'] = description;
        return this;
    }
}