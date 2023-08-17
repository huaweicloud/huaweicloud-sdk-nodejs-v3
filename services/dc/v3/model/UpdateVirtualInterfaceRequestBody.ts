import { UpdateVirtualInterface } from './UpdateVirtualInterface';


export class UpdateVirtualInterfaceRequestBody {
    private 'virtual_interface'?: UpdateVirtualInterface;
    public constructor(virtualInterface?: UpdateVirtualInterface) { 
        this['virtual_interface'] = virtualInterface;
    }
    public withVirtualInterface(virtualInterface: UpdateVirtualInterface): UpdateVirtualInterfaceRequestBody {
        this['virtual_interface'] = virtualInterface;
        return this;
    }
    public set virtualInterface(virtualInterface: UpdateVirtualInterface  | undefined) {
        this['virtual_interface'] = virtualInterface;
    }
    public get virtualInterface(): UpdateVirtualInterface | undefined {
        return this['virtual_interface'];
    }
}