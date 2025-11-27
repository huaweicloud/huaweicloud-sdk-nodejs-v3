

export class CallIdentityPrimitiveTypeHolder {
    private 'call_identity'?: CallIdentityPrimitiveTypeHolderCallIdentityEnum | string;
    public constructor() { 
    }
    public withCallIdentity(callIdentity: CallIdentityPrimitiveTypeHolderCallIdentityEnum | string): CallIdentityPrimitiveTypeHolder {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: CallIdentityPrimitiveTypeHolderCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): CallIdentityPrimitiveTypeHolderCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CallIdentityPrimitiveTypeHolderCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
