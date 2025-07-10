
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowManagedAccountTemplateResponse extends SdkResponse {
    private 'manage_account_id'?: string;
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'blueprint_product_id'?: string;
    private 'blueprint_product_name'?: string;
    private 'blueprint_product_version'?: string;
    private 'blueprint_status'?: string;
    private 'blueprint_product_impl_type'?: string;
    private 'blueprint_product_impl_detail'?: string;
    public constructor() { 
        super();
    }
    public withManageAccountId(manageAccountId: string): ShowManagedAccountTemplateResponse {
        this['manage_account_id'] = manageAccountId;
        return this;
    }
    public set manageAccountId(manageAccountId: string  | undefined) {
        this['manage_account_id'] = manageAccountId;
    }
    public get manageAccountId(): string | undefined {
        return this['manage_account_id'];
    }
    public withAccountId(accountId: string): ShowManagedAccountTemplateResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): ShowManagedAccountTemplateResponse {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withBlueprintProductId(blueprintProductId: string): ShowManagedAccountTemplateResponse {
        this['blueprint_product_id'] = blueprintProductId;
        return this;
    }
    public set blueprintProductId(blueprintProductId: string  | undefined) {
        this['blueprint_product_id'] = blueprintProductId;
    }
    public get blueprintProductId(): string | undefined {
        return this['blueprint_product_id'];
    }
    public withBlueprintProductName(blueprintProductName: string): ShowManagedAccountTemplateResponse {
        this['blueprint_product_name'] = blueprintProductName;
        return this;
    }
    public set blueprintProductName(blueprintProductName: string  | undefined) {
        this['blueprint_product_name'] = blueprintProductName;
    }
    public get blueprintProductName(): string | undefined {
        return this['blueprint_product_name'];
    }
    public withBlueprintProductVersion(blueprintProductVersion: string): ShowManagedAccountTemplateResponse {
        this['blueprint_product_version'] = blueprintProductVersion;
        return this;
    }
    public set blueprintProductVersion(blueprintProductVersion: string  | undefined) {
        this['blueprint_product_version'] = blueprintProductVersion;
    }
    public get blueprintProductVersion(): string | undefined {
        return this['blueprint_product_version'];
    }
    public withBlueprintStatus(blueprintStatus: string): ShowManagedAccountTemplateResponse {
        this['blueprint_status'] = blueprintStatus;
        return this;
    }
    public set blueprintStatus(blueprintStatus: string  | undefined) {
        this['blueprint_status'] = blueprintStatus;
    }
    public get blueprintStatus(): string | undefined {
        return this['blueprint_status'];
    }
    public withBlueprintProductImplType(blueprintProductImplType: string): ShowManagedAccountTemplateResponse {
        this['blueprint_product_impl_type'] = blueprintProductImplType;
        return this;
    }
    public set blueprintProductImplType(blueprintProductImplType: string  | undefined) {
        this['blueprint_product_impl_type'] = blueprintProductImplType;
    }
    public get blueprintProductImplType(): string | undefined {
        return this['blueprint_product_impl_type'];
    }
    public withBlueprintProductImplDetail(blueprintProductImplDetail: string): ShowManagedAccountTemplateResponse {
        this['blueprint_product_impl_detail'] = blueprintProductImplDetail;
        return this;
    }
    public set blueprintProductImplDetail(blueprintProductImplDetail: string  | undefined) {
        this['blueprint_product_impl_detail'] = blueprintProductImplDetail;
    }
    public get blueprintProductImplDetail(): string | undefined {
        return this['blueprint_product_impl_detail'];
    }
}