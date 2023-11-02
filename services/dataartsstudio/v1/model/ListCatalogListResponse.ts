import { RecordForGetAllCatalog } from './RecordForGetAllCatalog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogListResponse extends SdkResponse {
    public total?: number;
    public catalogs?: Array<RecordForGetAllCatalog>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCatalogListResponse {
        this['total'] = total;
        return this;
    }
    public withCatalogs(catalogs: Array<RecordForGetAllCatalog>): ListCatalogListResponse {
        this['catalogs'] = catalogs;
        return this;
    }
}