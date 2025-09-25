

export class ListGeneralImageVulsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    private 'handle_status'?: string;
    private 'image_type'?: string;
    private 'severity_level'?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'cve_id'?: string;
    private 'label_list'?: Array<string>;
    public status?: string;
    private 'cluster_id'?: string;
    public constructor(type?: string, handleStatus?: string, imageType?: string) { 
        this['type'] = type;
        this['handle_status'] = handleStatus;
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGeneralImageVulsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListGeneralImageVulsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGeneralImageVulsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListGeneralImageVulsRequest {
        this['type'] = type;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListGeneralImageVulsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withImageType(imageType: string): ListGeneralImageVulsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withSeverityLevel(severityLevel: string): ListGeneralImageVulsRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withVulId(vulId: string): ListGeneralImageVulsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ListGeneralImageVulsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCveId(cveId: string): ListGeneralImageVulsRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withLabelList(labelList: Array<string>): ListGeneralImageVulsRequest {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withStatus(status: string): ListGeneralImageVulsRequest {
        this['status'] = status;
        return this;
    }
    public withClusterId(clusterId: string): ListGeneralImageVulsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}