
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchIdByPathResponse extends SdkResponse {
    private 'catalog_id'?: string;
    public constructor() { 
        super();
    }
    public withCatalogId(catalogId: string): SearchIdByPathResponse {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
}