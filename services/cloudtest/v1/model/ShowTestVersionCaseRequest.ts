

export class ShowTestVersionCaseRequest {
    private 'case_uri'?: string;
    private 'version_uri'?: string;
    private 'project_uuid'?: string;
    public taskUri?: string;
    public refresh?: boolean;
    private 'is_recycle'?: boolean;
    public constructor(caseUri?: string) { 
        this['case_uri'] = caseUri;
    }
    public withCaseUri(caseUri: string): ShowTestVersionCaseRequest {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withVersionUri(versionUri: string): ShowTestVersionCaseRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withProjectUuid(projectUuid: string): ShowTestVersionCaseRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): ShowTestVersionCaseRequest {
        this['taskUri'] = taskUri;
        return this;
    }
    public withRefresh(refresh: boolean): ShowTestVersionCaseRequest {
        this['refresh'] = refresh;
        return this;
    }
    public withIsRecycle(isRecycle: boolean): ShowTestVersionCaseRequest {
        this['is_recycle'] = isRecycle;
        return this;
    }
    public set isRecycle(isRecycle: boolean  | undefined) {
        this['is_recycle'] = isRecycle;
    }
    public get isRecycle(): boolean | undefined {
        return this['is_recycle'];
    }
}