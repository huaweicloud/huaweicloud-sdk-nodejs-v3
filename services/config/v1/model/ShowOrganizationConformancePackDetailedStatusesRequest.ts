

export class ShowOrganizationConformancePackDetailedStatusesRequest {
    private 'organization_id'?: string;
    private 'conformance_pack_name'?: string;
    public state?: ShowOrganizationConformancePackDetailedStatusesRequestStateEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(organizationId?: string, conformancePackName?: string) { 
        this['organization_id'] = organizationId;
        this['conformance_pack_name'] = conformancePackName;
    }
    public withOrganizationId(organizationId: string): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withConformancePackName(conformancePackName: string): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['conformance_pack_name'] = conformancePackName;
        return this;
    }
    public set conformancePackName(conformancePackName: string  | undefined) {
        this['conformance_pack_name'] = conformancePackName;
    }
    public get conformancePackName(): string | undefined {
        return this['conformance_pack_name'];
    }
    public withState(state: ShowOrganizationConformancePackDetailedStatusesRequestStateEnum | string): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['state'] = state;
        return this;
    }
    public withLimit(limit: number): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOrganizationConformancePackDetailedStatusesRequestStateEnum {
    CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL',
    CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS',
    DELETE_FAILED = 'DELETE_FAILED'
}
