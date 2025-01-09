

export class Eips {
    public id?: string;
    public address?: string;
    private 'bandwidth_size'?: number;
    private 'eip_charge_mode'?: string;
    private 'create_time'?: string;
    private 'attached_desktop_id'?: string;
    private 'attached_desktop_name'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Eips {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): Eips {
        this['address'] = address;
        return this;
    }
    public withBandwidthSize(bandwidthSize: number): Eips {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEipChargeMode(eipChargeMode: string): Eips {
        this['eip_charge_mode'] = eipChargeMode;
        return this;
    }
    public set eipChargeMode(eipChargeMode: string  | undefined) {
        this['eip_charge_mode'] = eipChargeMode;
    }
    public get eipChargeMode(): string | undefined {
        return this['eip_charge_mode'];
    }
    public withCreateTime(createTime: string): Eips {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withAttachedDesktopId(attachedDesktopId: string): Eips {
        this['attached_desktop_id'] = attachedDesktopId;
        return this;
    }
    public set attachedDesktopId(attachedDesktopId: string  | undefined) {
        this['attached_desktop_id'] = attachedDesktopId;
    }
    public get attachedDesktopId(): string | undefined {
        return this['attached_desktop_id'];
    }
    public withAttachedDesktopName(attachedDesktopName: string): Eips {
        this['attached_desktop_name'] = attachedDesktopName;
        return this;
    }
    public set attachedDesktopName(attachedDesktopName: string  | undefined) {
        this['attached_desktop_name'] = attachedDesktopName;
    }
    public get attachedDesktopName(): string | undefined {
        return this['attached_desktop_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Eips {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}