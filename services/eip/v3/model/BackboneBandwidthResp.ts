

export class BackboneBandwidthResp {
    public id?: string;
    private 'admin_status'?: string;
    public size?: number;
    private 'short_id'?: string;
    private 'sla_level'?: BackboneBandwidthRespSlaLevelEnum | string;
    public dscp?: number;
    public constructor() { 
    }
    public withId(id: string): BackboneBandwidthResp {
        this['id'] = id;
        return this;
    }
    public withAdminStatus(adminStatus: string): BackboneBandwidthResp {
        this['admin_status'] = adminStatus;
        return this;
    }
    public set adminStatus(adminStatus: string  | undefined) {
        this['admin_status'] = adminStatus;
    }
    public get adminStatus(): string | undefined {
        return this['admin_status'];
    }
    public withSize(size: number): BackboneBandwidthResp {
        this['size'] = size;
        return this;
    }
    public withShortId(shortId: string): BackboneBandwidthResp {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withSlaLevel(slaLevel: BackboneBandwidthRespSlaLevelEnum | string): BackboneBandwidthResp {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: BackboneBandwidthRespSlaLevelEnum | string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): BackboneBandwidthRespSlaLevelEnum | string | undefined {
        return this['sla_level'];
    }
    public withDscp(dscp: number): BackboneBandwidthResp {
        this['dscp'] = dscp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackboneBandwidthRespSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag',
    CU = 'Cu'
}
