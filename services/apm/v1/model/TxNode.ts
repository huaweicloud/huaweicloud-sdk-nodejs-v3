

export class TxNode {
    private 'tx_node_id'?: string;
    private 'tx_node_name'?: string;
    private 'tx_node_type'?: string;
    public constructor() { 
    }
    public withTxNodeId(txNodeId: string): TxNode {
        this['tx_node_id'] = txNodeId;
        return this;
    }
    public set txNodeId(txNodeId: string  | undefined) {
        this['tx_node_id'] = txNodeId;
    }
    public get txNodeId(): string | undefined {
        return this['tx_node_id'];
    }
    public withTxNodeName(txNodeName: string): TxNode {
        this['tx_node_name'] = txNodeName;
        return this;
    }
    public set txNodeName(txNodeName: string  | undefined) {
        this['tx_node_name'] = txNodeName;
    }
    public get txNodeName(): string | undefined {
        return this['tx_node_name'];
    }
    public withTxNodeType(txNodeType: string): TxNode {
        this['tx_node_type'] = txNodeType;
        return this;
    }
    public set txNodeType(txNodeType: string  | undefined) {
        this['tx_node_type'] = txNodeType;
    }
    public get txNodeType(): string | undefined {
        return this['tx_node_type'];
    }
}