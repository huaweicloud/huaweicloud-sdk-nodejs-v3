

export class AttachedEnterpriseRouterSiteCode {
    private 'attached_er_table_site_code'?: string;
    public constructor(attachedErTableSiteCode?: string) { 
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
    }
    public withAttachedErTableSiteCode(attachedErTableSiteCode: string): AttachedEnterpriseRouterSiteCode {
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
        return this;
    }
    public set attachedErTableSiteCode(attachedErTableSiteCode: string  | undefined) {
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
    }
    public get attachedErTableSiteCode(): string | undefined {
        return this['attached_er_table_site_code'];
    }
}