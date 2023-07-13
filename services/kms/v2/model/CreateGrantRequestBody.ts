

export class CreateGrantRequestBody {
    private 'key_id': string | undefined;
    private 'grantee_principal': string | undefined;
    public operations: Array<string>;
    public name?: string;
    private 'retiring_principal'?: string | undefined;
    private 'grantee_principal_type'?: CreateGrantRequestBodyGranteePrincipalTypeEnum | undefined;
    public sequence?: string;
    public constructor(keyId?: any, granteePrincipal?: any, operations?: any) { 
        this['key_id'] = keyId;
        this['grantee_principal'] = granteePrincipal;
        this['operations'] = operations;
    }
    public withKeyId(keyId: string): CreateGrantRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withGranteePrincipal(granteePrincipal: string): CreateGrantRequestBody {
        this['grantee_principal'] = granteePrincipal;
        return this;
    }
    public set granteePrincipal(granteePrincipal: string | undefined) {
        this['grantee_principal'] = granteePrincipal;
    }
    public get granteePrincipal() {
        return this['grantee_principal'];
    }
    public withOperations(operations: Array<string>): CreateGrantRequestBody {
        this['operations'] = operations;
        return this;
    }
    public withName(name: string): CreateGrantRequestBody {
        this['name'] = name;
        return this;
    }
    public withRetiringPrincipal(retiringPrincipal: string): CreateGrantRequestBody {
        this['retiring_principal'] = retiringPrincipal;
        return this;
    }
    public set retiringPrincipal(retiringPrincipal: string | undefined) {
        this['retiring_principal'] = retiringPrincipal;
    }
    public get retiringPrincipal() {
        return this['retiring_principal'];
    }
    public withGranteePrincipalType(granteePrincipalType: CreateGrantRequestBodyGranteePrincipalTypeEnum): CreateGrantRequestBody {
        this['grantee_principal_type'] = granteePrincipalType;
        return this;
    }
    public set granteePrincipalType(granteePrincipalType: CreateGrantRequestBodyGranteePrincipalTypeEnum | undefined) {
        this['grantee_principal_type'] = granteePrincipalType;
    }
    public get granteePrincipalType() {
        return this['grantee_principal_type'];
    }
    public withSequence(sequence: string): CreateGrantRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGrantRequestBodyGranteePrincipalTypeEnum {
    USER = 'user',
    DOMAIN = 'domain'
}
