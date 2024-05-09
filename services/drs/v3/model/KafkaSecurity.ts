

export class KafkaSecurity {
    public type?: KafkaSecurityTypeEnum | string;
    private 'trust_store_key_name'?: string;
    private 'trust_store_key'?: string;
    private 'trust_store_password'?: string;
    private 'endpoint_algorithm'?: string;
    private 'sasl_mechanism'?: string;
    private 'delegation_tokens'?: boolean;
    private 'enable_key_store'?: boolean;
    private 'key_store_key'?: string;
    private 'key_store_key_name'?: string;
    private 'key_store_password'?: string;
    private 'set_private_key_password'?: boolean;
    private 'key_password'?: string;
    public constructor() { 
    }
    public withType(type: KafkaSecurityTypeEnum | string): KafkaSecurity {
        this['type'] = type;
        return this;
    }
    public withTrustStoreKeyName(trustStoreKeyName: string): KafkaSecurity {
        this['trust_store_key_name'] = trustStoreKeyName;
        return this;
    }
    public set trustStoreKeyName(trustStoreKeyName: string  | undefined) {
        this['trust_store_key_name'] = trustStoreKeyName;
    }
    public get trustStoreKeyName(): string | undefined {
        return this['trust_store_key_name'];
    }
    public withTrustStoreKey(trustStoreKey: string): KafkaSecurity {
        this['trust_store_key'] = trustStoreKey;
        return this;
    }
    public set trustStoreKey(trustStoreKey: string  | undefined) {
        this['trust_store_key'] = trustStoreKey;
    }
    public get trustStoreKey(): string | undefined {
        return this['trust_store_key'];
    }
    public withTrustStorePassword(trustStorePassword: string): KafkaSecurity {
        this['trust_store_password'] = trustStorePassword;
        return this;
    }
    public set trustStorePassword(trustStorePassword: string  | undefined) {
        this['trust_store_password'] = trustStorePassword;
    }
    public get trustStorePassword(): string | undefined {
        return this['trust_store_password'];
    }
    public withEndpointAlgorithm(endpointAlgorithm: string): KafkaSecurity {
        this['endpoint_algorithm'] = endpointAlgorithm;
        return this;
    }
    public set endpointAlgorithm(endpointAlgorithm: string  | undefined) {
        this['endpoint_algorithm'] = endpointAlgorithm;
    }
    public get endpointAlgorithm(): string | undefined {
        return this['endpoint_algorithm'];
    }
    public withSaslMechanism(saslMechanism: string): KafkaSecurity {
        this['sasl_mechanism'] = saslMechanism;
        return this;
    }
    public set saslMechanism(saslMechanism: string  | undefined) {
        this['sasl_mechanism'] = saslMechanism;
    }
    public get saslMechanism(): string | undefined {
        return this['sasl_mechanism'];
    }
    public withDelegationTokens(delegationTokens: boolean): KafkaSecurity {
        this['delegation_tokens'] = delegationTokens;
        return this;
    }
    public set delegationTokens(delegationTokens: boolean  | undefined) {
        this['delegation_tokens'] = delegationTokens;
    }
    public get delegationTokens(): boolean | undefined {
        return this['delegation_tokens'];
    }
    public withEnableKeyStore(enableKeyStore: boolean): KafkaSecurity {
        this['enable_key_store'] = enableKeyStore;
        return this;
    }
    public set enableKeyStore(enableKeyStore: boolean  | undefined) {
        this['enable_key_store'] = enableKeyStore;
    }
    public get enableKeyStore(): boolean | undefined {
        return this['enable_key_store'];
    }
    public withKeyStoreKey(keyStoreKey: string): KafkaSecurity {
        this['key_store_key'] = keyStoreKey;
        return this;
    }
    public set keyStoreKey(keyStoreKey: string  | undefined) {
        this['key_store_key'] = keyStoreKey;
    }
    public get keyStoreKey(): string | undefined {
        return this['key_store_key'];
    }
    public withKeyStoreKeyName(keyStoreKeyName: string): KafkaSecurity {
        this['key_store_key_name'] = keyStoreKeyName;
        return this;
    }
    public set keyStoreKeyName(keyStoreKeyName: string  | undefined) {
        this['key_store_key_name'] = keyStoreKeyName;
    }
    public get keyStoreKeyName(): string | undefined {
        return this['key_store_key_name'];
    }
    public withKeyStorePassword(keyStorePassword: string): KafkaSecurity {
        this['key_store_password'] = keyStorePassword;
        return this;
    }
    public set keyStorePassword(keyStorePassword: string  | undefined) {
        this['key_store_password'] = keyStorePassword;
    }
    public get keyStorePassword(): string | undefined {
        return this['key_store_password'];
    }
    public withSetPrivateKeyPassword(setPrivateKeyPassword: boolean): KafkaSecurity {
        this['set_private_key_password'] = setPrivateKeyPassword;
        return this;
    }
    public set setPrivateKeyPassword(setPrivateKeyPassword: boolean  | undefined) {
        this['set_private_key_password'] = setPrivateKeyPassword;
    }
    public get setPrivateKeyPassword(): boolean | undefined {
        return this['set_private_key_password'];
    }
    public withKeyPassword(keyPassword: string): KafkaSecurity {
        this['key_password'] = keyPassword;
        return this;
    }
    public set keyPassword(keyPassword: string  | undefined) {
        this['key_password'] = keyPassword;
    }
    public get keyPassword(): string | undefined {
        return this['key_password'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KafkaSecurityTypeEnum {
    PLAINTEXT = 'PLAINTEXT',
    SASL_PLAINTEXT = 'SASL_PLAINTEXT',
    SASL_SSL = 'SASL_SSL',
    SSL = 'SSL'
}
