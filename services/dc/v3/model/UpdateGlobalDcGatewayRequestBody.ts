import { UpdateGlobalDcGatewayRequestBodyGlobalDcGateway } from './UpdateGlobalDcGatewayRequestBodyGlobalDcGateway';


export class UpdateGlobalDcGatewayRequestBody {
    private 'dry_run'?: boolean;
    private 'global_dc_gateway'?: UpdateGlobalDcGatewayRequestBodyGlobalDcGateway;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): UpdateGlobalDcGatewayRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalDcGateway(globalDcGateway: UpdateGlobalDcGatewayRequestBodyGlobalDcGateway): UpdateGlobalDcGatewayRequestBody {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: UpdateGlobalDcGatewayRequestBodyGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): UpdateGlobalDcGatewayRequestBodyGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
}