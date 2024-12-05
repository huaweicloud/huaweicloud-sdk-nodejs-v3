import { CreateGlobalDcGatewayRequestBodyGlobalDcGateway } from './CreateGlobalDcGatewayRequestBodyGlobalDcGateway';


export class CreateGlobalDcGatewayRequestBody {
    private 'dry_run'?: boolean;
    private 'global_dc_gateway'?: CreateGlobalDcGatewayRequestBodyGlobalDcGateway;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): CreateGlobalDcGatewayRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalDcGateway(globalDcGateway: CreateGlobalDcGatewayRequestBodyGlobalDcGateway): CreateGlobalDcGatewayRequestBody {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: CreateGlobalDcGatewayRequestBodyGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): CreateGlobalDcGatewayRequestBodyGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
}