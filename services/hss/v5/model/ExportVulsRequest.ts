import { ExportVulRequestBody } from './ExportVulRequestBody';


export class ExportVulsRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'host_id'?: string;
    private 'export_size'?: number;
    public category?: string;
    public limit?: number;
    public offset?: number;
    private 'repair_priority'?: string;
    private 'handle_status'?: string;
    private 'cve_id'?: string;
    private 'label_list'?: string;
    public status?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    public body?: ExportVulRequestBody;
    public constructor(exportSize?: number, category?: string) { 
        this['export_size'] = exportSize;
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportVulsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ExportVulsRequest {
        this['type'] = type;
        return this;
    }
    public withVulId(vulId: string): ExportVulsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ExportVulsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withHostId(hostId: string): ExportVulsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withExportSize(exportSize: number): ExportVulsRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withCategory(category: string): ExportVulsRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ExportVulsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ExportVulsRequest {
        this['offset'] = offset;
        return this;
    }
    public withRepairPriority(repairPriority: string): ExportVulsRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withHandleStatus(handleStatus: string): ExportVulsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withCveId(cveId: string): ExportVulsRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withLabelList(labelList: string): ExportVulsRequest {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: string  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): string | undefined {
        return this['label_list'];
    }
    public withStatus(status: string): ExportVulsRequest {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: string): ExportVulsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ExportVulsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withBody(body: ExportVulRequestBody): ExportVulsRequest {
        this['body'] = body;
        return this;
    }
}