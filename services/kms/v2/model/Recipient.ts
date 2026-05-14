

export class Recipient {
    private 'attestation_document'?: string;
    private 'key_encryption_algorithm'?: string;
    public constructor() { 
    }
    public withAttestationDocument(attestationDocument: string): Recipient {
        this['attestation_document'] = attestationDocument;
        return this;
    }
    public set attestationDocument(attestationDocument: string  | undefined) {
        this['attestation_document'] = attestationDocument;
    }
    public get attestationDocument(): string | undefined {
        return this['attestation_document'];
    }
    public withKeyEncryptionAlgorithm(keyEncryptionAlgorithm: string): Recipient {
        this['key_encryption_algorithm'] = keyEncryptionAlgorithm;
        return this;
    }
    public set keyEncryptionAlgorithm(keyEncryptionAlgorithm: string  | undefined) {
        this['key_encryption_algorithm'] = keyEncryptionAlgorithm;
    }
    public get keyEncryptionAlgorithm(): string | undefined {
        return this['key_encryption_algorithm'];
    }
}