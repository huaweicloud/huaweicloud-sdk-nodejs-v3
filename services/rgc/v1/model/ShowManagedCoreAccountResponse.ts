
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowManagedCoreAccountResponse extends SdkResponse {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'core_resource_mappings'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withAccountId(accountId: string): ShowManagedCoreAccountResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): ShowManagedCoreAccountResponse {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withCoreResourceMappings(coreResourceMappings: { [key: string]: string; }): ShowManagedCoreAccountResponse {
        this['core_resource_mappings'] = coreResourceMappings;
        return this;
    }
    public set coreResourceMappings(coreResourceMappings: { [key: string]: string; }  | undefined) {
        this['core_resource_mappings'] = coreResourceMappings;
    }
    public get coreResourceMappings(): { [key: string]: string; } | undefined {
        return this['core_resource_mappings'];
    }
}