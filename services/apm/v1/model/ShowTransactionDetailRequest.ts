import { TxDetailRequest } from './TxDetailRequest';


export class ShowTransactionDetailRequest {
    private 'x-business-id'?: number;
    public body?: TxDetailRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowTransactionDetailRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TxDetailRequest): ShowTransactionDetailRequest {
        this['body'] = body;
        return this;
    }
}