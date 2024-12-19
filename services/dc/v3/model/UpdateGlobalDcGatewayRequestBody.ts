import { UpdateGlobalDcGateway } from './UpdateGlobalDcGateway';


export class UpdateGlobalDcGatewayRequestBody {
    private 'global_dc_gateway'?: UpdateGlobalDcGateway;
    public constructor(globalDcGateway?: UpdateGlobalDcGateway) { 
        this['global_dc_gateway'] = globalDcGateway;
    }
    public withGlobalDcGateway(globalDcGateway: UpdateGlobalDcGateway): UpdateGlobalDcGatewayRequestBody {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: UpdateGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): UpdateGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
}