import { SupportedDevice } from './SupportedDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPeerConfigurationSupportedDevicesResponse extends SdkResponse {
    private 'supported_devices'?: Array<SupportedDevice>;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withSupportedDevices(supportedDevices: Array<SupportedDevice>): ListPeerConfigurationSupportedDevicesResponse {
        this['supported_devices'] = supportedDevices;
        return this;
    }
    public set supportedDevices(supportedDevices: Array<SupportedDevice>  | undefined) {
        this['supported_devices'] = supportedDevices;
    }
    public get supportedDevices(): Array<SupportedDevice> | undefined {
        return this['supported_devices'];
    }
    public withRequestId(requestId: string): ListPeerConfigurationSupportedDevicesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListPeerConfigurationSupportedDevicesResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}