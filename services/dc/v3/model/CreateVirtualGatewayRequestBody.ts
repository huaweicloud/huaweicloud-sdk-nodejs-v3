import { CreateVirtualGateway } from './CreateVirtualGateway';


export class CreateVirtualGatewayRequestBody {
    private 'virtual_gateway'?: CreateVirtualGateway;
    public constructor() { 
    }
    public withVirtualGateway(virtualGateway: CreateVirtualGateway): CreateVirtualGatewayRequestBody {
        this['virtual_gateway'] = virtualGateway;
        return this;
    }
    public set virtualGateway(virtualGateway: CreateVirtualGateway  | undefined) {
        this['virtual_gateway'] = virtualGateway;
    }
    public get virtualGateway(): CreateVirtualGateway | undefined {
        return this['virtual_gateway'];
    }
}