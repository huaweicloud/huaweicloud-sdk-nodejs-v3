

export class ProjectEncryptionStatusBriefDto {
    public id?: number;
    public status?: ProjectEncryptionStatusBriefDtoStatusEnum | string;
    private 'last_encryption_at'?: string;
    private 'last_decryption_at'?: string;
    private 'is_consistent'?: boolean;
    public constructor() { 
    }
    public withId(id: number): ProjectEncryptionStatusBriefDto {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ProjectEncryptionStatusBriefDtoStatusEnum | string): ProjectEncryptionStatusBriefDto {
        this['status'] = status;
        return this;
    }
    public withLastEncryptionAt(lastEncryptionAt: string): ProjectEncryptionStatusBriefDto {
        this['last_encryption_at'] = lastEncryptionAt;
        return this;
    }
    public set lastEncryptionAt(lastEncryptionAt: string  | undefined) {
        this['last_encryption_at'] = lastEncryptionAt;
    }
    public get lastEncryptionAt(): string | undefined {
        return this['last_encryption_at'];
    }
    public withLastDecryptionAt(lastDecryptionAt: string): ProjectEncryptionStatusBriefDto {
        this['last_decryption_at'] = lastDecryptionAt;
        return this;
    }
    public set lastDecryptionAt(lastDecryptionAt: string  | undefined) {
        this['last_decryption_at'] = lastDecryptionAt;
    }
    public get lastDecryptionAt(): string | undefined {
        return this['last_decryption_at'];
    }
    public withIsConsistent(isConsistent: boolean): ProjectEncryptionStatusBriefDto {
        this['is_consistent'] = isConsistent;
        return this;
    }
    public set isConsistent(isConsistent: boolean  | undefined) {
        this['is_consistent'] = isConsistent;
    }
    public get isConsistent(): boolean | undefined {
        return this['is_consistent'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectEncryptionStatusBriefDtoStatusEnum {
    ENCRYPTING = 'encrypting',
    ENCRYPTED = 'encrypted',
    DECRYPTING = 'decrypting',
    DECRYPTED = 'decrypted'
}
