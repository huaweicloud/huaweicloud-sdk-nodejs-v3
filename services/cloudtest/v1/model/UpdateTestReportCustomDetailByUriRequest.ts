import { TestReportCustomDetailInfo } from './TestReportCustomDetailInfo';


export class UpdateTestReportCustomDetailByUriRequest {
    private 'project_id'?: string;
    private 'version_uri'?: string;
    private 'report_uri'?: string;
    private 'custom_info_uri'?: string;
    public body?: TestReportCustomDetailInfo;
    public constructor(projectId?: string, versionUri?: string, reportUri?: string, customInfoUri?: string) { 
        this['project_id'] = projectId;
        this['version_uri'] = versionUri;
        this['report_uri'] = reportUri;
        this['custom_info_uri'] = customInfoUri;
    }
    public withProjectId(projectId: string): UpdateTestReportCustomDetailByUriRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionUri(versionUri: string): UpdateTestReportCustomDetailByUriRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withReportUri(reportUri: string): UpdateTestReportCustomDetailByUriRequest {
        this['report_uri'] = reportUri;
        return this;
    }
    public set reportUri(reportUri: string  | undefined) {
        this['report_uri'] = reportUri;
    }
    public get reportUri(): string | undefined {
        return this['report_uri'];
    }
    public withCustomInfoUri(customInfoUri: string): UpdateTestReportCustomDetailByUriRequest {
        this['custom_info_uri'] = customInfoUri;
        return this;
    }
    public set customInfoUri(customInfoUri: string  | undefined) {
        this['custom_info_uri'] = customInfoUri;
    }
    public get customInfoUri(): string | undefined {
        return this['custom_info_uri'];
    }
    public withBody(body: TestReportCustomDetailInfo): UpdateTestReportCustomDetailByUriRequest {
        this['body'] = body;
        return this;
    }
}