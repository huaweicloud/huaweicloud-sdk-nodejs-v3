import { Attachment } from './Attachment';
import { ClaimMode } from './ClaimMode';
import { PersistentStorageClaim } from './PersistentStorageClaim';
import { PolicyStatement } from './PolicyStatement';
import { StorageMetadata } from './StorageMetadata';


export class PersistentStorageAssignment {
    private 'storage_claim_id'?: string;
    private 'folder_path'?: string;
    public delimiter?: string;
    private 'claim_mode'?: ClaimMode;
    private 'storage_metadata'?: StorageMetadata;
    private 'policy_statement'?: PolicyStatement;
    public attachment?: Attachment;
    public constructor() { 
    }
    public withStorageClaimId(storageClaimId: string): PersistentStorageAssignment {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withFolderPath(folderPath: string): PersistentStorageAssignment {
        this['folder_path'] = folderPath;
        return this;
    }
    public set folderPath(folderPath: string  | undefined) {
        this['folder_path'] = folderPath;
    }
    public get folderPath(): string | undefined {
        return this['folder_path'];
    }
    public withDelimiter(delimiter: string): PersistentStorageAssignment {
        this['delimiter'] = delimiter;
        return this;
    }
    public withClaimMode(claimMode: ClaimMode): PersistentStorageAssignment {
        this['claim_mode'] = claimMode;
        return this;
    }
    public set claimMode(claimMode: ClaimMode  | undefined) {
        this['claim_mode'] = claimMode;
    }
    public get claimMode(): ClaimMode | undefined {
        return this['claim_mode'];
    }
    public withStorageMetadata(storageMetadata: StorageMetadata): PersistentStorageAssignment {
        this['storage_metadata'] = storageMetadata;
        return this;
    }
    public set storageMetadata(storageMetadata: StorageMetadata  | undefined) {
        this['storage_metadata'] = storageMetadata;
    }
    public get storageMetadata(): StorageMetadata | undefined {
        return this['storage_metadata'];
    }
    public withPolicyStatement(policyStatement: PolicyStatement): PersistentStorageAssignment {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: PolicyStatement  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): PolicyStatement | undefined {
        return this['policy_statement'];
    }
    public withAttachment(attachment: Attachment): PersistentStorageAssignment {
        this['attachment'] = attachment;
        return this;
    }
}