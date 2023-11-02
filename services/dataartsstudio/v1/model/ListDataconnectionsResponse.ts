import { ApigDataSourceView } from './ApigDataSourceView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataconnectionsResponse extends SdkResponse {
    public count?: number;
    private 'max_records'?: number;
    private 'data_connection_lists'?: Array<ApigDataSourceView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDataconnectionsResponse {
        this['count'] = count;
        return this;
    }
    public withMaxRecords(maxRecords: number): ListDataconnectionsResponse {
        this['max_records'] = maxRecords;
        return this;
    }
    public set maxRecords(maxRecords: number  | undefined) {
        this['max_records'] = maxRecords;
    }
    public get maxRecords(): number | undefined {
        return this['max_records'];
    }
    public withDataConnectionLists(dataConnectionLists: Array<ApigDataSourceView>): ListDataconnectionsResponse {
        this['data_connection_lists'] = dataConnectionLists;
        return this;
    }
    public set dataConnectionLists(dataConnectionLists: Array<ApigDataSourceView>  | undefined) {
        this['data_connection_lists'] = dataConnectionLists;
    }
    public get dataConnectionLists(): Array<ApigDataSourceView> | undefined {
        return this['data_connection_lists'];
    }
}