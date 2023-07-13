import { AddExtendCidrOption } from './AddExtendCidrOption';


export class AddVpcExtendCidrRequestBody {
    private 'dry_run'?: boolean | undefined;
    public vpc: AddExtendCidrOption;
    public constructor(vpc?: any) { 
        this['vpc'] = vpc;
    }
    public withDryRun(dryRun: boolean): AddVpcExtendCidrRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withVpc(vpc: AddExtendCidrOption): AddVpcExtendCidrRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}