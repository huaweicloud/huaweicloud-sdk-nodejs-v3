

export class CreateSecurityPolicyOption {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string | undefined;
    public protocols: Array<string>;
    public ciphers: Array<CreateSecurityPolicyOptionCiphersEnum>;
    public constructor(protocols?: any, ciphers?: any) { 
        this['protocols'] = protocols;
        this['ciphers'] = ciphers;
    }
    public withName(name: string): CreateSecurityPolicyOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSecurityPolicyOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecurityPolicyOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProtocols(protocols: Array<string>): CreateSecurityPolicyOption {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: Array<CreateSecurityPolicyOptionCiphersEnum>): CreateSecurityPolicyOption {
        this['ciphers'] = ciphers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSecurityPolicyOptionCiphersEnum {
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
