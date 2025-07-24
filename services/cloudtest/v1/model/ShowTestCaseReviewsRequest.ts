

export class ShowTestCaseReviewsRequest {
    private 'project_uuid'?: string;
    private 'version_uri'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'testcase_uri'?: string;
    public constructor(projectUuid?: string, versionUri?: string, pageNo?: number, pageSize?: number, testcaseUri?: string) { 
        this['project_uuid'] = projectUuid;
        this['version_uri'] = versionUri;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
        this['testcase_uri'] = testcaseUri;
    }
    public withProjectUuid(projectUuid: string): ShowTestCaseReviewsRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withVersionUri(versionUri: string): ShowTestCaseReviewsRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withPageNo(pageNo: number): ShowTestCaseReviewsRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ShowTestCaseReviewsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTestcaseUri(testcaseUri: string): ShowTestCaseReviewsRequest {
        this['testcase_uri'] = testcaseUri;
        return this;
    }
    public set testcaseUri(testcaseUri: string  | undefined) {
        this['testcase_uri'] = testcaseUri;
    }
    public get testcaseUri(): string | undefined {
        return this['testcase_uri'];
    }
}