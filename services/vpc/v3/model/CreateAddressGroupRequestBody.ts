import { CreateAddressGroupOption } from './CreateAddressGroupOption';


export class CreateAddressGroupRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'address_group': CreateAddressGroupOption | undefined;
    public constructor(addressGroup?: any) { 
        this['address_group'] = addressGroup;
    }
    public withDryRun(dryRun: boolean): CreateAddressGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withAddressGroup(addressGroup: CreateAddressGroupOption): CreateAddressGroupRequestBody {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: CreateAddressGroupOption | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup() {
        return this['address_group'];
    }
}