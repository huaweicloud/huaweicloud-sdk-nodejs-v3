import { CreateGlobalDcGateway } from './CreateGlobalDcGateway';


export class CreateGlobalDcGatewayRequestBody {
    private 'global_dc_gateway'?: CreateGlobalDcGateway;
    public constructor(globalDcGateway?: CreateGlobalDcGateway) { 
        this['global_dc_gateway'] = globalDcGateway;
    }
    public withGlobalDcGateway(globalDcGateway: CreateGlobalDcGateway): CreateGlobalDcGatewayRequestBody {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: CreateGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): CreateGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
}