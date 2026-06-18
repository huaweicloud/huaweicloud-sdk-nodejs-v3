

export class TenantCMKDto {
    private 'cmk_key_name'?: string;
    private 'cmk_key_id'?: string;
    private 'key_state'?: TenantCMKDtoKeyStateEnum | string;
    public constructor() { 
    }
    public withCmkKeyName(cmkKeyName: string): TenantCMKDto {
        this['cmk_key_name'] = cmkKeyName;
        return this;
    }
    public set cmkKeyName(cmkKeyName: string  | undefined) {
        this['cmk_key_name'] = cmkKeyName;
    }
    public get cmkKeyName(): string | undefined {
        return this['cmk_key_name'];
    }
    public withCmkKeyId(cmkKeyId: string): TenantCMKDto {
        this['cmk_key_id'] = cmkKeyId;
        return this;
    }
    public set cmkKeyId(cmkKeyId: string  | undefined) {
        this['cmk_key_id'] = cmkKeyId;
    }
    public get cmkKeyId(): string | undefined {
        return this['cmk_key_id'];
    }
    public withKeyState(keyState: TenantCMKDtoKeyStateEnum | string): TenantCMKDto {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: TenantCMKDtoKeyStateEnum | string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): TenantCMKDtoKeyStateEnum | string | undefined {
        return this['key_state'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TenantCMKDtoKeyStateEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5'
}
