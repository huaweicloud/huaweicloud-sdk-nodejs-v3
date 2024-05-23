import { MoveAccountReqBody } from './MoveAccountReqBody';


export class MoveAccountRequest {
    private 'account_id'?: string;
    public body?: MoveAccountReqBody;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withAccountId(accountId: string): MoveAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withBody(body: MoveAccountReqBody): MoveAccountRequest {
        this['body'] = body;
        return this;
    }
}