

export class QueryDiagnosisResultItem {
    public category?: string;
    public name?: string;
    public weight?: number;
    public constructor() { 
    }
    public withCategory(category: string): QueryDiagnosisResultItem {
        this['category'] = category;
        return this;
    }
    public withName(name: string): QueryDiagnosisResultItem {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): QueryDiagnosisResultItem {
        this['weight'] = weight;
        return this;
    }
}