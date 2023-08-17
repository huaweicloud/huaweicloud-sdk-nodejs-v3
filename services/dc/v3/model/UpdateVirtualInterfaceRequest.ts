import { UpdateVirtualInterfaceRequestBody } from './UpdateVirtualInterfaceRequestBody';


export class UpdateVirtualInterfaceRequest {
    private 'virtual_interface_id'?: string;
    public body?: UpdateVirtualInterfaceRequestBody;
    public constructor(virtualInterfaceId?: string) { 
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public withVirtualInterfaceId(virtualInterfaceId: string): UpdateVirtualInterfaceRequest {
        this['virtual_interface_id'] = virtualInterfaceId;
        return this;
    }
    public set virtualInterfaceId(virtualInterfaceId: string  | undefined) {
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public get virtualInterfaceId(): string | undefined {
        return this['virtual_interface_id'];
    }
    public withBody(body: UpdateVirtualInterfaceRequestBody): UpdateVirtualInterfaceRequest {
        this['body'] = body;
        return this;
    }
}