import { TxSearchRequest } from './TxSearchRequest';


export class SearchTransactionRequest {
    private 'x-business-id'?: number;
    public body?: TxSearchRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchTransactionRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TxSearchRequest): SearchTransactionRequest {
        this['body'] = body;
        return this;
    }
}