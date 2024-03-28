

export class BatchDeleteMessageDiagnosisRespResults {
    public result?: boolean;
    public id?: string;
    public constructor(result?: boolean, id?: string) { 
        this['result'] = result;
        this['id'] = id;
    }
    public withResult(result: boolean): BatchDeleteMessageDiagnosisRespResults {
        this['result'] = result;
        return this;
    }
    public withId(id: string): BatchDeleteMessageDiagnosisRespResults {
        this['id'] = id;
        return this;
    }
}