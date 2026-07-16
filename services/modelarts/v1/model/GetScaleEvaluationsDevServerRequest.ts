

export class GetScaleEvaluationsDevServerRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetScaleEvaluationsDevServerRequest {
        this['id'] = id;
        return this;
    }
}