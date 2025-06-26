import { Blueprint } from './Blueprint';


export class CreateManagedAccountRequest {
    private 'account_name'?: string;
    private 'account_email'?: string;
    public phone?: string;
    private 'identity_store_user_name'?: string;
    private 'identity_store_email'?: string;
    private 'parent_organizational_unit_id'?: string;
    private 'parent_organizational_unit_name'?: string;
    public blueprint?: Blueprint;
    public constructor(accountName?: string, parentOrganizationalUnitId?: string, parentOrganizationalUnitName?: string) { 
        this['account_name'] = accountName;
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public withAccountName(accountName: string): CreateManagedAccountRequest {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountEmail(accountEmail: string): CreateManagedAccountRequest {
        this['account_email'] = accountEmail;
        return this;
    }
    public set accountEmail(accountEmail: string  | undefined) {
        this['account_email'] = accountEmail;
    }
    public get accountEmail(): string | undefined {
        return this['account_email'];
    }
    public withPhone(phone: string): CreateManagedAccountRequest {
        this['phone'] = phone;
        return this;
    }
    public withIdentityStoreUserName(identityStoreUserName: string): CreateManagedAccountRequest {
        this['identity_store_user_name'] = identityStoreUserName;
        return this;
    }
    public set identityStoreUserName(identityStoreUserName: string  | undefined) {
        this['identity_store_user_name'] = identityStoreUserName;
    }
    public get identityStoreUserName(): string | undefined {
        return this['identity_store_user_name'];
    }
    public withIdentityStoreEmail(identityStoreEmail: string): CreateManagedAccountRequest {
        this['identity_store_email'] = identityStoreEmail;
        return this;
    }
    public set identityStoreEmail(identityStoreEmail: string  | undefined) {
        this['identity_store_email'] = identityStoreEmail;
    }
    public get identityStoreEmail(): string | undefined {
        return this['identity_store_email'];
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): CreateManagedAccountRequest {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withParentOrganizationalUnitName(parentOrganizationalUnitName: string): CreateManagedAccountRequest {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
        return this;
    }
    public set parentOrganizationalUnitName(parentOrganizationalUnitName: string  | undefined) {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public get parentOrganizationalUnitName(): string | undefined {
        return this['parent_organizational_unit_name'];
    }
    public withBlueprint(blueprint: Blueprint): CreateManagedAccountRequest {
        this['blueprint'] = blueprint;
        return this;
    }
}