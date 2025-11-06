

export class MergeRequestCustomAverageEvaluationDto {
    private 'evaluation_type_id'?: number;
    public name?: string;
    public level?: number;
    public constructor() { 
    }
    public withEvaluationTypeId(evaluationTypeId: number): MergeRequestCustomAverageEvaluationDto {
        this['evaluation_type_id'] = evaluationTypeId;
        return this;
    }
    public set evaluationTypeId(evaluationTypeId: number  | undefined) {
        this['evaluation_type_id'] = evaluationTypeId;
    }
    public get evaluationTypeId(): number | undefined {
        return this['evaluation_type_id'];
    }
    public withName(name: string): MergeRequestCustomAverageEvaluationDto {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): MergeRequestCustomAverageEvaluationDto {
        this['level'] = level;
        return this;
    }
}