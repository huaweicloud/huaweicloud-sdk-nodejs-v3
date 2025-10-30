

export class ListGlobalVulnerabilitiesRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'repair_necessity'?: ListGlobalVulnerabilitiesRequestRepairNecessityEnum | string;
    private 'vul_id'?: string;
    public type?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withRegion(region: string): ListGlobalVulnerabilitiesRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGlobalVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListGlobalVulnerabilitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGlobalVulnerabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withRepairNecessity(repairNecessity: ListGlobalVulnerabilitiesRequestRepairNecessityEnum | string): ListGlobalVulnerabilitiesRequest {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: ListGlobalVulnerabilitiesRequestRepairNecessityEnum | string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): ListGlobalVulnerabilitiesRequestRepairNecessityEnum | string | undefined {
        return this['repair_necessity'];
    }
    public withVulId(vulId: string): ListGlobalVulnerabilitiesRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withType(type: string): ListGlobalVulnerabilitiesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalVulnerabilitiesRequestRepairNecessityEnum {
    IMMEDIATE_REPAIR = 'immediate_repair',
    DELAY_REPAIR = 'delay_repair',
    NOT_NEEDED_REPAIR = 'not_needed_repair'
}
