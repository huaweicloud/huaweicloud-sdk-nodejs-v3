import { ClaimMode } from './ClaimMode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateShareFolderResponse extends SdkResponse {
    private 'storage_claim_id'?: string;
    private 'folder_path'?: string;
    public delimiter?: string;
    private 'claim_mode'?: ClaimMode;
    public constructor() { 
        super();
    }
    public withStorageClaimId(storageClaimId: string): CreateShareFolderResponse {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withFolderPath(folderPath: string): CreateShareFolderResponse {
        this['folder_path'] = folderPath;
        return this;
    }
    public set folderPath(folderPath: string  | undefined) {
        this['folder_path'] = folderPath;
    }
    public get folderPath(): string | undefined {
        return this['folder_path'];
    }
    public withDelimiter(delimiter: string): CreateShareFolderResponse {
        this['delimiter'] = delimiter;
        return this;
    }
    public withClaimMode(claimMode: ClaimMode): CreateShareFolderResponse {
        this['claim_mode'] = claimMode;
        return this;
    }
    public set claimMode(claimMode: ClaimMode  | undefined) {
        this['claim_mode'] = claimMode;
    }
    public get claimMode(): ClaimMode | undefined {
        return this['claim_mode'];
    }
}