

export class CustomEvaluationDto {
    public id?: number;
    private 'evaluation_type_id'?: number;
    public level?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): CustomEvaluationDto {
        this['id'] = id;
        return this;
    }
    public withEvaluationTypeId(evaluationTypeId: number): CustomEvaluationDto {
        this['evaluation_type_id'] = evaluationTypeId;
        return this;
    }
    public set evaluationTypeId(evaluationTypeId: number  | undefined) {
        this['evaluation_type_id'] = evaluationTypeId;
    }
    public get evaluationTypeId(): number | undefined {
        return this['evaluation_type_id'];
    }
    public withLevel(level: number): CustomEvaluationDto {
        this['level'] = level;
        return this;
    }
    public withName(name: string): CustomEvaluationDto {
        this['name'] = name;
        return this;
    }
}