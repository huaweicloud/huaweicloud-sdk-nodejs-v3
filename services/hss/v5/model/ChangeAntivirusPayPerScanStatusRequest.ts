import { ChangeAntivirusPayPerScanStatusRequestInfo } from './ChangeAntivirusPayPerScanStatusRequestInfo';


export class ChangeAntivirusPayPerScanStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAntivirusPayPerScanStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeAntivirusPayPerScanStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAntivirusPayPerScanStatusRequestInfo): ChangeAntivirusPayPerScanStatusRequest {
        this['body'] = body;
        return this;
    }
}