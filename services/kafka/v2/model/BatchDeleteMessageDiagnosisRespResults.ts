

export class BatchDeleteMessageDiagnosisRespResults {
    public success?: boolean;
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withSuccess(success: boolean): BatchDeleteMessageDiagnosisRespResults {
        this['success'] = success;
        return this;
    }
    public withId(id: string): BatchDeleteMessageDiagnosisRespResults {
        this['id'] = id;
        return this;
    }
}