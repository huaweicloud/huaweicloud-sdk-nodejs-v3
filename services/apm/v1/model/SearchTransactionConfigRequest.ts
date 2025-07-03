import { TransactionConfigSearchRequest } from './TransactionConfigSearchRequest';


export class SearchTransactionConfigRequest {
    private 'x-business-id'?: number;
    public body?: TransactionConfigSearchRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchTransactionConfigRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TransactionConfigSearchRequest): SearchTransactionConfigRequest {
        this['body'] = body;
        return this;
    }
}