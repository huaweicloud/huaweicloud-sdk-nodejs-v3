import { ListTransactionRequestBodyTransactionQueryInfo } from './ListTransactionRequestBodyTransactionQueryInfo';


export class ListTransactionRequestBody {
    private 'node_id'?: string;
    private 'component_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'transaction_query_info'?: ListTransactionRequestBodyTransactionQueryInfo;
    public constructor(nodeId?: string, componentId?: string) { 
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
    }
    public withNodeId(nodeId: string): ListTransactionRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): ListTransactionRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withLimit(limit: number): ListTransactionRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTransactionRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withTransactionQueryInfo(transactionQueryInfo: ListTransactionRequestBodyTransactionQueryInfo): ListTransactionRequestBody {
        this['transaction_query_info'] = transactionQueryInfo;
        return this;
    }
    public set transactionQueryInfo(transactionQueryInfo: ListTransactionRequestBodyTransactionQueryInfo  | undefined) {
        this['transaction_query_info'] = transactionQueryInfo;
    }
    public get transactionQueryInfo(): ListTransactionRequestBodyTransactionQueryInfo | undefined {
        return this['transaction_query_info'];
    }
}