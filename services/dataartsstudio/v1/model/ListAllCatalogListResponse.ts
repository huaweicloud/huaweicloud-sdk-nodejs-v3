import { RecordForGetAllCatalog } from './RecordForGetAllCatalog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllCatalogListResponse extends SdkResponse {
    public total?: number;
    private 'api_catalogs'?: Array<RecordForGetAllCatalog>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAllCatalogListResponse {
        this['total'] = total;
        return this;
    }
    public withApiCatalogs(apiCatalogs: Array<RecordForGetAllCatalog>): ListAllCatalogListResponse {
        this['api_catalogs'] = apiCatalogs;
        return this;
    }
    public set apiCatalogs(apiCatalogs: Array<RecordForGetAllCatalog>  | undefined) {
        this['api_catalogs'] = apiCatalogs;
    }
    public get apiCatalogs(): Array<RecordForGetAllCatalog> | undefined {
        return this['api_catalogs'];
    }
}