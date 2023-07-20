

export class ExportRoutePolicy {
    private 'export_policy_id'?: string;
    public constructor() { 
    }
    public withExportPolicyId(exportPolicyId: string): ExportRoutePolicy {
        this['export_policy_id'] = exportPolicyId;
        return this;
    }
    public set exportPolicyId(exportPolicyId: string  | undefined) {
        this['export_policy_id'] = exportPolicyId;
    }
    public get exportPolicyId(): string | undefined {
        return this['export_policy_id'];
    }
}