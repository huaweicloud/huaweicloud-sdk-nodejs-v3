

export class ShowOrganizationConformancePackDetailedStatusesRequest {
    private 'organization_id'?: string;
    private 'conformance_pack_name'?: string;
    private 'organization_conformance_pack_id'?: string;
    public state?: ShowOrganizationConformancePackDetailedStatusesRequestStateEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(organizationId?: string) { 
        this['organization_id'] = organizationId;
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
    public withOrganizationConformancePackId(organizationConformancePackId: string): ShowOrganizationConformancePackDetailedStatusesRequest {
        this['organization_conformance_pack_id'] = organizationConformancePackId;
        return this;
    }
    public set organizationConformancePackId(organizationConformancePackId: string  | undefined) {
        this['organization_conformance_pack_id'] = organizationConformancePackId;
    }
    public get organizationConformancePackId(): string | undefined {
        return this['organization_conformance_pack_id'];
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
    DELETE_FAILED = 'DELETE_FAILED',
    UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL',
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED'
}
