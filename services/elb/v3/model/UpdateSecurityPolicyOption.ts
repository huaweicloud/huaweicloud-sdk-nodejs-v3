

export class UpdateSecurityPolicyOption {
    public name?: string;
    public description?: string;
    public protocols?: Array<string>;
    public ciphers?: Array<UpdateSecurityPolicyOptionCiphersEnum>;
    public constructor() { 
    }
    public withName(name: string): UpdateSecurityPolicyOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSecurityPolicyOption {
        this['description'] = description;
        return this;
    }
    public withProtocols(protocols: Array<string>): UpdateSecurityPolicyOption {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: Array<UpdateSecurityPolicyOptionCiphersEnum>): UpdateSecurityPolicyOption {
        this['ciphers'] = ciphers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSecurityPolicyOptionCiphersEnum {
    ECDHE_RSA_AES256_GCM_SHA384 = 'ECDHE-RSA-AES256-GCM-SHA384',
    ECDHE_RSA_AES128_GCM_SHA256 = 'ECDHE-RSA-AES128-GCM-SHA256',
    ECDHE_ECDSA_AES256_GCM_SHA384 = 'ECDHE-ECDSA-AES256-GCM-SHA384',
    ECDHE_ECDSA_AES128_GCM_SHA256 = 'ECDHE-ECDSA-AES128-GCM-SHA256',
    AES128_GCM_SHA256 = 'AES128-GCM-SHA256',
    AES256_GCM_SHA384 = 'AES256-GCM-SHA384',
    ECDHE_ECDSA_AES128_SHA256 = 'ECDHE-ECDSA-AES128-SHA256',
    ECDHE_RSA_AES128_SHA256 = 'ECDHE-RSA-AES128-SHA256',
    AES128_SHA256 = 'AES128-SHA256',
    AES256_SHA256 = 'AES256-SHA256',
    ECDHE_ECDSA_AES256_SHA384 = 'ECDHE-ECDSA-AES256-SHA384',
    ECDHE_RSA_AES256_SHA384 = 'ECDHE-RSA-AES256-SHA384',
    ECDHE_ECDSA_AES128_SHA = 'ECDHE-ECDSA-AES128-SHA',
    ECDHE_RSA_AES128_SHA = 'ECDHE-RSA-AES128-SHA',
    ECDHE_RSA_AES256_SHA = 'ECDHE-RSA-AES256-SHA',
    ECDHE_ECDSA_AES256_SHA = 'ECDHE-ECDSA-AES256-SHA',
    AES128_SHA = 'AES128-SHA',
    AES256_SHA = 'AES256-SHA',
    CAMELLIA128_SHA = 'CAMELLIA128-SHA',
    DES_CBC3_SHA = 'DES-CBC3-SHA',
    CAMELLIA256_SHA = 'CAMELLIA256-SHA',
    ECDHE_RSA_CHACHA20_POLY1305 = 'ECDHE-RSA-CHACHA20-POLY1305',
    ECDHE_ECDSA_CHACHA20_POLY1305 = 'ECDHE-ECDSA-CHACHA20-POLY1305',
    TLS_AES_128_GCM_SHA256 = 'TLS_AES_128_GCM_SHA256',
    TLS_AES_256_GCM_SHA384 = 'TLS_AES_256_GCM_SHA384',
    TLS_CHACHA20_POLY1305_SHA256 = 'TLS_CHACHA20_POLY1305_SHA256',
    TLS_AES_128_CCM_SHA256 = 'TLS_AES_128_CCM_SHA256',
    TLS_AES_128_CCM_8_SHA256 = 'TLS_AES_128_CCM_8_SHA256'
}
