import { ActiveControlRspDTO } from './ActiveControlRspDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPropertyActiveControlsResponse extends SdkResponse {
    private 'device_id'?: string;
    private 'service_id'?: string;
    public property?: string;
    private 'active_controls'?: Array<ActiveControlRspDTO>;
    private 'result_code'?: number;
    private 'result_desc'?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ListPropertyActiveControlsResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withServiceId(serviceId: string): ListPropertyActiveControlsResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withProperty(property: string): ListPropertyActiveControlsResponse {
        this['property'] = property;
        return this;
    }
    public withActiveControls(activeControls: Array<ActiveControlRspDTO>): ListPropertyActiveControlsResponse {
        this['active_controls'] = activeControls;
        return this;
    }
    public set activeControls(activeControls: Array<ActiveControlRspDTO>  | undefined) {
        this['active_controls'] = activeControls;
    }
    public get activeControls(): Array<ActiveControlRspDTO> | undefined {
        return this['active_controls'];
    }
    public withResultCode(resultCode: number): ListPropertyActiveControlsResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: number  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): number | undefined {
        return this['result_code'];
    }
    public withResultDesc(resultDesc: string): ListPropertyActiveControlsResponse {
        this['result_desc'] = resultDesc;
        return this;
    }
    public set resultDesc(resultDesc: string  | undefined) {
        this['result_desc'] = resultDesc;
    }
    public get resultDesc(): string | undefined {
        return this['result_desc'];
    }
}