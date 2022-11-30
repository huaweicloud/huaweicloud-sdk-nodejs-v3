import { UpdateAddressGroupOption } from './UpdateAddressGroupOption';


export class UpdateAddressGroupRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'address_group': UpdateAddressGroupOption | undefined;
    public constructor(addressGroup?: any) { 
        this['address_group'] = addressGroup;
    }
    public withDryRun(dryRun: boolean): UpdateAddressGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withAddressGroup(addressGroup: UpdateAddressGroupOption): UpdateAddressGroupRequestBody {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: UpdateAddressGroupOption | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup() {
        return this['address_group'];
    }
}