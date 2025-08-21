

export class EvaluationTypeDto {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): EvaluationTypeDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EvaluationTypeDto {
        this['name'] = name;
        return this;
    }
}