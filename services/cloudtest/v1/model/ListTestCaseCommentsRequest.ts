

export class ListTestCaseCommentsRequest {
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'version_uri'?: string;
    public constructor(projectId?: string, testcaseId?: string, pageNo?: number, pageSize?: number) { 
        this['project_id'] = projectId;
        this['testcase_id'] = testcaseId;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ListTestCaseCommentsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): ListTestCaseCommentsRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withPageNo(pageNo: number): ListTestCaseCommentsRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListTestCaseCommentsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withVersionUri(versionUri: string): ListTestCaseCommentsRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
}