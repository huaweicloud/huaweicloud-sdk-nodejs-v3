import { QueryRiskItemsItems } from './QueryRiskItemsItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRiskItemsResponse extends SdkResponse {
    private 'datastore_type'?: string;
    public items?: Array<QueryRiskItemsItems>;
    public constructor() { 
        super();
    }
    public withDatastoreType(datastoreType: string): ListRiskItemsResponse {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withItems(items: Array<QueryRiskItemsItems>): ListRiskItemsResponse {
        this['items'] = items;
        return this;
    }
}