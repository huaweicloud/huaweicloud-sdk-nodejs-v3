import { UpdateVirtualGateway } from './UpdateVirtualGateway';


export class UpdateVirtualGatewayRequestBody {
    private 'virtual_gateway'?: UpdateVirtualGateway;
    public constructor() { 
    }
    public withVirtualGateway(virtualGateway: UpdateVirtualGateway): UpdateVirtualGatewayRequestBody {
        this['virtual_gateway'] = virtualGateway;
        return this;
    }
    public set virtualGateway(virtualGateway: UpdateVirtualGateway  | undefined) {
        this['virtual_gateway'] = virtualGateway;
    }
    public get virtualGateway(): UpdateVirtualGateway | undefined {
        return this['virtual_gateway'];
    }
}