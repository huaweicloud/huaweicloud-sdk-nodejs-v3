

export class Grants {
    private 'key_id'?: string | undefined;
    private 'grant_id'?: string | undefined;
    private 'grantee_principal'?: string | undefined;
    private 'grantee_principal_type'?: GrantsGranteePrincipalTypeEnum | undefined;
    public operations?: Array<string>;
    private 'issuing_principal'?: string | undefined;
    private 'creation_date'?: string | undefined;
    public name?: string;
    private 'retiring_principal'?: string | undefined;
    public constructor() { 
    }
    public withKeyId(keyId: string): Grants {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withGrantId(grantId: string): Grants {
        this['grant_id'] = grantId;
        return this;
    }
    public set grantId(grantId: string | undefined) {
        this['grant_id'] = grantId;
    }
    public get grantId() {
        return this['grant_id'];
    }
    public withGranteePrincipal(granteePrincipal: string): Grants {
        this['grantee_principal'] = granteePrincipal;
        return this;
    }
    public set granteePrincipal(granteePrincipal: string | undefined) {
        this['grantee_principal'] = granteePrincipal;
    }
    public get granteePrincipal() {
        return this['grantee_principal'];
    }
    public withGranteePrincipalType(granteePrincipalType: GrantsGranteePrincipalTypeEnum): Grants {
        this['grantee_principal_type'] = granteePrincipalType;
        return this;
    }
    public set granteePrincipalType(granteePrincipalType: GrantsGranteePrincipalTypeEnum | undefined) {
        this['grantee_principal_type'] = granteePrincipalType;
    }
    public get granteePrincipalType() {
        return this['grantee_principal_type'];
    }
    public withOperations(operations: Array<string>): Grants {
        this['operations'] = operations;
        return this;
    }
    public withIssuingPrincipal(issuingPrincipal: string): Grants {
        this['issuing_principal'] = issuingPrincipal;
        return this;
    }
    public set issuingPrincipal(issuingPrincipal: string | undefined) {
        this['issuing_principal'] = issuingPrincipal;
    }
    public get issuingPrincipal() {
        return this['issuing_principal'];
    }
    public withCreationDate(creationDate: string): Grants {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate() {
        return this['creation_date'];
    }
    public withName(name: string): Grants {
        this['name'] = name;
        return this;
    }
    public withRetiringPrincipal(retiringPrincipal: string): Grants {
        this['retiring_principal'] = retiringPrincipal;
        return this;
    }
    public set retiringPrincipal(retiringPrincipal: string | undefined) {
        this['retiring_principal'] = retiringPrincipal;
    }
    public get retiringPrincipal() {
        return this['retiring_principal'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GrantsGranteePrincipalTypeEnum {
    USER = 'user',
    DOMAIN = 'domain'
}
