import { VarsStructure } from './VarsStructure';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOrganizationConformancePackResponse extends SdkResponse {
    private 'org_conformance_pack_id'?: string;
    private 'org_conformance_pack_name'?: string;
    private 'owner_id'?: string;
    private 'organization_id'?: string;
    private 'org_conformance_pack_urn'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withOrgConformancePackId(orgConformancePackId: string): UpdateOrganizationConformancePackResponse {
        this['org_conformance_pack_id'] = orgConformancePackId;
        return this;
    }
    public set orgConformancePackId(orgConformancePackId: string  | undefined) {
        this['org_conformance_pack_id'] = orgConformancePackId;
    }
    public get orgConformancePackId(): string | undefined {
        return this['org_conformance_pack_id'];
    }
    public withOrgConformancePackName(orgConformancePackName: string): UpdateOrganizationConformancePackResponse {
        this['org_conformance_pack_name'] = orgConformancePackName;
        return this;
    }
    public set orgConformancePackName(orgConformancePackName: string  | undefined) {
        this['org_conformance_pack_name'] = orgConformancePackName;
    }
    public get orgConformancePackName(): string | undefined {
        return this['org_conformance_pack_name'];
    }
    public withOwnerId(ownerId: string): UpdateOrganizationConformancePackResponse {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOrganizationId(organizationId: string): UpdateOrganizationConformancePackResponse {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrgConformancePackUrn(orgConformancePackUrn: string): UpdateOrganizationConformancePackResponse {
        this['org_conformance_pack_urn'] = orgConformancePackUrn;
        return this;
    }
    public set orgConformancePackUrn(orgConformancePackUrn: string  | undefined) {
        this['org_conformance_pack_urn'] = orgConformancePackUrn;
    }
    public get orgConformancePackUrn(): string | undefined {
        return this['org_conformance_pack_urn'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): UpdateOrganizationConformancePackResponse {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withCreatedAt(createdAt: string): UpdateOrganizationConformancePackResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateOrganizationConformancePackResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}