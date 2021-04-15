import { UpdateSubNetworkInterfaceOption } from './UpdateSubNetworkInterfaceOption';


export class UpdateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'sub_network_interface': UpdateSubNetworkInterfaceOption | undefined;
    public constructor(subNetworkInterface?: any) { 
        this['sub_network_interface'] = subNetworkInterface;
    }
    public withDryRun(dryRun: boolean): UpdateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: UpdateSubNetworkInterfaceOption): UpdateSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: UpdateSubNetworkInterfaceOption | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface() {
        return this['sub_network_interface'];
    }
}