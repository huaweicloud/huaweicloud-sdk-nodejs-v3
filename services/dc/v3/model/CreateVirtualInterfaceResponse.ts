import { VirtualInterface } from './VirtualInterface';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVirtualInterfaceResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'virtual_interface'?: VirtualInterface;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateVirtualInterfaceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirtualInterface(virtualInterface: VirtualInterface): CreateVirtualInterfaceResponse {
        this['virtual_interface'] = virtualInterface;
        return this;
    }
    public set virtualInterface(virtualInterface: VirtualInterface  | undefined) {
        this['virtual_interface'] = virtualInterface;
    }
    public get virtualInterface(): VirtualInterface | undefined {
        return this['virtual_interface'];
    }
}