import { CatalogEntity } from './CatalogEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    private 'total_count'?: number;
    public catalogs?: Array<CatalogEntity>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListCatalogsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withTotalCount(totalCount: number): ListCatalogsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withCatalogs(catalogs: Array<CatalogEntity>): ListCatalogsResponse {
        this['catalogs'] = catalogs;
        return this;
    }
}