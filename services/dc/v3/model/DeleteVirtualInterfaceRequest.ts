

export class DeleteVirtualInterfaceRequest {
    private 'virtual_interface_id'?: string;
    public constructor(virtualInterfaceId?: string) { 
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public withVirtualInterfaceId(virtualInterfaceId: string): DeleteVirtualInterfaceRequest {
        this['virtual_interface_id'] = virtualInterfaceId;
        return this;
    }
    public set virtualInterfaceId(virtualInterfaceId: string  | undefined) {
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public get virtualInterfaceId(): string | undefined {
        return this['virtual_interface_id'];
    }
}