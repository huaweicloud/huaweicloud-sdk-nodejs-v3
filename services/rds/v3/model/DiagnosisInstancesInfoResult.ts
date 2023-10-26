

export class DiagnosisInstancesInfoResult {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnosisInstancesInfoResult {
        this['id'] = id;
        return this;
    }
}