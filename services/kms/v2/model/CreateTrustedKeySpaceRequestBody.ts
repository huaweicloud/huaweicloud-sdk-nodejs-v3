

export class CreateTrustedKeySpaceRequestBody {
    private 'keyspace_name'?: string;
    public type?: CreateTrustedKeySpaceRequestBodyTypeEnum | string;
    private 'keystore_id'?: string;
    public description?: string;
    public constructor(keyspaceName?: string) { 
        this['keyspace_name'] = keyspaceName;
    }
    public withKeyspaceName(keyspaceName: string): CreateTrustedKeySpaceRequestBody {
        this['keyspace_name'] = keyspaceName;
        return this;
    }
    public set keyspaceName(keyspaceName: string  | undefined) {
        this['keyspace_name'] = keyspaceName;
    }
    public get keyspaceName(): string | undefined {
        return this['keyspace_name'];
    }
    public withType(type: CreateTrustedKeySpaceRequestBodyTypeEnum | string): CreateTrustedKeySpaceRequestBody {
        this['type'] = type;
        return this;
    }
    public withKeystoreId(keystoreId: string): CreateTrustedKeySpaceRequestBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withDescription(description: string): CreateTrustedKeySpaceRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTrustedKeySpaceRequestBodyTypeEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3'
}
