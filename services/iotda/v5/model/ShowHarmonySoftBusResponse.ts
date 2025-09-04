
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHarmonySoftBusResponse extends SdkResponse {
    private 'bus_id'?: string;
    private 'bus_name'?: string;
    private 'group_id'?: string;
    private 'app_id'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withBusId(busId: string): ShowHarmonySoftBusResponse {
        this['bus_id'] = busId;
        return this;
    }
    public set busId(busId: string  | undefined) {
        this['bus_id'] = busId;
    }
    public get busId(): string | undefined {
        return this['bus_id'];
    }
    public withBusName(busName: string): ShowHarmonySoftBusResponse {
        this['bus_name'] = busName;
        return this;
    }
    public set busName(busName: string  | undefined) {
        this['bus_name'] = busName;
    }
    public get busName(): string | undefined {
        return this['bus_name'];
    }
    public withGroupId(groupId: string): ShowHarmonySoftBusResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAppId(appId: string): ShowHarmonySoftBusResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withStatus(status: string): ShowHarmonySoftBusResponse {
        this['status'] = status;
        return this;
    }
}