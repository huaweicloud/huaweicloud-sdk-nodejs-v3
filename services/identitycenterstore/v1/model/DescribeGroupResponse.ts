import { ExternalIdDto } from './ExternalIdDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeGroupResponse extends SdkResponse {
    public description?: string;
    private 'display_name'?: string;
    private 'external_id'?: string;
    private 'external_ids'?: Array<ExternalIdDto>;
    private 'group_id'?: string;
    private 'identity_store_id'?: string;
    private 'created_at'?: number;
    private 'created_by'?: string;
    private 'updated_at'?: number;
    private 'updated_by'?: string;
    public constructor() { 
        super();
    }
    public withDescription(description: string): DescribeGroupResponse {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): DescribeGroupResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withExternalId(externalId: string): DescribeGroupResponse {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withExternalIds(externalIds: Array<ExternalIdDto>): DescribeGroupResponse {
        this['external_ids'] = externalIds;
        return this;
    }
    public set externalIds(externalIds: Array<ExternalIdDto>  | undefined) {
        this['external_ids'] = externalIds;
    }
    public get externalIds(): Array<ExternalIdDto> | undefined {
        return this['external_ids'];
    }
    public withGroupId(groupId: string): DescribeGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIdentityStoreId(identityStoreId: string): DescribeGroupResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withCreatedAt(createdAt: number): DescribeGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withCreatedBy(createdBy: string): DescribeGroupResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdatedAt(updatedAt: number): DescribeGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withUpdatedBy(updatedBy: string): DescribeGroupResponse {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
}