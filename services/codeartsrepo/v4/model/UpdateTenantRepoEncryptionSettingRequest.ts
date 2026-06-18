import { TenantRepoEncryptionSettingRequestDto } from './TenantRepoEncryptionSettingRequestDto';


export class UpdateTenantRepoEncryptionSettingRequest {
    private 'tenant_id'?: string;
    public body?: TenantRepoEncryptionSettingRequestDto;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): UpdateTenantRepoEncryptionSettingRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: TenantRepoEncryptionSettingRequestDto): UpdateTenantRepoEncryptionSettingRequest {
        this['body'] = body;
        return this;
    }
}