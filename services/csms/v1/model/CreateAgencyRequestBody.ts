

export class CreateAgencyRequestBody {
    private 'secret_type'?: CreateAgencyRequestBodySecretTypeEnum | string;
    public constructor(secretType?: string) { 
        this['secret_type'] = secretType;
    }
    public withSecretType(secretType: CreateAgencyRequestBodySecretTypeEnum | string): CreateAgencyRequestBody {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: CreateAgencyRequestBodySecretTypeEnum | string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): CreateAgencyRequestBodySecretTypeEnum | string | undefined {
        return this['secret_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAgencyRequestBodySecretTypeEnum {
    RDS_FG = 'RDS-FG',
    GAUSSDB_FG = 'GaussDB-FG'
}
