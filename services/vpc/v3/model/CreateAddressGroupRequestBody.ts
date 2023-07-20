import { CreateAddressGroupOption } from './CreateAddressGroupOption';


export class CreateAddressGroupRequestBody {
    private 'dry_run'?: boolean;
    private 'address_group'?: CreateAddressGroupOption;
    public constructor(addressGroup?: CreateAddressGroupOption) { 
        this['address_group'] = addressGroup;
    }
    public withDryRun(dryRun: boolean): CreateAddressGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withAddressGroup(addressGroup: CreateAddressGroupOption): CreateAddressGroupRequestBody {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: CreateAddressGroupOption  | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup(): CreateAddressGroupOption | undefined {
        return this['address_group'];
    }
}