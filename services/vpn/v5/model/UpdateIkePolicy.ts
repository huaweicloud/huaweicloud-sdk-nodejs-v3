import { UpdateDpd } from './UpdateDpd';


export class UpdateIkePolicy {
    private 'ike_version'?: UpdateIkePolicyIkeVersionEnum | string;
    private 'phase1_negotiation_mode'?: UpdateIkePolicyPhase1NegotiationModeEnum | string;
    private 'authentication_algorithm'?: UpdateIkePolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: UpdateIkePolicyEncryptionAlgorithmEnum | string;
    private 'dh_group'?: string;
    private 'lifetime_seconds'?: number;
    private 'local_id_type'?: UpdateIkePolicyLocalIdTypeEnum | string;
    private 'local_id'?: string;
    private 'peer_id_type'?: UpdateIkePolicyPeerIdTypeEnum | string;
    private 'peer_id'?: string;
    public dpd?: UpdateDpd;
    public constructor() { 
    }
    public withIkeVersion(ikeVersion: UpdateIkePolicyIkeVersionEnum | string): UpdateIkePolicy {
        this['ike_version'] = ikeVersion;
        return this;
    }
    public set ikeVersion(ikeVersion: UpdateIkePolicyIkeVersionEnum | string  | undefined) {
        this['ike_version'] = ikeVersion;
    }
    public get ikeVersion(): UpdateIkePolicyIkeVersionEnum | string | undefined {
        return this['ike_version'];
    }
    public withPhase1NegotiationMode(phase1NegotiationMode: UpdateIkePolicyPhase1NegotiationModeEnum | string): UpdateIkePolicy {
        this['phase1_negotiation_mode'] = phase1NegotiationMode;
        return this;
    }
    public set phase1NegotiationMode(phase1NegotiationMode: UpdateIkePolicyPhase1NegotiationModeEnum | string  | undefined) {
        this['phase1_negotiation_mode'] = phase1NegotiationMode;
    }
    public get phase1NegotiationMode(): UpdateIkePolicyPhase1NegotiationModeEnum | string | undefined {
        return this['phase1_negotiation_mode'];
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: UpdateIkePolicyAuthenticationAlgorithmEnum | string): UpdateIkePolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: UpdateIkePolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): UpdateIkePolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: UpdateIkePolicyEncryptionAlgorithmEnum | string): UpdateIkePolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: UpdateIkePolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): UpdateIkePolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withDhGroup(dhGroup: string): UpdateIkePolicy {
        this['dh_group'] = dhGroup;
        return this;
    }
    public set dhGroup(dhGroup: string  | undefined) {
        this['dh_group'] = dhGroup;
    }
    public get dhGroup(): string | undefined {
        return this['dh_group'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): UpdateIkePolicy {
        this['lifetime_seconds'] = lifetimeSeconds;
        return this;
    }
    public set lifetimeSeconds(lifetimeSeconds: number  | undefined) {
        this['lifetime_seconds'] = lifetimeSeconds;
    }
    public get lifetimeSeconds(): number | undefined {
        return this['lifetime_seconds'];
    }
    public withLocalIdType(localIdType: UpdateIkePolicyLocalIdTypeEnum | string): UpdateIkePolicy {
        this['local_id_type'] = localIdType;
        return this;
    }
    public set localIdType(localIdType: UpdateIkePolicyLocalIdTypeEnum | string  | undefined) {
        this['local_id_type'] = localIdType;
    }
    public get localIdType(): UpdateIkePolicyLocalIdTypeEnum | string | undefined {
        return this['local_id_type'];
    }
    public withLocalId(localId: string): UpdateIkePolicy {
        this['local_id'] = localId;
        return this;
    }
    public set localId(localId: string  | undefined) {
        this['local_id'] = localId;
    }
    public get localId(): string | undefined {
        return this['local_id'];
    }
    public withPeerIdType(peerIdType: UpdateIkePolicyPeerIdTypeEnum | string): UpdateIkePolicy {
        this['peer_id_type'] = peerIdType;
        return this;
    }
    public set peerIdType(peerIdType: UpdateIkePolicyPeerIdTypeEnum | string  | undefined) {
        this['peer_id_type'] = peerIdType;
    }
    public get peerIdType(): UpdateIkePolicyPeerIdTypeEnum | string | undefined {
        return this['peer_id_type'];
    }
    public withPeerId(peerId: string): UpdateIkePolicy {
        this['peer_id'] = peerId;
        return this;
    }
    public set peerId(peerId: string  | undefined) {
        this['peer_id'] = peerId;
    }
    public get peerId(): string | undefined {
        return this['peer_id'];
    }
    public withDpd(dpd: UpdateDpd): UpdateIkePolicy {
        this['dpd'] = dpd;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyIkeVersionEnum {
    V1 = 'v1',
    V2 = 'v2'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyPhase1NegotiationModeEnum {
    MAIN = 'main',
    AGGRESSIVE = 'aggressive'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyAuthenticationAlgorithmEnum {
    SHA1 = 'sha1',
    MD5 = 'md5',
    SHA2_256 = 'sha2-256',
    SHA2_384 = 'sha2-384',
    SHA2_512 = 'sha2-512'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyEncryptionAlgorithmEnum {
    E_3DES = '3des',
    AES_128 = 'aes-128',
    AES_192 = 'aes-192',
    AES_256 = 'aes-256',
    AES_128_GCM_16 = 'aes-128-gcm-16',
    AES_256_GCM_16 = 'aes-256-gcm-16',
    AES_128_GCM_128 = 'aes-128-gcm-128',
    AES_256_GCM_128 = 'aes-256-gcm-128'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyLocalIdTypeEnum {
    IP = 'ip',
    FQDN = 'fqdn'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIkePolicyPeerIdTypeEnum {
    IP = 'ip',
    FQDN = 'fqdn'
}
