import { UpdateConnectGateway } from './UpdateConnectGateway';


export class UpdateConnectGatewayRequestBody {
    private 'connect_gateway'?: UpdateConnectGateway;
    public constructor() { 
    }
    public withConnectGateway(connectGateway: UpdateConnectGateway): UpdateConnectGatewayRequestBody {
        this['connect_gateway'] = connectGateway;
        return this;
    }
    public set connectGateway(connectGateway: UpdateConnectGateway  | undefined) {
        this['connect_gateway'] = connectGateway;
    }
    public get connectGateway(): UpdateConnectGateway | undefined {
        return this['connect_gateway'];
    }
}