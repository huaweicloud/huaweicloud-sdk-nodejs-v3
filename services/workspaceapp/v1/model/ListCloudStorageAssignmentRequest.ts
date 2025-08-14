

export class ListCloudStorageAssignmentRequest {
    public offset?: number;
    public limit?: number;
    private 'storage_id'?: string;
    private 'claim_mode'?: string;
    public attach?: string;
    private 'attach_names'?: Array<string>;
    private 'capacity_filter'?: string;
    public constructor(storageId?: string, claimMode?: string) { 
        this['storage_id'] = storageId;
        this['claim_mode'] = claimMode;
    }
    public withOffset(offset: number): ListCloudStorageAssignmentRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudStorageAssignmentRequest {
        this['limit'] = limit;
        return this;
    }
    public withStorageId(storageId: string): ListCloudStorageAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withClaimMode(claimMode: string): ListCloudStorageAssignmentRequest {
        this['claim_mode'] = claimMode;
        return this;
    }
    public set claimMode(claimMode: string  | undefined) {
        this['claim_mode'] = claimMode;
    }
    public get claimMode(): string | undefined {
        return this['claim_mode'];
    }
    public withAttach(attach: string): ListCloudStorageAssignmentRequest {
        this['attach'] = attach;
        return this;
    }
    public withAttachNames(attachNames: Array<string>): ListCloudStorageAssignmentRequest {
        this['attach_names'] = attachNames;
        return this;
    }
    public set attachNames(attachNames: Array<string>  | undefined) {
        this['attach_names'] = attachNames;
    }
    public get attachNames(): Array<string> | undefined {
        return this['attach_names'];
    }
    public withCapacityFilter(capacityFilter: string): ListCloudStorageAssignmentRequest {
        this['capacity_filter'] = capacityFilter;
        return this;
    }
    public set capacityFilter(capacityFilter: string  | undefined) {
        this['capacity_filter'] = capacityFilter;
    }
    public get capacityFilter(): string | undefined {
        return this['capacity_filter'];
    }
}