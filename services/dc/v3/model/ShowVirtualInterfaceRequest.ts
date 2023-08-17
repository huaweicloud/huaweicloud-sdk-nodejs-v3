

export class ShowVirtualInterfaceRequest {
    public fields?: Array<string>;
    private 'virtual_interface_id'?: string;
    public constructor(virtualInterfaceId?: string) { 
        this['virtual_interface_id'] = virtualInterfaceId;
    }
    public withFields(fields: Array<string>): ShowVirtualInterfaceRequest {
        this['fields'] = fields;
        return this;
    }
    public withVirtualInterfaceId(virtualInterfaceId: string): ShowVirtualInterfaceRequest {
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