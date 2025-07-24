

export class TestcasePlanQueryParam {
    private 'case_uri_list'?: Array<string>;
    private 'case_number_list'?: Array<string>;
    public constructor() { 
    }
    public withCaseUriList(caseUriList: Array<string>): TestcasePlanQueryParam {
        this['case_uri_list'] = caseUriList;
        return this;
    }
    public set caseUriList(caseUriList: Array<string>  | undefined) {
        this['case_uri_list'] = caseUriList;
    }
    public get caseUriList(): Array<string> | undefined {
        return this['case_uri_list'];
    }
    public withCaseNumberList(caseNumberList: Array<string>): TestcasePlanQueryParam {
        this['case_number_list'] = caseNumberList;
        return this;
    }
    public set caseNumberList(caseNumberList: Array<string>  | undefined) {
        this['case_number_list'] = caseNumberList;
    }
    public get caseNumberList(): Array<string> | undefined {
        return this['case_number_list'];
    }
}