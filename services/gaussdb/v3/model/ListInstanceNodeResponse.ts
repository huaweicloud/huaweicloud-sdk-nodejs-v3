import { HtapNodeInfoResponseBodyNodeList } from './HtapNodeInfoResponseBodyNodeList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceNodeResponse extends SdkResponse {
    private 'node_list'?: Array<HtapNodeInfoResponseBodyNodeList>;
    public constructor() { 
        super();
    }
    public withNodeList(nodeList: Array<HtapNodeInfoResponseBodyNodeList>): ListInstanceNodeResponse {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<HtapNodeInfoResponseBodyNodeList>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<HtapNodeInfoResponseBodyNodeList> | undefined {
        return this['node_list'];
    }
}