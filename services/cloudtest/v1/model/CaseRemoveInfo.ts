import { CaseIdAndTypeInfo } from './CaseIdAndTypeInfo';


export class CaseRemoveInfo {
    private 'project_uuid'?: string;
    private 'iterator_uri'?: string;
    private 'remove_associate_issue'?: boolean;
    private 'case_list'?: Array<CaseIdAndTypeInfo>;
    public constructor() { 
    }
    public withProjectUuid(projectUuid: string): CaseRemoveInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withIteratorUri(iteratorUri: string): CaseRemoveInfo {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withRemoveAssociateIssue(removeAssociateIssue: boolean): CaseRemoveInfo {
        this['remove_associate_issue'] = removeAssociateIssue;
        return this;
    }
    public set removeAssociateIssue(removeAssociateIssue: boolean  | undefined) {
        this['remove_associate_issue'] = removeAssociateIssue;
    }
    public get removeAssociateIssue(): boolean | undefined {
        return this['remove_associate_issue'];
    }
    public withCaseList(caseList: Array<CaseIdAndTypeInfo>): CaseRemoveInfo {
        this['case_list'] = caseList;
        return this;
    }
    public set caseList(caseList: Array<CaseIdAndTypeInfo>  | undefined) {
        this['case_list'] = caseList;
    }
    public get caseList(): Array<CaseIdAndTypeInfo> | undefined {
        return this['case_list'];
    }
}