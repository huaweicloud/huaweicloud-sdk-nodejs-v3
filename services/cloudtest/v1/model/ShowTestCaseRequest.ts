

export class ShowTestCaseRequest {
    private 'testcase_id'?: string;
    private 'version_uri'?: string;
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    public refresh?: boolean;
    private 'is_recycle'?: boolean;
    public constructor(testcaseId?: string) { 
        this['testcase_id'] = testcaseId;
    }
    public withTestcaseId(testcaseId: string): ShowTestCaseRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withVersionUri(versionUri: string): ShowTestCaseRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withProjectUuid(projectUuid: string): ShowTestCaseRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): ShowTestCaseRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withRefresh(refresh: boolean): ShowTestCaseRequest {
        this['refresh'] = refresh;
        return this;
    }
    public withIsRecycle(isRecycle: boolean): ShowTestCaseRequest {
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