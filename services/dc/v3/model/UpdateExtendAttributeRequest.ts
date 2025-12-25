import { UpdateExtendAttributeRequestBody } from './UpdateExtendAttributeRequestBody';


export class UpdateExtendAttributeRequest {
    private 'virtual_interface_id'?: string;
    public body?: UpdateExtendAttributeRequestBody;
    public constructor(virtualInterfaceId?: string) { 
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public withVirtualInterfaceId(virtualInterfaceId: string): UpdateExtendAttributeRequest {
        this['virtual_interface_id'] = virtualInterfaceId;
        return this;
    }
    public set virtualInterfaceId(virtualInterfaceId: string  | undefined) {
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public get virtualInterfaceId(): string | undefined {
        return this['virtual_interface_id'];
    }
    public withBody(body: UpdateExtendAttributeRequestBody): UpdateExtendAttributeRequest {
        this['body'] = body;
        return this;
    }
}