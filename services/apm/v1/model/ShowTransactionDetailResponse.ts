import { TxLine } from './TxLine';
import { TxNode } from './TxNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransactionDetailResponse extends SdkResponse {
    private 'tx_node_list'?: Array<TxNode>;
    private 'tx_line_list'?: Array<TxLine>;
    public constructor() { 
        super();
    }
    public withTxNodeList(txNodeList: Array<TxNode>): ShowTransactionDetailResponse {
        this['tx_node_list'] = txNodeList;
        return this;
    }
    public set txNodeList(txNodeList: Array<TxNode>  | undefined) {
        this['tx_node_list'] = txNodeList;
    }
    public get txNodeList(): Array<TxNode> | undefined {
        return this['tx_node_list'];
    }
    public withTxLineList(txLineList: Array<TxLine>): ShowTransactionDetailResponse {
        this['tx_line_list'] = txLineList;
        return this;
    }
    public set txLineList(txLineList: Array<TxLine>  | undefined) {
        this['tx_line_list'] = txLineList;
    }
    public get txLineList(): Array<TxLine> | undefined {
        return this['tx_line_list'];
    }
}