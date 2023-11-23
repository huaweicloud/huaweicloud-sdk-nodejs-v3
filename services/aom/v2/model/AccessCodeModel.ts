

export class AccessCodeModel {
    private 'access_code'?: string;
    private 'access_code_id'?: string;
    private 'create_at'?: number;
    public status?: AccessCodeModelStatusEnum | string;
    public constructor() { 
    }
    public withAccessCode(accessCode: string): AccessCodeModel {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string  | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode(): string | undefined {
        return this['access_code'];
    }
    public withAccessCodeId(accessCodeId: string): AccessCodeModel {
        this['access_code_id'] = accessCodeId;
        return this;
    }
    public set accessCodeId(accessCodeId: string  | undefined) {
        this['access_code_id'] = accessCodeId;
    }
    public get accessCodeId(): string | undefined {
        return this['access_code_id'];
    }
    public withCreateAt(createAt: number): AccessCodeModel {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withStatus(status: AccessCodeModelStatusEnum | string): AccessCodeModel {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessCodeModelStatusEnum {
    ENABLE = 'enable',
    UNENABLE = 'unenable'
}
