import { DiagnoseResult } from './DiagnoseResult';
import { PublicNetworkStatus } from './PublicNetworkStatus';


export class PublicNetworkAccess {
    public result?: DiagnoseResult;
    private 'public_network_info'?: Array<PublicNetworkStatus>;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): PublicNetworkAccess {
        this['result'] = result;
        return this;
    }
    public withPublicNetworkInfo(publicNetworkInfo: Array<PublicNetworkStatus>): PublicNetworkAccess {
        this['public_network_info'] = publicNetworkInfo;
        return this;
    }
    public set publicNetworkInfo(publicNetworkInfo: Array<PublicNetworkStatus>  | undefined) {
        this['public_network_info'] = publicNetworkInfo;
    }
    public get publicNetworkInfo(): Array<PublicNetworkStatus> | undefined {
        return this['public_network_info'];
    }
}