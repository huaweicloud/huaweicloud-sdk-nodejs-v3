

export class ShowSqlDiagnosisRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public category?: string;
    public subcategory?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string, category?: string, subcategory?: string) { 
        this['instance_id'] = instanceId;
        this['category'] = category;
        this['subcategory'] = subcategory;
    }
    public withInstanceId(instanceId: string): ShowSqlDiagnosisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ShowSqlDiagnosisRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withCategory(category: string): ShowSqlDiagnosisRequest {
        this['category'] = category;
        return this;
    }
    public withSubcategory(subcategory: string): ShowSqlDiagnosisRequest {
        this['subcategory'] = subcategory;
        return this;
    }
    public withOffset(offset: string): ShowSqlDiagnosisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowSqlDiagnosisRequest {
        this['limit'] = limit;
        return this;
    }
}