import { Dpd } from './Dpd';


export class IkePolicy {
    private 'ike_version'?: IkePolicyIkeVersionEnum | string;
    private 'phase1_negotiation_mode'?: IkePolicyPhase1NegotiationModeEnum | string;
    private 'authentication_algorithm'?: IkePolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: IkePolicyEncryptionAlgorithmEnum | string;
    private 'dh_group'?: string;
    private 'authentication_method'?: IkePolicyAuthenticationMethodEnum | string;
    private 'lifetime_seconds'?: number;
    private 'local_id_type'?: IkePolicyLocalIdTypeEnum | string;
    private 'local_id'?: string;
    private 'peer_id_type'?: IkePolicyPeerIdTypeEnum | string;
    private 'peer_id'?: string;
    public dpd?: Dpd;
    public constructor() { 
    }
    public withIkeVersion(ikeVersion: IkePolicyIkeVersionEnum | string): IkePolicy {
        this['ike_version'] = ikeVersion;
        return this;
    }
    public set ikeVersion(ikeVersion: IkePolicyIkeVersionEnum | string  | undefined) {
        this['ike_version'] = ikeVersion;
    }
    public get ikeVersion(): IkePolicyIkeVersionEnum | string | undefined {
        return this['ike_version'];
    }
    public withPhase1NegotiationMode(phase1NegotiationMode: IkePolicyPhase1NegotiationModeEnum | string): IkePolicy {
        this['phase1_negotiation_mode'] = phase1NegotiationMode;
        return this;
    }
    public set phase1NegotiationMode(phase1NegotiationMode: IkePolicyPhase1NegotiationModeEnum | string  | undefined) {
        this['phase1_negotiation_mode'] = phase1NegotiationMode;
    }
    public get phase1NegotiationMode(): IkePolicyPhase1NegotiationModeEnum | string | undefined {
        return this['phase1_negotiation_mode'];
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: IkePolicyAuthenticationAlgorithmEnum | string): IkePolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: IkePolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): IkePolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: IkePolicyEncryptionAlgorithmEnum | string): IkePolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: IkePolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): IkePolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withDhGroup(dhGroup: string): IkePolicy {
        this['dh_group'] = dhGroup;
        return this;
    }
    public set dhGroup(dhGroup: string  | undefined) {
        this['dh_group'] = dhGroup;
    }
    public get dhGroup(): string | undefined {
        return this['dh_group'];
    }
    public withAuthenticationMethod(authenticationMethod: IkePolicyAuthenticationMethodEnum | string): IkePolicy {
        this['authentication_method'] = authenticationMethod;
        return this;
    }
    public set authenticationMethod(authenticationMethod: IkePolicyAuthenticationMethodEnum | string  | undefined) {
        this['authentication_method'] = authenticationMethod;
    }
    public get authenticationMethod(): IkePolicyAuthenticationMethodEnum | string | undefined {
        return this['authentication_method'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): IkePolicy {
        this['lifetime_seconds'] = lifetimeSeconds;
        return this;
    }
    public set lifetimeSeconds(lifetimeSeconds: number  | undefined) {
        this['lifetime_seconds'] = lifetimeSeconds;
    }
    public get lifetimeSeconds(): number | undefined {
        return this['lifetime_seconds'];
    }
    public withLocalIdType(localIdType: IkePolicyLocalIdTypeEnum | string): IkePolicy {
        this['local_id_type'] = localIdType;
        return this;
    }
    public set localIdType(localIdType: IkePolicyLocalIdTypeEnum | string  | undefined) {
        this['local_id_type'] = localIdType;
    }
    public get localIdType(): IkePolicyLocalIdTypeEnum | string | undefined {
        return this['local_id_type'];
    }
    public withLocalId(localId: string): IkePolicy {
        this['local_id'] = localId;
        return this;
    }
    public set localId(localId: string  | undefined) {
        this['local_id'] = localId;
    }
    public get localId(): string | undefined {
        return this['local_id'];
    }
    public withPeerIdType(peerIdType: IkePolicyPeerIdTypeEnum | string): IkePolicy {
        this['peer_id_type'] = peerIdType;
        return this;
    }
    public set peerIdType(peerIdType: IkePolicyPeerIdTypeEnum | string  | undefined) {
        this['peer_id_type'] = peerIdType;
    }
    public get peerIdType(): IkePolicyPeerIdTypeEnum | string | undefined {
        return this['peer_id_type'];
    }
    public withPeerId(peerId: string): IkePolicy {
        this['peer_id'] = peerId;
        return this;
    }
    public set peerId(peerId: string  | undefined) {
        this['peer_id'] = peerId;
    }
    public get peerId(): string | undefined {
        return this['peer_id'];
    }
    public withDpd(dpd: Dpd): IkePolicy {
        this['dpd'] = dpd;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IkePolicyIkeVersionEnum {
    V1 = 'v1',
    V2 = 'v2'
}
/**
    * @export
    * @enum {string}
    */
export enum IkePolicyPhase1NegotiationModeEnum {
    MAIN = 'main',
    AGGRESSIVE = 'aggressive'
}
/**
    * @export
    * @enum {string}
    */
export enum IkePolicyAuthenticationAlgorithmEnum {
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
export enum IkePolicyEncryptionAlgorithmEnum {
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
export enum IkePolicyAuthenticationMethodEnum {
    PRE_SHARE = 'pre-share',
    DIGITAL_ENVELOPE_V2 = 'digital-envelope-v2'
}
/**
    * @export
    * @enum {string}
    */
export enum IkePolicyLocalIdTypeEnum {
    IP = 'ip',
    FQDN = 'fqdn'
}
/**
    * @export
    * @enum {string}
    */
export enum IkePolicyPeerIdTypeEnum {
    IP = 'ip',
    FQDN = 'fqdn'
}
