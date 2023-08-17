import { CreateVirtualInterface } from './CreateVirtualInterface';


export class CreateVirtualInterfaceRequestBody {
    private 'virtual_interface'?: CreateVirtualInterface;
    public constructor(virtualInterface?: CreateVirtualInterface) { 
        this['virtual_interface'] = virtualInterface;
    }
    public withVirtualInterface(virtualInterface: CreateVirtualInterface): CreateVirtualInterfaceRequestBody {
        this['virtual_interface'] = virtualInterface;
        return this;
    }
    public set virtualInterface(virtualInterface: CreateVirtualInterface  | undefined) {
        this['virtual_interface'] = virtualInterface;
    }
    public get virtualInterface(): CreateVirtualInterface | undefined {
        return this['virtual_interface'];
    }
}