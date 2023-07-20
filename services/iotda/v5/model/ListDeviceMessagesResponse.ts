import { DeviceMessage } from './DeviceMessage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceMessagesResponse extends SdkResponse {
    private 'device_id'?: string;
    public messages?: Array<DeviceMessage>;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ListDeviceMessagesResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withMessages(messages: Array<DeviceMessage>): ListDeviceMessagesResponse {
        this['messages'] = messages;
        return this;
    }
}