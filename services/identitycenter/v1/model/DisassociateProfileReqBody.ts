

export class DisassociateProfileReqBody {
    public id?: string;
    private 'accessor_type'?: DisassociateProfileReqBodyAccessorTypeEnum | string;
    private 'identity_store_id'?: string;
    public constructor(id?: string, accessorType?: string, identityStoreId?: string) { 
        this['id'] = id;
        this['accessor_type'] = accessorType;
        this['identity_store_id'] = identityStoreId;
    }
    public withId(id: string): DisassociateProfileReqBody {
        this['id'] = id;
        return this;
    }
    public withAccessorType(accessorType: DisassociateProfileReqBodyAccessorTypeEnum | string): DisassociateProfileReqBody {
        this['accessor_type'] = accessorType;
        return this;
    }
    public set accessorType(accessorType: DisassociateProfileReqBodyAccessorTypeEnum | string  | undefined) {
        this['accessor_type'] = accessorType;
    }
    public get accessorType(): DisassociateProfileReqBodyAccessorTypeEnum | string | undefined {
        return this['accessor_type'];
    }
    public withIdentityStoreId(identityStoreId: string): DisassociateProfileReqBody {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisassociateProfileReqBodyAccessorTypeEnum {
    GROUP = 'GROUP',
    USER = 'USER'
}
