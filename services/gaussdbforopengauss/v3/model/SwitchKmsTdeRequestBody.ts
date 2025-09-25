

export class SwitchKmsTdeRequestBody {
    private 'kms_tde_key_id'?: string;
    private 'kms_project_name'?: string;
    private 'kms_tde_status'?: SwitchKmsTdeRequestBodyKmsTdeStatusEnum | string;
    public constructor(kmsTdeKeyId?: string, kmsProjectName?: string, kmsTdeStatus?: string) { 
        this['kms_tde_key_id'] = kmsTdeKeyId;
        this['kms_project_name'] = kmsProjectName;
        this['kms_tde_status'] = kmsTdeStatus;
    }
    public withKmsTdeKeyId(kmsTdeKeyId: string): SwitchKmsTdeRequestBody {
        this['kms_tde_key_id'] = kmsTdeKeyId;
        return this;
    }
    public set kmsTdeKeyId(kmsTdeKeyId: string  | undefined) {
        this['kms_tde_key_id'] = kmsTdeKeyId;
    }
    public get kmsTdeKeyId(): string | undefined {
        return this['kms_tde_key_id'];
    }
    public withKmsProjectName(kmsProjectName: string): SwitchKmsTdeRequestBody {
        this['kms_project_name'] = kmsProjectName;
        return this;
    }
    public set kmsProjectName(kmsProjectName: string  | undefined) {
        this['kms_project_name'] = kmsProjectName;
    }
    public get kmsProjectName(): string | undefined {
        return this['kms_project_name'];
    }
    public withKmsTdeStatus(kmsTdeStatus: SwitchKmsTdeRequestBodyKmsTdeStatusEnum | string): SwitchKmsTdeRequestBody {
        this['kms_tde_status'] = kmsTdeStatus;
        return this;
    }
    public set kmsTdeStatus(kmsTdeStatus: SwitchKmsTdeRequestBodyKmsTdeStatusEnum | string  | undefined) {
        this['kms_tde_status'] = kmsTdeStatus;
    }
    public get kmsTdeStatus(): SwitchKmsTdeRequestBodyKmsTdeStatusEnum | string | undefined {
        return this['kms_tde_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchKmsTdeRequestBodyKmsTdeStatusEnum {
    ON = 'on'
}
