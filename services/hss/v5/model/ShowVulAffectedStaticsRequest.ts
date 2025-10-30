

export class ShowVulAffectedStaticsRequest {
    private 'enterprise_project_id'?: string;
    private 'select_type'?: string;
    public type?: string;
    private 'cluster_id'?: string;
    private 'container_ids'?: Array<string>;
    private 'is_container'?: boolean;
    private 'vul_ids'?: Array<string>;
    private 'host_ids'?: Array<string>;
    public category?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulAffectedStaticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSelectType(selectType: string): ShowVulAffectedStaticsRequest {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withType(type: string): ShowVulAffectedStaticsRequest {
        this['type'] = type;
        return this;
    }
    public withClusterId(clusterId: string): ShowVulAffectedStaticsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContainerIds(containerIds: Array<string>): ShowVulAffectedStaticsRequest {
        this['container_ids'] = containerIds;
        return this;
    }
    public set containerIds(containerIds: Array<string>  | undefined) {
        this['container_ids'] = containerIds;
    }
    public get containerIds(): Array<string> | undefined {
        return this['container_ids'];
    }
    public withIsContainer(isContainer: boolean): ShowVulAffectedStaticsRequest {
        this['is_container'] = isContainer;
        return this;
    }
    public set isContainer(isContainer: boolean  | undefined) {
        this['is_container'] = isContainer;
    }
    public get isContainer(): boolean | undefined {
        return this['is_container'];
    }
    public withVulIds(vulIds: Array<string>): ShowVulAffectedStaticsRequest {
        this['vul_ids'] = vulIds;
        return this;
    }
    public set vulIds(vulIds: Array<string>  | undefined) {
        this['vul_ids'] = vulIds;
    }
    public get vulIds(): Array<string> | undefined {
        return this['vul_ids'];
    }
    public withHostIds(hostIds: Array<string>): ShowVulAffectedStaticsRequest {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withCategory(category: string): ShowVulAffectedStaticsRequest {
        this['category'] = category;
        return this;
    }
}