import { AddTestCaseResultLogInfo } from './AddTestCaseResultLogInfo';


export class AddTestCaseResultLogRequest {
    private 'project_id'?: string;
    private 'version_uri'?: string;
    private 'case_uri'?: string;
    public body?: AddTestCaseResultLogInfo;
    public constructor(projectId?: string, versionUri?: string, caseUri?: string) { 
        this['project_id'] = projectId;
        this['version_uri'] = versionUri;
        this['case_uri'] = caseUri;
    }
    public withProjectId(projectId: string): AddTestCaseResultLogRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionUri(versionUri: string): AddTestCaseResultLogRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCaseUri(caseUri: string): AddTestCaseResultLogRequest {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withBody(body: AddTestCaseResultLogInfo): AddTestCaseResultLogRequest {
        this['body'] = body;
        return this;
    }
}