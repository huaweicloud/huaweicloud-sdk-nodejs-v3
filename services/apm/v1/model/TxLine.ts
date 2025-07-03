

export class TxLine {
    private 'tx_from_node'?: string;
    private 'tx_to_node'?: string;
    private 'invoke_count'?: number;
    public rt?: number;
    private 'error_count'?: number;
    public type?: string;
    public direction?: string;
    public constructor() { 
    }
    public withTxFromNode(txFromNode: string): TxLine {
        this['tx_from_node'] = txFromNode;
        return this;
    }
    public set txFromNode(txFromNode: string  | undefined) {
        this['tx_from_node'] = txFromNode;
    }
    public get txFromNode(): string | undefined {
        return this['tx_from_node'];
    }
    public withTxToNode(txToNode: string): TxLine {
        this['tx_to_node'] = txToNode;
        return this;
    }
    public set txToNode(txToNode: string  | undefined) {
        this['tx_to_node'] = txToNode;
    }
    public get txToNode(): string | undefined {
        return this['tx_to_node'];
    }
    public withInvokeCount(invokeCount: number): TxLine {
        this['invoke_count'] = invokeCount;
        return this;
    }
    public set invokeCount(invokeCount: number  | undefined) {
        this['invoke_count'] = invokeCount;
    }
    public get invokeCount(): number | undefined {
        return this['invoke_count'];
    }
    public withRt(rt: number): TxLine {
        this['rt'] = rt;
        return this;
    }
    public withErrorCount(errorCount: number): TxLine {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
    public withType(type: string): TxLine {
        this['type'] = type;
        return this;
    }
    public withDirection(direction: string): TxLine {
        this['direction'] = direction;
        return this;
    }
}