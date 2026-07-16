

export class ChangeTrainingExperimentRequestBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ChangeTrainingExperimentRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ChangeTrainingExperimentRequestBody {
        this['description'] = description;
        return this;
    }
}