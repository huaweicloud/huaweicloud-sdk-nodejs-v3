import { CreateConnectGateway } from './CreateConnectGateway';


export class CreateConnectGatewayRequestBody {
    private 'connect_gateway'?: CreateConnectGateway;
    public constructor(connectGateway?: CreateConnectGateway) { 
        this['connect_gateway'] = connectGateway;
    }
    public withConnectGateway(connectGateway: CreateConnectGateway): CreateConnectGatewayRequestBody {
        this['connect_gateway'] = connectGateway;
        return this;
    }
    public set connectGateway(connectGateway: CreateConnectGateway  | undefined) {
        this['connect_gateway'] = connectGateway;
    }
    public get connectGateway(): CreateConnectGateway | undefined {
        return this['connect_gateway'];
    }
}