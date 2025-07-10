import { CreateOrganizationalUnit } from './CreateOrganizationalUnit';
import { OrganizationalUnitType } from './OrganizationalUnitType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowManagedOrganizationalUnitResponse extends SdkResponse {
    private 'manage_account_id'?: string;
    private 'organizational_unit_id'?: string;
    private 'organizational_unit_name'?: string;
    private 'organizational_unit_status'?: string;
    private 'organizational_unit_type'?: OrganizationalUnitType;
    private 'parent_organizational_unit_id'?: string;
    private 'parent_organizational_unit_name'?: string;
    private 'created_at'?: Date;
    private 'landing_zone_version'?: string;
    private 'updated_at'?: Date;
    public message?: string;
    public constructor() { 
        super();
    }
    public withManageAccountId(manageAccountId: string): ShowManagedOrganizationalUnitResponse {
        this['manage_account_id'] = manageAccountId;
        return this;
    }
    public set manageAccountId(manageAccountId: string  | undefined) {
        this['manage_account_id'] = manageAccountId;
    }
    public get manageAccountId(): string | undefined {
        return this['manage_account_id'];
    }
    public withOrganizationalUnitId(organizationalUnitId: string): ShowManagedOrganizationalUnitResponse {
        this['organizational_unit_id'] = organizationalUnitId;
        return this;
    }
    public set organizationalUnitId(organizationalUnitId: string  | undefined) {
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public get organizationalUnitId(): string | undefined {
        return this['organizational_unit_id'];
    }
    public withOrganizationalUnitName(organizationalUnitName: string): ShowManagedOrganizationalUnitResponse {
        this['organizational_unit_name'] = organizationalUnitName;
        return this;
    }
    public set organizationalUnitName(organizationalUnitName: string  | undefined) {
        this['organizational_unit_name'] = organizationalUnitName;
    }
    public get organizationalUnitName(): string | undefined {
        return this['organizational_unit_name'];
    }
    public withOrganizationalUnitStatus(organizationalUnitStatus: string): ShowManagedOrganizationalUnitResponse {
        this['organizational_unit_status'] = organizationalUnitStatus;
        return this;
    }
    public set organizationalUnitStatus(organizationalUnitStatus: string  | undefined) {
        this['organizational_unit_status'] = organizationalUnitStatus;
    }
    public get organizationalUnitStatus(): string | undefined {
        return this['organizational_unit_status'];
    }
    public withOrganizationalUnitType(organizationalUnitType: OrganizationalUnitType): ShowManagedOrganizationalUnitResponse {
        this['organizational_unit_type'] = organizationalUnitType;
        return this;
    }
    public set organizationalUnitType(organizationalUnitType: OrganizationalUnitType  | undefined) {
        this['organizational_unit_type'] = organizationalUnitType;
    }
    public get organizationalUnitType(): OrganizationalUnitType | undefined {
        return this['organizational_unit_type'];
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): ShowManagedOrganizationalUnitResponse {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withParentOrganizationalUnitName(parentOrganizationalUnitName: string): ShowManagedOrganizationalUnitResponse {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
        return this;
    }
    public set parentOrganizationalUnitName(parentOrganizationalUnitName: string  | undefined) {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public get parentOrganizationalUnitName(): string | undefined {
        return this['parent_organizational_unit_name'];
    }
    public withCreatedAt(createdAt: Date): ShowManagedOrganizationalUnitResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withLandingZoneVersion(landingZoneVersion: string): ShowManagedOrganizationalUnitResponse {
        this['landing_zone_version'] = landingZoneVersion;
        return this;
    }
    public set landingZoneVersion(landingZoneVersion: string  | undefined) {
        this['landing_zone_version'] = landingZoneVersion;
    }
    public get landingZoneVersion(): string | undefined {
        return this['landing_zone_version'];
    }
    public withUpdatedAt(updatedAt: Date): ShowManagedOrganizationalUnitResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withMessage(message: string): ShowManagedOrganizationalUnitResponse {
        this['message'] = message;
        return this;
    }
}