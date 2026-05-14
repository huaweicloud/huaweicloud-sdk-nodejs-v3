
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ReEncryptResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'source_key_id'?: string;
    private 'source_encryption_algorithm'?: string;
    private 'destination_encryption_algorithm'?: string;
    private 'cipher_text'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ReEncryptResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withSourceKeyId(sourceKeyId: string): ReEncryptResponse {
        this['source_key_id'] = sourceKeyId;
        return this;
    }
    public set sourceKeyId(sourceKeyId: string  | undefined) {
        this['source_key_id'] = sourceKeyId;
    }
    public get sourceKeyId(): string | undefined {
        return this['source_key_id'];
    }
    public withSourceEncryptionAlgorithm(sourceEncryptionAlgorithm: string): ReEncryptResponse {
        this['source_encryption_algorithm'] = sourceEncryptionAlgorithm;
        return this;
    }
    public set sourceEncryptionAlgorithm(sourceEncryptionAlgorithm: string  | undefined) {
        this['source_encryption_algorithm'] = sourceEncryptionAlgorithm;
    }
    public get sourceEncryptionAlgorithm(): string | undefined {
        return this['source_encryption_algorithm'];
    }
    public withDestinationEncryptionAlgorithm(destinationEncryptionAlgorithm: string): ReEncryptResponse {
        this['destination_encryption_algorithm'] = destinationEncryptionAlgorithm;
        return this;
    }
    public set destinationEncryptionAlgorithm(destinationEncryptionAlgorithm: string  | undefined) {
        this['destination_encryption_algorithm'] = destinationEncryptionAlgorithm;
    }
    public get destinationEncryptionAlgorithm(): string | undefined {
        return this['destination_encryption_algorithm'];
    }
    public withCipherText(cipherText: string): ReEncryptResponse {
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