

export class DiagnosisItemResult {
    public name?: string;
    public count?: number;
    public constructor() { 
    }
    public withName(name: string): DiagnosisItemResult {
        this['name'] = name;
        return this;
    }
    public withCount(count: number): DiagnosisItemResult {
        this['count'] = count;
        return this;
    }
}