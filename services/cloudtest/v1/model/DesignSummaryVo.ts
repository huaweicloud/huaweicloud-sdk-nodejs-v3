

export class DesignSummaryVo {
    private 'issue_num'?: number;
    private 'issue_cover_num'?: number;
    private 'case_num'?: number;
    public constructor() { 
    }
    public withIssueNum(issueNum: number): DesignSummaryVo {
        this['issue_num'] = issueNum;
        return this;
    }
    public set issueNum(issueNum: number  | undefined) {
        this['issue_num'] = issueNum;
    }
    public get issueNum(): number | undefined {
        return this['issue_num'];
    }
    public withIssueCoverNum(issueCoverNum: number): DesignSummaryVo {
        this['issue_cover_num'] = issueCoverNum;
        return this;
    }
    public set issueCoverNum(issueCoverNum: number  | undefined) {
        this['issue_cover_num'] = issueCoverNum;
    }
    public get issueCoverNum(): number | undefined {
        return this['issue_cover_num'];
    }
    public withCaseNum(caseNum: number): DesignSummaryVo {
        this['case_num'] = caseNum;
        return this;
    }
    public set caseNum(caseNum: number  | undefined) {
        this['case_num'] = caseNum;
    }
    public get caseNum(): number | undefined {
        return this['case_num'];
    }
}