

export class KafkaSecurity {
    private 'trust_store_key_name'?: string;
    private 'trust_store_key'?: string;
    private 'trust_store_password'?: string;
    public type?: KafkaSecurityTypeEnum | string;
    public constructor() { 
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
    public withType(type: KafkaSecurityTypeEnum | string): KafkaSecurity {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KafkaSecurityTypeEnum {
    PLAINTEXT = 'PLAINTEXT',
    SASL_SSL = 'SASL_SSL'
}
