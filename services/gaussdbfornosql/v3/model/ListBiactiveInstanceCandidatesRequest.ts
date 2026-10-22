

export class ListBiactiveInstanceCandidatesRequest {
    private 'instance_id'?: string;
    private 'target_region_code'?: string;
    private 'target_instance_name'?: string;
    private 'data_sync_mode'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, targetRegionCode?: string) { 
        this['instance_id'] = instanceId;
        this['target_region_code'] = targetRegionCode;
    }
    public withInstanceId(instanceId: string): ListBiactiveInstanceCandidatesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTargetRegionCode(targetRegionCode: string): ListBiactiveInstanceCandidatesRequest {
        this['target_region_code'] = targetRegionCode;
        return this;
    }
    public set targetRegionCode(targetRegionCode: string  | undefined) {
        this['target_region_code'] = targetRegionCode;
    }
    public get targetRegionCode(): string | undefined {
        return this['target_region_code'];
    }
    public withTargetInstanceName(targetInstanceName: string): ListBiactiveInstanceCandidatesRequest {
        this['target_instance_name'] = targetInstanceName;
        return this;
    }
    public set targetInstanceName(targetInstanceName: string  | undefined) {
        this['target_instance_name'] = targetInstanceName;
    }
    public get targetInstanceName(): string | undefined {
        return this['target_instance_name'];
    }
    public withDataSyncMode(dataSyncMode: string): ListBiactiveInstanceCandidatesRequest {
        this['data_sync_mode'] = dataSyncMode;
        return this;
    }
    public set dataSyncMode(dataSyncMode: string  | undefined) {
        this['data_sync_mode'] = dataSyncMode;
    }
    public get dataSyncMode(): string | undefined {
        return this['data_sync_mode'];
    }
    public withOffset(offset: number): ListBiactiveInstanceCandidatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBiactiveInstanceCandidatesRequest {
        this['limit'] = limit;
        return this;
    }
}