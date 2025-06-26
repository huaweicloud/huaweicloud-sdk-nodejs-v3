import { RegionManagedList } from './RegionManagedList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowManagedAccountResponse extends SdkResponse {
    private 'landing_zone_version'?: string;
    private 'manage_account_id'?: string;
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'account_type'?: string;
    public owner?: string;
    public state?: string;
    public message?: string;
    private 'parent_organizational_unit_id'?: string;
    private 'parent_organizational_unit_name'?: string;
    private 'identity_store_user_name'?: string;
    private 'blueprint_product_id'?: string;
    private 'blueprint_product_version'?: string;
    private 'blueprint_status'?: string;
    private 'is_blueprint_has_multi_account_resource'?: boolean;
    public regions?: Array<RegionManagedList>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
        super();
    }
    public withLandingZoneVersion(landingZoneVersion: string): ShowManagedAccountResponse {
        this['landing_zone_version'] = landingZoneVersion;
        return this;
    }
    public set landingZoneVersion(landingZoneVersion: string  | undefined) {
        this['landing_zone_version'] = landingZoneVersion;
    }
    public get landingZoneVersion(): string | undefined {
        return this['landing_zone_version'];
    }
    public withManageAccountId(manageAccountId: string): ShowManagedAccountResponse {
        this['manage_account_id'] = manageAccountId;
        return this;
    }
    public set manageAccountId(manageAccountId: string  | undefined) {
        this['manage_account_id'] = manageAccountId;
    }
    public get manageAccountId(): string | undefined {
        return this['manage_account_id'];
    }
    public withAccountId(accountId: string): ShowManagedAccountResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): ShowManagedAccountResponse {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountType(accountType: string): ShowManagedAccountResponse {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): string | undefined {
        return this['account_type'];
    }
    public withOwner(owner: string): ShowManagedAccountResponse {
        this['owner'] = owner;
        return this;
    }
    public withState(state: string): ShowManagedAccountResponse {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): ShowManagedAccountResponse {
        this['message'] = message;
        return this;
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): ShowManagedAccountResponse {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withParentOrganizationalUnitName(parentOrganizationalUnitName: string): ShowManagedAccountResponse {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
        return this;
    }
    public set parentOrganizationalUnitName(parentOrganizationalUnitName: string  | undefined) {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public get parentOrganizationalUnitName(): string | undefined {
        return this['parent_organizational_unit_name'];
    }
    public withIdentityStoreUserName(identityStoreUserName: string): ShowManagedAccountResponse {
        this['identity_store_user_name'] = identityStoreUserName;
        return this;
    }
    public set identityStoreUserName(identityStoreUserName: string  | undefined) {
        this['identity_store_user_name'] = identityStoreUserName;
    }
    public get identityStoreUserName(): string | undefined {
        return this['identity_store_user_name'];
    }
    public withBlueprintProductId(blueprintProductId: string): ShowManagedAccountResponse {
        this['blueprint_product_id'] = blueprintProductId;
        return this;
    }
    public set blueprintProductId(blueprintProductId: string  | undefined) {
        this['blueprint_product_id'] = blueprintProductId;
    }
    public get blueprintProductId(): string | undefined {
        return this['blueprint_product_id'];
    }
    public withBlueprintProductVersion(blueprintProductVersion: string): ShowManagedAccountResponse {
        this['blueprint_product_version'] = blueprintProductVersion;
        return this;
    }
    public set blueprintProductVersion(blueprintProductVersion: string  | undefined) {
        this['blueprint_product_version'] = blueprintProductVersion;
    }
    public get blueprintProductVersion(): string | undefined {
        return this['blueprint_product_version'];
    }
    public withBlueprintStatus(blueprintStatus: string): ShowManagedAccountResponse {
        this['blueprint_status'] = blueprintStatus;
        return this;
    }
    public set blueprintStatus(blueprintStatus: string  | undefined) {
        this['blueprint_status'] = blueprintStatus;
    }
    public get blueprintStatus(): string | undefined {
        return this['blueprint_status'];
    }
    public withIsBlueprintHasMultiAccountResource(isBlueprintHasMultiAccountResource: boolean): ShowManagedAccountResponse {
        this['is_blueprint_has_multi_account_resource'] = isBlueprintHasMultiAccountResource;
        return this;
    }
    public set isBlueprintHasMultiAccountResource(isBlueprintHasMultiAccountResource: boolean  | undefined) {
        this['is_blueprint_has_multi_account_resource'] = isBlueprintHasMultiAccountResource;
    }
    public get isBlueprintHasMultiAccountResource(): boolean | undefined {
        return this['is_blueprint_has_multi_account_resource'];
    }
    public withRegions(regions: Array<RegionManagedList>): ShowManagedAccountResponse {
        this['regions'] = regions;
        return this;
    }
    public withCreatedAt(createdAt: Date): ShowManagedAccountResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ShowManagedAccountResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}