

export class WorkspaceQuotasUpdateResponse {
    private 'max_quota'?: number;
    private 'update_time'?: number;
    public resource?: string;
    public quota?: number;
    private 'min_quota'?: number;
    private 'name_cn'?: string;
    private 'unit_cn'?: string;
    private 'name_en'?: string;
    private 'unit_en'?: string;
    public constructor() { 
    }
    public withMaxQuota(maxQuota: number): WorkspaceQuotasUpdateResponse {
        this['max_quota'] = maxQuota;
        return this;
    }
    public set maxQuota(maxQuota: number  | undefined) {
        this['max_quota'] = maxQuota;
    }
    public get maxQuota(): number | undefined {
        return this['max_quota'];
    }
    public withUpdateTime(updateTime: number): WorkspaceQuotasUpdateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withResource(resource: string): WorkspaceQuotasUpdateResponse {
        this['resource'] = resource;
        return this;
    }
    public withQuota(quota: number): WorkspaceQuotasUpdateResponse {
        this['quota'] = quota;
        return this;
    }
    public withMinQuota(minQuota: number): WorkspaceQuotasUpdateResponse {
        this['min_quota'] = minQuota;
        return this;
    }
    public set minQuota(minQuota: number  | undefined) {
        this['min_quota'] = minQuota;
    }
    public get minQuota(): number | undefined {
        return this['min_quota'];
    }
    public withNameCn(nameCn: string): WorkspaceQuotasUpdateResponse {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withUnitCn(unitCn: string): WorkspaceQuotasUpdateResponse {
        this['unit_cn'] = unitCn;
        return this;
    }
    public set unitCn(unitCn: string  | undefined) {
        this['unit_cn'] = unitCn;
    }
    public get unitCn(): string | undefined {
        return this['unit_cn'];
    }
    public withNameEn(nameEn: string): WorkspaceQuotasUpdateResponse {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withUnitEn(unitEn: string): WorkspaceQuotasUpdateResponse {
        this['unit_en'] = unitEn;
        return this;
    }
    public set unitEn(unitEn: string  | undefined) {
        this['unit_en'] = unitEn;
    }
    public get unitEn(): string | undefined {
        return this['unit_en'];
    }
}