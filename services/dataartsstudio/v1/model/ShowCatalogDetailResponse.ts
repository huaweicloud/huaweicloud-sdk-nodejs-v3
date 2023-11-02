
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCatalogDetailResponse extends SdkResponse {
    private 'catalog_id'?: string;
    public name?: string;
    public path?: string;
    private 'catalog_total'?: number;
    private 'api_total'?: number;
    public description?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
        super();
    }
    public withCatalogId(catalogId: string): ShowCatalogDetailResponse {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withName(name: string): ShowCatalogDetailResponse {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): ShowCatalogDetailResponse {
        this['path'] = path;
        return this;
    }
    public withCatalogTotal(catalogTotal: number): ShowCatalogDetailResponse {
        this['catalog_total'] = catalogTotal;
        return this;
    }
    public set catalogTotal(catalogTotal: number  | undefined) {
        this['catalog_total'] = catalogTotal;
    }
    public get catalogTotal(): number | undefined {
        return this['catalog_total'];
    }
    public withApiTotal(apiTotal: number): ShowCatalogDetailResponse {
        this['api_total'] = apiTotal;
        return this;
    }
    public set apiTotal(apiTotal: number  | undefined) {
        this['api_total'] = apiTotal;
    }
    public get apiTotal(): number | undefined {
        return this['api_total'];
    }
    public withDescription(description: string): ShowCatalogDetailResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): ShowCatalogDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ShowCatalogDetailResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): ShowCatalogDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): ShowCatalogDetailResponse {
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