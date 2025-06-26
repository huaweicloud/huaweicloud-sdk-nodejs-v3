import { ClaimMode } from './ClaimMode';


export class PersistentStorageClaim {
    private 'storage_claim_id'?: string;
    private 'folder_path'?: string;
    public delimiter?: string;
    private 'claim_mode'?: ClaimMode;
    public constructor() { 
    }
    public withStorageClaimId(storageClaimId: string): PersistentStorageClaim {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withFolderPath(folderPath: string): PersistentStorageClaim {
        this['folder_path'] = folderPath;
        return this;
    }
    public set folderPath(folderPath: string  | undefined) {
        this['folder_path'] = folderPath;
    }
    public get folderPath(): string | undefined {
        return this['folder_path'];
    }
    public withDelimiter(delimiter: string): PersistentStorageClaim {
        this['delimiter'] = delimiter;
        return this;
    }
    public withClaimMode(claimMode: ClaimMode): PersistentStorageClaim {
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