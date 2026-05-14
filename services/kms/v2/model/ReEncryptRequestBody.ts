

export class ReEncryptRequestBody {
    private 'source_key_id'?: string;
    private 'source_additional_authenticated_data'?: string;
    private 'source_encryption_algorithm'?: string;
    private 'destination_key_id'?: string;
    private 'destination_additional_authenticated_data'?: string;
    private 'destination_encryption_algorithm'?: string;
    private 'datakey_cipher_length'?: string;
    private 'cipher_text'?: string;
    public constructor(destinationKeyId?: string, cipherText?: string) { 
        this['destination_key_id'] = destinationKeyId;
        this['cipher_text'] = cipherText;
    }
    public withSourceKeyId(sourceKeyId: string): ReEncryptRequestBody {
        this['source_key_id'] = sourceKeyId;
        return this;
    }
    public set sourceKeyId(sourceKeyId: string  | undefined) {
        this['source_key_id'] = sourceKeyId;
    }
    public get sourceKeyId(): string | undefined {
        return this['source_key_id'];
    }
    public withSourceAdditionalAuthenticatedData(sourceAdditionalAuthenticatedData: string): ReEncryptRequestBody {
        this['source_additional_authenticated_data'] = sourceAdditionalAuthenticatedData;
        return this;
    }
    public set sourceAdditionalAuthenticatedData(sourceAdditionalAuthenticatedData: string  | undefined) {
        this['source_additional_authenticated_data'] = sourceAdditionalAuthenticatedData;
    }
    public get sourceAdditionalAuthenticatedData(): string | undefined {
        return this['source_additional_authenticated_data'];
    }
    public withSourceEncryptionAlgorithm(sourceEncryptionAlgorithm: string): ReEncryptRequestBody {
        this['source_encryption_algorithm'] = sourceEncryptionAlgorithm;
        return this;
    }
    public set sourceEncryptionAlgorithm(sourceEncryptionAlgorithm: string  | undefined) {
        this['source_encryption_algorithm'] = sourceEncryptionAlgorithm;
    }
    public get sourceEncryptionAlgorithm(): string | undefined {
        return this['source_encryption_algorithm'];
    }
    public withDestinationKeyId(destinationKeyId: string): ReEncryptRequestBody {
        this['destination_key_id'] = destinationKeyId;
        return this;
    }
    public set destinationKeyId(destinationKeyId: string  | undefined) {
        this['destination_key_id'] = destinationKeyId;
    }
    public get destinationKeyId(): string | undefined {
        return this['destination_key_id'];
    }
    public withDestinationAdditionalAuthenticatedData(destinationAdditionalAuthenticatedData: string): ReEncryptRequestBody {
        this['destination_additional_authenticated_data'] = destinationAdditionalAuthenticatedData;
        return this;
    }
    public set destinationAdditionalAuthenticatedData(destinationAdditionalAuthenticatedData: string  | undefined) {
        this['destination_additional_authenticated_data'] = destinationAdditionalAuthenticatedData;
    }
    public get destinationAdditionalAuthenticatedData(): string | undefined {
        return this['destination_additional_authenticated_data'];
    }
    public withDestinationEncryptionAlgorithm(destinationEncryptionAlgorithm: string): ReEncryptRequestBody {
        this['destination_encryption_algorithm'] = destinationEncryptionAlgorithm;
        return this;
    }
    public set destinationEncryptionAlgorithm(destinationEncryptionAlgorithm: string  | undefined) {
        this['destination_encryption_algorithm'] = destinationEncryptionAlgorithm;
    }
    public get destinationEncryptionAlgorithm(): string | undefined {
        return this['destination_encryption_algorithm'];
    }
    public withDatakeyCipherLength(datakeyCipherLength: string): ReEncryptRequestBody {
        this['datakey_cipher_length'] = datakeyCipherLength;
        return this;
    }
    public set datakeyCipherLength(datakeyCipherLength: string  | undefined) {
        this['datakey_cipher_length'] = datakeyCipherLength;
    }
    public get datakeyCipherLength(): string | undefined {
        return this['datakey_cipher_length'];
    }
    public withCipherText(cipherText: string): ReEncryptRequestBody {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string  | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText(): string | undefined {
        return this['cipher_text'];
    }
}