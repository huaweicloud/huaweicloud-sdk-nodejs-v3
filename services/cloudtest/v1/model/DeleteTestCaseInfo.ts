

export class DeleteTestCaseInfo {
    private 'project_uuid'?: string;
    private 'version_uri'?: string;
    private 'case_ids'?: Array<string>;
    public constructor(caseIds?: Array<string>) { 
        this['case_ids'] = caseIds;
    }
    public withProjectUuid(projectUuid: string): DeleteTestCaseInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withVersionUri(versionUri: string): DeleteTestCaseInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCaseIds(caseIds: Array<string>): DeleteTestCaseInfo {
        this['case_ids'] = caseIds;
        return this;
    }
    public set caseIds(caseIds: Array<string>  | undefined) {
        this['case_ids'] = caseIds;
    }
    public get caseIds(): Array<string> | undefined {
        return this['case_ids'];
    }
}