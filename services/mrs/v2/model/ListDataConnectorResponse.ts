import { DataConnectorDetail } from './DataConnectorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataConnectorResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'data_connectors'?: Array<DataConnectorDetail>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDataConnectorResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDataConnectors(dataConnectors: Array<DataConnectorDetail>): ListDataConnectorResponse {
        this['data_connectors'] = dataConnectors;
        return this;
    }
    public set dataConnectors(dataConnectors: Array<DataConnectorDetail>  | undefined) {
        this['data_connectors'] = dataConnectors;
    }
    public get dataConnectors(): Array<DataConnectorDetail> | undefined {
        return this['data_connectors'];
    }
}