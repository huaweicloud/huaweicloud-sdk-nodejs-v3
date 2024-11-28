

export class ShowSecretFunctionTemplatesRequest {
    private 'secret_type'?: ShowSecretFunctionTemplatesRequestSecretTypeEnum | string;
    private 'secret_sub_type'?: ShowSecretFunctionTemplatesRequestSecretSubTypeEnum | string;
    public engine?: ShowSecretFunctionTemplatesRequestEngineEnum | string;
    public constructor(secretType?: string, secretSubType?: string) { 
        this['secret_type'] = secretType;
        this['secret_sub_type'] = secretSubType;
    }
    public withSecretType(secretType: ShowSecretFunctionTemplatesRequestSecretTypeEnum | string): ShowSecretFunctionTemplatesRequest {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: ShowSecretFunctionTemplatesRequestSecretTypeEnum | string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): ShowSecretFunctionTemplatesRequestSecretTypeEnum | string | undefined {
        return this['secret_type'];
    }
    public withSecretSubType(secretSubType: ShowSecretFunctionTemplatesRequestSecretSubTypeEnum | string): ShowSecretFunctionTemplatesRequest {
        this['secret_sub_type'] = secretSubType;
        return this;
    }
    public set secretSubType(secretSubType: ShowSecretFunctionTemplatesRequestSecretSubTypeEnum | string  | undefined) {
        this['secret_sub_type'] = secretSubType;
    }
    public get secretSubType(): ShowSecretFunctionTemplatesRequestSecretSubTypeEnum | string | undefined {
        return this['secret_sub_type'];
    }
    public withEngine(engine: ShowSecretFunctionTemplatesRequestEngineEnum | string): ShowSecretFunctionTemplatesRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecretFunctionTemplatesRequestSecretTypeEnum {
    RDS_FG = 'RDS-FG',
    GAUSSDB_FG = 'GaussDB-FG'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecretFunctionTemplatesRequestSecretSubTypeEnum {
    SINGLEUSER = 'SingleUser',
    MULTIUSER = 'MultiUser'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecretFunctionTemplatesRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
