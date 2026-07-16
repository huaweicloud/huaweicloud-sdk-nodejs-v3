

export class TrainingExperimentRequest {
    public id?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): TrainingExperimentRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TrainingExperimentRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TrainingExperimentRequest {
        this['description'] = description;
        return this;
    }
}