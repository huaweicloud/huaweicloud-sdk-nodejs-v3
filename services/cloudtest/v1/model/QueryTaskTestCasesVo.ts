import { RelateTaskTestCasesVo } from './RelateTaskTestCasesVo';


export class QueryTaskTestCasesVo {
    private 'related_case_uris'?: Array<string>;
    private 'not_related_case_uris'?: Array<string>;
    private 'case_task_info'?: Array<RelateTaskTestCasesVo>;
    public constructor() { 
    }
    public withRelatedCaseUris(relatedCaseUris: Array<string>): QueryTaskTestCasesVo {
        this['related_case_uris'] = relatedCaseUris;
        return this;
    }
    public set relatedCaseUris(relatedCaseUris: Array<string>  | undefined) {
        this['related_case_uris'] = relatedCaseUris;
    }
    public get relatedCaseUris(): Array<string> | undefined {
        return this['related_case_uris'];
    }
    public withNotRelatedCaseUris(notRelatedCaseUris: Array<string>): QueryTaskTestCasesVo {
        this['not_related_case_uris'] = notRelatedCaseUris;
        return this;
    }
    public set notRelatedCaseUris(notRelatedCaseUris: Array<string>  | undefined) {
        this['not_related_case_uris'] = notRelatedCaseUris;
    }
    public get notRelatedCaseUris(): Array<string> | undefined {
        return this['not_related_case_uris'];
    }
    public withCaseTaskInfo(caseTaskInfo: Array<RelateTaskTestCasesVo>): QueryTaskTestCasesVo {
        this['case_task_info'] = caseTaskInfo;
        return this;
    }
    public set caseTaskInfo(caseTaskInfo: Array<RelateTaskTestCasesVo>  | undefined) {
        this['case_task_info'] = caseTaskInfo;
    }
    public get caseTaskInfo(): Array<RelateTaskTestCasesVo> | undefined {
        return this['case_task_info'];
    }
}