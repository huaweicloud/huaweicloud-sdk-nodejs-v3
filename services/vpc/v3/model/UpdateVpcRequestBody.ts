import { UpdateVpcOption } from './UpdateVpcOption';


export class UpdateVpcRequestBody {
    private 'dry_run'?: boolean | undefined;
    public vpc: UpdateVpcOption;
    public constructor(vpc?: any) { 
        this['vpc'] = vpc;
    }
    public withDryRun(dryRun: boolean): UpdateVpcRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withVpc(vpc: UpdateVpcOption): UpdateVpcRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}