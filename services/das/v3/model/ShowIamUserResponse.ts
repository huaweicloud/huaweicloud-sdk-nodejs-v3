
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIamUserResponse extends SdkResponse {
    public data?: object;
    public total?: number;
    private 'primary_account_id'?: string;
    private 'primary_account_name'?: string;
    public constructor() { 
        super();
    }
    public withData(data: object): ShowIamUserResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ShowIamUserResponse {
        this['total'] = total;
        return this;
    }
    public withPrimaryAccountId(primaryAccountId: string): ShowIamUserResponse {
        this['primary_account_id'] = primaryAccountId;
        return this;
    }
    public set primaryAccountId(primaryAccountId: string  | undefined) {
        this['primary_account_id'] = primaryAccountId;
    }
    public get primaryAccountId(): string | undefined {
        return this['primary_account_id'];
    }
    public withPrimaryAccountName(primaryAccountName: string): ShowIamUserResponse {
        this['primary_account_name'] = primaryAccountName;
        return this;
    }
    public set primaryAccountName(primaryAccountName: string  | undefined) {
        this['primary_account_name'] = primaryAccountName;
    }
    public get primaryAccountName(): string | undefined {
        return this['primary_account_name'];
    }
}