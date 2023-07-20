import { UpdateSubNetworkInterfaceOption } from './UpdateSubNetworkInterfaceOption';


export class UpdateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean;
    private 'sub_network_interface'?: UpdateSubNetworkInterfaceOption;
    public constructor(subNetworkInterface?: UpdateSubNetworkInterfaceOption) { 
        this['sub_network_interface'] = subNetworkInterface;
    }
    public withDryRun(dryRun: boolean): UpdateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: UpdateSubNetworkInterfaceOption): UpdateSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: UpdateSubNetworkInterfaceOption  | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface(): UpdateSubNetworkInterfaceOption | undefined {
        return this['sub_network_interface'];
    }
}