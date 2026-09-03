

export class DiskSpaceDiagnosisResult {
    public code?: string;
    public detail?: string;
    public affect?: number;
    public constructor() { 
    }
    public withCode(code: string): DiskSpaceDiagnosisResult {
        this['code'] = code;
        return this;
    }
    public withDetail(detail: string): DiskSpaceDiagnosisResult {
        this['detail'] = detail;
        return this;
    }
    public withAffect(affect: number): DiskSpaceDiagnosisResult {
        this['affect'] = affect;
        return this;
    }
}