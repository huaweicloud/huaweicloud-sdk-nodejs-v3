import { ClickHouseNodeInfoResponseBodyNodeList } from './ClickHouseNodeInfoResponseBodyNodeList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseInstanceNodeResponse extends SdkResponse {
    private 'node_list'?: Array<ClickHouseNodeInfoResponseBodyNodeList>;
    public constructor() { 
        super();
    }
    public withNodeList(nodeList: Array<ClickHouseNodeInfoResponseBodyNodeList>): ListClickHouseInstanceNodeResponse {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<ClickHouseNodeInfoResponseBodyNodeList>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<ClickHouseNodeInfoResponseBodyNodeList> | undefined {
        return this['node_list'];
    }
}