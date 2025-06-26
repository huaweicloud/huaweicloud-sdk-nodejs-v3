import { ClaimMode } from './ClaimMode';
import { PersistentStorageClaim } from './PersistentStorageClaim';


export class SharePersistentStorageClaim {
    private 'storage_claim_id'?: string;
    private 'folder_path'?: string;
    public delimiter?: string;
    private 'claim_mode'?: ClaimMode;
    public count?: { [key: string]: number; };
    public constructor() { 
    }
    public withStorageClaimId(storageClaimId: string): SharePersistentStorageClaim {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withFolderPath(folderPath: string): SharePersistentStorageClaim {
        this['folder_path'] = folderPath;
        return this;
    }
    public set folderPath(folderPath: string  | undefined) {
        this['folder_path'] = folderPath;
    }
    public get folderPath(): string | undefined {
        return this['folder_path'];
    }
    public withDelimiter(delimiter: string): SharePersistentStorageClaim {
        this['delimiter'] = delimiter;
        return this;
    }
    public withClaimMode(claimMode: ClaimMode): SharePersistentStorageClaim {
        this['claim_mode'] = claimMode;
        return this;
    }
    public set claimMode(claimMode: ClaimMode  | undefined) {
        this['claim_mode'] = claimMode;
    }
    public get claimMode(): ClaimMode | undefined {
        return this['claim_mode'];
    }
    public withCount(count: { [key: string]: number; }): SharePersistentStorageClaim {
        this['count'] = count;
        return this;
    }
}