

export class ShowSubscriptionResourcesRequest {
    private 'workspace_id'?: string;
    public sku?: ShowSubscriptionResourcesRequestSkuEnum | string;
    public constructor(workspaceId?: string, sku?: string) { 
        this['workspace_id'] = workspaceId;
        this['sku'] = sku;
    }
    public withWorkspaceId(workspaceId: string): ShowSubscriptionResourcesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSku(sku: ShowSubscriptionResourcesRequestSkuEnum | string): ShowSubscriptionResourcesRequest {
        this['sku'] = sku;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSubscriptionResourcesRequestSkuEnum {
    FLOW_DATA_BANDWIDTH = 'FLOW_DATA_BANDWIDTH',
    CSS_CAPACITY = 'CSS_CAPACITY',
    PAIMON_CAPACITY = 'PAIMON_CAPACITY',
    OBS_CAPACITY = 'OBS_CAPACITY',
    JOB_CAPACITY = 'JOB_CAPACITY',
    AD_HOC_COUNT = 'AD_HOC_COUNT'
}
