
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublisherResponse extends SdkResponse {
    private 'publisher_unique_id'?: string;
    private 'user_id'?: string;
    private 'tenant_id'?: string;
    public description?: string;
    private 'logo_url'?: string;
    public website?: string;
    private 'support_url'?: string;
    private 'source_url'?: string;
    private 'en_name'?: string;
    public name?: string;
    private 'auth_status'?: string;
    private 'is_delete'?: number;
    private 'last_update_user_name'?: string;
    private 'last_update_user_id'?: string;
    private 'last_update_time'?: string;
    public constructor() { 
        super();
    }
    public withPublisherUniqueId(publisherUniqueId: string): ListPublisherResponse {
        this['publisher_unique_id'] = publisherUniqueId;
        return this;
    }
    public set publisherUniqueId(publisherUniqueId: string  | undefined) {
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public get publisherUniqueId(): string | undefined {
        return this['publisher_unique_id'];
    }
    public withUserId(userId: string): ListPublisherResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withTenantId(tenantId: string): ListPublisherResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDescription(description: string): ListPublisherResponse {
        this['description'] = description;
        return this;
    }
    public withLogoUrl(logoUrl: string): ListPublisherResponse {
        this['logo_url'] = logoUrl;
        return this;
    }
    public set logoUrl(logoUrl: string  | undefined) {
        this['logo_url'] = logoUrl;
    }
    public get logoUrl(): string | undefined {
        return this['logo_url'];
    }
    public withWebsite(website: string): ListPublisherResponse {
        this['website'] = website;
        return this;
    }
    public withSupportUrl(supportUrl: string): ListPublisherResponse {
        this['support_url'] = supportUrl;
        return this;
    }
    public set supportUrl(supportUrl: string  | undefined) {
        this['support_url'] = supportUrl;
    }
    public get supportUrl(): string | undefined {
        return this['support_url'];
    }
    public withSourceUrl(sourceUrl: string): ListPublisherResponse {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withEnName(enName: string): ListPublisherResponse {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withName(name: string): ListPublisherResponse {
        this['name'] = name;
        return this;
    }
    public withAuthStatus(authStatus: string): ListPublisherResponse {
        this['auth_status'] = authStatus;
        return this;
    }
    public set authStatus(authStatus: string  | undefined) {
        this['auth_status'] = authStatus;
    }
    public get authStatus(): string | undefined {
        return this['auth_status'];
    }
    public withIsDelete(isDelete: number): ListPublisherResponse {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: number  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): number | undefined {
        return this['is_delete'];
    }
    public withLastUpdateUserName(lastUpdateUserName: string): ListPublisherResponse {
        this['last_update_user_name'] = lastUpdateUserName;
        return this;
    }
    public set lastUpdateUserName(lastUpdateUserName: string  | undefined) {
        this['last_update_user_name'] = lastUpdateUserName;
    }
    public get lastUpdateUserName(): string | undefined {
        return this['last_update_user_name'];
    }
    public withLastUpdateUserId(lastUpdateUserId: string): ListPublisherResponse {
        this['last_update_user_id'] = lastUpdateUserId;
        return this;
    }
    public set lastUpdateUserId(lastUpdateUserId: string  | undefined) {
        this['last_update_user_id'] = lastUpdateUserId;
    }
    public get lastUpdateUserId(): string | undefined {
        return this['last_update_user_id'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ListPublisherResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
}