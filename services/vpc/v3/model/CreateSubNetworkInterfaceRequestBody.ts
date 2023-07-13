import { CreateSubNetworkInterfaceOption } from './CreateSubNetworkInterfaceOption';


export class CreateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'sub_network_interface': CreateSubNetworkInterfaceOption | undefined;
    public constructor(subNetworkInterface?: any) { 
        this['sub_network_interface'] = subNetworkInterface;
    }
    public withDryRun(dryRun: boolean): CreateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: CreateSubNetworkInterfaceOption): CreateSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: CreateSubNetworkInterfaceOption | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface() {
        return this['sub_network_interface'];
    }
}