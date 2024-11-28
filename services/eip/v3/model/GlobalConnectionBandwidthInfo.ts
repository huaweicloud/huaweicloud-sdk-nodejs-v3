

export class GlobalConnectionBandwidthInfo {
    private 'gcb_id'?: string;
    public size?: number;
    private 'gcb_type'?: string;
    private 'admin_state'?: string;
    private 'sla_level'?: string;
    public dscp?: number;
    public constructor() { 
    }
    public withGcbId(gcbId: string): GlobalConnectionBandwidthInfo {
        this['gcb_id'] = gcbId;
        return this;
    }
    public set gcbId(gcbId: string  | undefined) {
        this['gcb_id'] = gcbId;
    }
    public get gcbId(): string | undefined {
        return this['gcb_id'];
    }
    public withSize(size: number): GlobalConnectionBandwidthInfo {
        this['size'] = size;
        return this;
    }
    public withGcbType(gcbType: string): GlobalConnectionBandwidthInfo {
        this['gcb_type'] = gcbType;
        return this;
    }
    public set gcbType(gcbType: string  | undefined) {
        this['gcb_type'] = gcbType;
    }
    public get gcbType(): string | undefined {
        return this['gcb_type'];
    }
    public withAdminState(adminState: string): GlobalConnectionBandwidthInfo {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): string | undefined {
        return this['admin_state'];
    }
    public withSlaLevel(slaLevel: string): GlobalConnectionBandwidthInfo {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): string | undefined {
        return this['sla_level'];
    }
    public withDscp(dscp: number): GlobalConnectionBandwidthInfo {
        this['dscp'] = dscp;
        return this;
    }
}