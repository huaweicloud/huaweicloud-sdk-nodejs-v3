

export class TestPlanDetailDesignStage {
    private 'case_count'?: number;
    private 'issue_count'?: number;
    private 'issue_covered_count'?: string;
    public constructor() { 
    }
    public withCaseCount(caseCount: number): TestPlanDetailDesignStage {
        this['case_count'] = caseCount;
        return this;
    }
    public set caseCount(caseCount: number  | undefined) {
        this['case_count'] = caseCount;
    }
    public get caseCount(): number | undefined {
        return this['case_count'];
    }
    public withIssueCount(issueCount: number): TestPlanDetailDesignStage {
        this['issue_count'] = issueCount;
        return this;
    }
    public set issueCount(issueCount: number  | undefined) {
        this['issue_count'] = issueCount;
    }
    public get issueCount(): number | undefined {
        return this['issue_count'];
    }
    public withIssueCoveredCount(issueCoveredCount: string): TestPlanDetailDesignStage {
        this['issue_covered_count'] = issueCoveredCount;
        return this;
    }
    public set issueCoveredCount(issueCoveredCount: string  | undefined) {
        this['issue_covered_count'] = issueCoveredCount;
    }
    public get issueCoveredCount(): string | undefined {
        return this['issue_covered_count'];
    }
}