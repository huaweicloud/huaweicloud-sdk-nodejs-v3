

export class ShowSubnetBandwidthControlListRequest {
    private 'bandwidth_id'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'user_name'?: string;
    private 'control_mode'?: ShowSubnetBandwidthControlListRequestControlModeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): ShowSubnetBandwidthControlListRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withDesktopId(desktopId: string): ShowSubnetBandwidthControlListRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ShowSubnetBandwidthControlListRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUserName(userName: string): ShowSubnetBandwidthControlListRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withControlMode(controlMode: ShowSubnetBandwidthControlListRequestControlModeEnum | string): ShowSubnetBandwidthControlListRequest {
        this['control_mode'] = controlMode;
        return this;
    }
    public set controlMode(controlMode: ShowSubnetBandwidthControlListRequestControlModeEnum | string  | undefined) {
        this['control_mode'] = controlMode;
    }
    public get controlMode(): ShowSubnetBandwidthControlListRequestControlModeEnum | string | undefined {
        return this['control_mode'];
    }
    public withOffset(offset: number): ShowSubnetBandwidthControlListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowSubnetBandwidthControlListRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSubnetBandwidthControlListRequestControlModeEnum {
    BLACK = 'BLACK',
    WHITE = 'WHITE'
}
