

export class Grants {
    private 'key_id'?: string;
    private 'grant_id'?: string;
    private 'grantee_principal'?: string;
    private 'grantee_principal_type'?: GrantsGranteePrincipalTypeEnum | string;
    public operations?: Array<string>;
    private 'issuing_principal'?: string;
    private 'creation_date'?: string;
    public name?: string;
    private 'retiring_principal'?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): Grants {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withGrantId(grantId: string): Grants {
        this['grant_id'] = grantId;
        return this;
    }
    public set grantId(grantId: string  | undefined) {
        this['grant_id'] = grantId;
    }
    public get grantId(): string | undefined {
        return this['grant_id'];
    }
    public withGranteePrincipal(granteePrincipal: string): Grants {
        this['grantee_principal'] = granteePrincipal;
        return this;
    }
    public set granteePrincipal(granteePrincipal: string  | undefined) {
        this['grantee_principal'] = granteePrincipal;
    }
    public get granteePrincipal(): string | undefined {
        return this['grantee_principal'];
    }
    public withGranteePrincipalType(granteePrincipalType: GrantsGranteePrincipalTypeEnum | string): Grants {
        this['grantee_principal_type'] = granteePrincipalType;
        return this;
    }
    public set granteePrincipalType(granteePrincipalType: GrantsGranteePrincipalTypeEnum | string  | undefined) {
        this['grantee_principal_type'] = granteePrincipalType;
    }
    public get granteePrincipalType(): GrantsGranteePrincipalTypeEnum | string | undefined {
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
    public set issuingPrincipal(issuingPrincipal: string  | undefined) {
        this['issuing_principal'] = issuingPrincipal;
    }
    public get issuingPrincipal(): string | undefined {
        return this['issuing_principal'];
    }
    public withCreationDate(creationDate: string): Grants {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
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
    public set retiringPrincipal(retiringPrincipal: string  | undefined) {
        this['retiring_principal'] = retiringPrincipal;
    }
    public get retiringPrincipal(): string | undefined {
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
