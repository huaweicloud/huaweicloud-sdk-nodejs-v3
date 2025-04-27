
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDnssecConfigResponse extends SdkResponse {
    private 'zone_name'?: string;
    private 'key_tag'?: number;
    public flag?: number;
    private 'digest_algorithm'?: string;
    private 'digest_type'?: number;
    public digest?: string;
    public signature?: string;
    private 'signature_type'?: number;
    private 'ksk_public_key'?: string;
    private 'ds_record'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withZoneName(zoneName: string): ShowDnssecConfigResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withKeyTag(keyTag: number): ShowDnssecConfigResponse {
        this['key_tag'] = keyTag;
        return this;
    }
    public set keyTag(keyTag: number  | undefined) {
        this['key_tag'] = keyTag;
    }
    public get keyTag(): number | undefined {
        return this['key_tag'];
    }
    public withFlag(flag: number): ShowDnssecConfigResponse {
        this['flag'] = flag;
        return this;
    }
    public withDigestAlgorithm(digestAlgorithm: string): ShowDnssecConfigResponse {
        this['digest_algorithm'] = digestAlgorithm;
        return this;
    }
    public set digestAlgorithm(digestAlgorithm: string  | undefined) {
        this['digest_algorithm'] = digestAlgorithm;
    }
    public get digestAlgorithm(): string | undefined {
        return this['digest_algorithm'];
    }
    public withDigestType(digestType: number): ShowDnssecConfigResponse {
        this['digest_type'] = digestType;
        return this;
    }
    public set digestType(digestType: number  | undefined) {
        this['digest_type'] = digestType;
    }
    public get digestType(): number | undefined {
        return this['digest_type'];
    }
    public withDigest(digest: string): ShowDnssecConfigResponse {
        this['digest'] = digest;
        return this;
    }
    public withSignature(signature: string): ShowDnssecConfigResponse {
        this['signature'] = signature;
        return this;
    }
    public withSignatureType(signatureType: number): ShowDnssecConfigResponse {
        this['signature_type'] = signatureType;
        return this;
    }
    public set signatureType(signatureType: number  | undefined) {
        this['signature_type'] = signatureType;
    }
    public get signatureType(): number | undefined {
        return this['signature_type'];
    }
    public withKskPublicKey(kskPublicKey: string): ShowDnssecConfigResponse {
        this['ksk_public_key'] = kskPublicKey;
        return this;
    }
    public set kskPublicKey(kskPublicKey: string  | undefined) {
        this['ksk_public_key'] = kskPublicKey;
    }
    public get kskPublicKey(): string | undefined {
        return this['ksk_public_key'];
    }
    public withDsRecord(dsRecord: string): ShowDnssecConfigResponse {
        this['ds_record'] = dsRecord;
        return this;
    }
    public set dsRecord(dsRecord: string  | undefined) {
        this['ds_record'] = dsRecord;
    }
    public get dsRecord(): string | undefined {
        return this['ds_record'];
    }
    public withCreatedAt(createdAt: string): ShowDnssecConfigResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowDnssecConfigResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: string): ShowDnssecConfigResponse {
        this['status'] = status;
        return this;
    }
}