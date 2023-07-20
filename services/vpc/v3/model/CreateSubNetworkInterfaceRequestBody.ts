import { CreateSubNetworkInterfaceOption } from './CreateSubNetworkInterfaceOption';


export class CreateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean;
    private 'sub_network_interface'?: CreateSubNetworkInterfaceOption;
    public constructor(subNetworkInterface?: CreateSubNetworkInterfaceOption) { 
        this['sub_network_interface'] = subNetworkInterface;
    }
    public withDryRun(dryRun: boolean): CreateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: CreateSubNetworkInterfaceOption): CreateSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: CreateSubNetworkInterfaceOption  | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface(): CreateSubNetworkInterfaceOption | undefined {
        return this['sub_network_interface'];
    }
}