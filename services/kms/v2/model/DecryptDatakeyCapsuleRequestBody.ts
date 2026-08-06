import { DecryptDatakeyCapsuleRequestBodyAttestationDocument } from './DecryptDatakeyCapsuleRequestBodyAttestationDocument';


export class DecryptDatakeyCapsuleRequestBody {
    private 'key_id'?: string;
    private 'public_key'?: string;
    private 'datakey_capsule'?: string;
    private 'attestation_document'?: DecryptDatakeyCapsuleRequestBodyAttestationDocument;
    public constructor(keyId?: string, datakeyCapsule?: string, attestationDocument?: DecryptDatakeyCapsuleRequestBodyAttestationDocument) { 
        this['key_id'] = keyId;
        this['datakey_capsule'] = datakeyCapsule;
        this['attestation_document'] = attestationDocument;
    }
    public withKeyId(keyId: string): DecryptDatakeyCapsuleRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPublicKey(publicKey: string): DecryptDatakeyCapsuleRequestBody {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withDatakeyCapsule(datakeyCapsule: string): DecryptDatakeyCapsuleRequestBody {
        this['datakey_capsule'] = datakeyCapsule;
        return this;
    }
    public set datakeyCapsule(datakeyCapsule: string  | undefined) {
        this['datakey_capsule'] = datakeyCapsule;
    }
    public get datakeyCapsule(): string | undefined {
        return this['datakey_capsule'];
    }
    public withAttestationDocument(attestationDocument: DecryptDatakeyCapsuleRequestBodyAttestationDocument): DecryptDatakeyCapsuleRequestBody {
        this['attestation_document'] = attestationDocument;
        return this;
    }
    public set attestationDocument(attestationDocument: DecryptDatakeyCapsuleRequestBodyAttestationDocument  | undefined) {
        this['attestation_document'] = attestationDocument;
    }
    public get attestationDocument(): DecryptDatakeyCapsuleRequestBodyAttestationDocument | undefined {
        return this['attestation_document'];
    }
}