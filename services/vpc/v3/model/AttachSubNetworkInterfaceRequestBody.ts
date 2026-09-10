import { AttachSubNetworkInterfaceOption } from './AttachSubNetworkInterfaceOption';


export class AttachSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean;
    private 'sub_network_interface'?: AttachSubNetworkInterfaceOption;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): AttachSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: AttachSubNetworkInterfaceOption): AttachSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: AttachSubNetworkInterfaceOption  | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface(): AttachSubNetworkInterfaceOption | undefined {
        return this['sub_network_interface'];
    }
}