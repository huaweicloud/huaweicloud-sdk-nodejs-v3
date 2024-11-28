

export class ShowAgencyRequest {
    private 'secret_type'?: ShowAgencyRequestSecretTypeEnum | string;
    public constructor(secretType?: string) { 
        this['secret_type'] = secretType;
    }
    public withSecretType(secretType: ShowAgencyRequestSecretTypeEnum | string): ShowAgencyRequest {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: ShowAgencyRequestSecretTypeEnum | string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): ShowAgencyRequestSecretTypeEnum | string | undefined {
        return this['secret_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAgencyRequestSecretTypeEnum {
    RDS_FG = 'RDS-FG',
    GAUSSDB_FG = 'GaussDB-FG'
}
