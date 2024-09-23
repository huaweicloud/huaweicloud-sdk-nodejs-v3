import { UpdateAccountReqBody } from './UpdateAccountReqBody';


export class UpdateAccountRequest {
    private 'X-Security-Token'?: string;
    private 'account_id'?: string;
    public body?: UpdateAccountReqBody;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withXSecurityToken(xSecurityToken: string): UpdateAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withAccountId(accountId: string): UpdateAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withBody(body: UpdateAccountReqBody): UpdateAccountRequest {
        this['body'] = body;
        return this;
    }
}