

export class CaseInfo {
    private 'case_id'?: string;
    private 'script_url'?: string;
    public constructor() { 
    }
    public withCaseId(caseId: string): CaseInfo {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withScriptUrl(scriptUrl: string): CaseInfo {
        this['script_url'] = scriptUrl;
        return this;
    }
    public set scriptUrl(scriptUrl: string  | undefined) {
        this['script_url'] = scriptUrl;
    }
    public get scriptUrl(): string | undefined {
        return this['script_url'];
    }
}