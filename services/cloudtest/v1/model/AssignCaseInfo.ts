

export class AssignCaseInfo {
    private 'case_uri'?: string;
    private 'is_available'?: boolean;
    public constructor() { 
    }
    public withCaseUri(caseUri: string): AssignCaseInfo {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withIsAvailable(isAvailable: boolean): AssignCaseInfo {
        this['is_available'] = isAvailable;
        return this;
    }
    public set isAvailable(isAvailable: boolean  | undefined) {
        this['is_available'] = isAvailable;
    }
    public get isAvailable(): boolean | undefined {
        return this['is_available'];
    }
}