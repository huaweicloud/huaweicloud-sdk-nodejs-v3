import { CommonDto } from './CommonDto';


export class CloudTestCaseInfo {
    private 'case_id'?: string;
    public caseType?: number;
    private 'is_forbidden'?: number;
    public owner?: CommonDto;
    public result?: CommonDto;
    public scriptUrl?: string;
    public status?: CommonDto;
    public testCaseName?: string;
    public testCaseNumber?: string;
    public tmssVersionUri?: string;
    public constructor() { 
    }
    public withCaseId(caseId: string): CloudTestCaseInfo {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withCaseType(caseType: number): CloudTestCaseInfo {
        this['caseType'] = caseType;
        return this;
    }
    public withIsForbidden(isForbidden: number): CloudTestCaseInfo {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: number  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): number | undefined {
        return this['is_forbidden'];
    }
    public withOwner(owner: CommonDto): CloudTestCaseInfo {
        this['owner'] = owner;
        return this;
    }
    public withResult(result: CommonDto): CloudTestCaseInfo {
        this['result'] = result;
        return this;
    }
    public withScriptUrl(scriptUrl: string): CloudTestCaseInfo {
        this['scriptUrl'] = scriptUrl;
        return this;
    }
    public withStatus(status: CommonDto): CloudTestCaseInfo {
        this['status'] = status;
        return this;
    }
    public withTestCaseName(testCaseName: string): CloudTestCaseInfo {
        this['testCaseName'] = testCaseName;
        return this;
    }
    public withTestCaseNumber(testCaseNumber: string): CloudTestCaseInfo {
        this['testCaseNumber'] = testCaseNumber;
        return this;
    }
    public withTmssVersionUri(tmssVersionUri: string): CloudTestCaseInfo {
        this['tmssVersionUri'] = tmssVersionUri;
        return this;
    }
}