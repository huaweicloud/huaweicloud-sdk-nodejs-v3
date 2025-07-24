import { OprReportInfo } from './OprReportInfo';


export class CreateReportRequest {
    private 'project_id'?: string;
    private 'version_id'?: string;
    public body?: OprReportInfo;
    public constructor(projectId?: string, versionId?: string) { 
        this['project_id'] = projectId;
        this['version_id'] = versionId;
    }
    public withProjectId(projectId: string): CreateReportRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionId(versionId: string): CreateReportRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: OprReportInfo): CreateReportRequest {
        this['body'] = body;
        return this;
    }
}