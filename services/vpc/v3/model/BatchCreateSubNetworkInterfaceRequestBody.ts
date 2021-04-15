import { BatchCreateSubNetworkInterfaceOption } from './BatchCreateSubNetworkInterfaceOption';


export class BatchCreateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'sub_network_interface': BatchCreateSubNetworkInterfaceOption | undefined;
    public count: number;
    public constructor(subNetworkInterface?: any, count?: any) { 
        this['sub_network_interface'] = subNetworkInterface;
        this['count'] = count;
    }
    public withDryRun(dryRun: boolean): BatchCreateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withSubNetworkInterface(subNetworkInterface: BatchCreateSubNetworkInterfaceOption): BatchCreateSubNetworkInterfaceRequestBody {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: BatchCreateSubNetworkInterfaceOption | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface() {
        return this['sub_network_interface'];
    }
    public withCount(count: number): BatchCreateSubNetworkInterfaceRequestBody {
        this['count'] = count;
        return this;
    }
}