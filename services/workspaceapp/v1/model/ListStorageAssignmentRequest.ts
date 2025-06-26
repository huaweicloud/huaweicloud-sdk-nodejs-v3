

export class ListStorageAssignmentRequest {
    public offset?: number;
    public limit?: number;
    private 'storage_id'?: string;
    private 'claim_mode'?: string;
    private 'storage_claim_id'?: string;
    public attach?: string;
    private 'attach_type'?: string;
    public constructor(storageId?: string, claimMode?: string) { 
        this['storage_id'] = storageId;
        this['claim_mode'] = claimMode;
    }
    public withOffset(offset: number): ListStorageAssignmentRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListStorageAssignmentRequest {
        this['limit'] = limit;
        return this;
    }
    public withStorageId(storageId: string): ListStorageAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withClaimMode(claimMode: string): ListStorageAssignmentRequest {
        this['claim_mode'] = claimMode;
        return this;
    }
    public set claimMode(claimMode: string  | undefined) {
        this['claim_mode'] = claimMode;
    }
    public get claimMode(): string | undefined {
        return this['claim_mode'];
    }
    public withStorageClaimId(storageClaimId: string): ListStorageAssignmentRequest {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withAttach(attach: string): ListStorageAssignmentRequest {
        this['attach'] = attach;
        return this;
    }
    public withAttachType(attachType: string): ListStorageAssignmentRequest {
        this['attach_type'] = attachType;
        return this;
    }
    public set attachType(attachType: string  | undefined) {
        this['attach_type'] = attachType;
    }
    public get attachType(): string | undefined {
        return this['attach_type'];
    }
}