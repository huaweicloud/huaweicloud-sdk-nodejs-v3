

export class ListBandwidthsRequest {
    public marker?: string;
    public limit?: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'share_type'?: ListBandwidthsRequestShareTypeEnum | undefined;
    public constructor() { 
    }
    public withMarker(marker: string): ListBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withShareType(shareType: ListBandwidthsRequestShareTypeEnum): ListBandwidthsRequest {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: ListBandwidthsRequestShareTypeEnum | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType() {
        return this['share_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthsRequestShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
