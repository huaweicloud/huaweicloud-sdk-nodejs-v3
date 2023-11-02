

export class RecordForGetAllCatalog {
    private 'catalog_id'?: string;
    public pid?: string;
    public name?: string;
    public description?: string;
    private 'api_catalog_type'?: RecordForGetAllCatalogApiCatalogTypeEnum | string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withCatalogId(catalogId: string): RecordForGetAllCatalog {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withPid(pid: string): RecordForGetAllCatalog {
        this['pid'] = pid;
        return this;
    }
    public withName(name: string): RecordForGetAllCatalog {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RecordForGetAllCatalog {
        this['description'] = description;
        return this;
    }
    public withApiCatalogType(apiCatalogType: RecordForGetAllCatalogApiCatalogTypeEnum | string): RecordForGetAllCatalog {
        this['api_catalog_type'] = apiCatalogType;
        return this;
    }
    public set apiCatalogType(apiCatalogType: RecordForGetAllCatalogApiCatalogTypeEnum | string  | undefined) {
        this['api_catalog_type'] = apiCatalogType;
    }
    public get apiCatalogType(): RecordForGetAllCatalogApiCatalogTypeEnum | string | undefined {
        return this['api_catalog_type'];
    }
    public withCreateTime(createTime: number): RecordForGetAllCatalog {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): RecordForGetAllCatalog {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): RecordForGetAllCatalog {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): RecordForGetAllCatalog {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordForGetAllCatalogApiCatalogTypeEnum {
    CATALOG = 'CATALOG',
    API = 'API'
}
