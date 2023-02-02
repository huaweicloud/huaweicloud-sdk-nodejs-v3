

export class ListKeysRequestBody {
    public limit?: string;
    public marker?: string;
    private 'key_state'?: string | undefined;
    private 'key_spec'?: ListKeysRequestBodyKeySpecEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public sequence?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListKeysRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListKeysRequestBody {
        this['marker'] = marker;
        return this;
    }
    public withKeyState(keyState: string): ListKeysRequestBody {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState() {
        return this['key_state'];
    }
    public withKeySpec(keySpec: ListKeysRequestBodyKeySpecEnum): ListKeysRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: ListKeysRequestBodyKeySpecEnum | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec() {
        return this['key_spec'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListKeysRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withSequence(sequence: string): ListKeysRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListKeysRequestBodyKeySpecEnum {
    AES_256 = 'AES_256',
    SM4 = 'SM4',
    RSA_2048 = 'RSA_2048',
    RSA_3072 = 'RSA_3072',
    RSA_4096 = 'RSA_4096',
    EC_P256 = 'EC_P256',
    EC_P384 = 'EC_P384',
    SM2 = 'SM2',
    ALL = 'ALL'
}
