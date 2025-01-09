import { NetworkInfo } from './NetworkInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopNetworkResponse extends SdkResponse {
    private 'computer_name'?: string;
    private 'computer_id'?: string;
    private 'network_infos'?: Array<NetworkInfo>;
    public constructor() { 
        super();
    }
    public withComputerName(computerName: string): ShowDesktopNetworkResponse {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withComputerId(computerId: string): ShowDesktopNetworkResponse {
        this['computer_id'] = computerId;
        return this;
    }
    public set computerId(computerId: string  | undefined) {
        this['computer_id'] = computerId;
    }
    public get computerId(): string | undefined {
        return this['computer_id'];
    }
    public withNetworkInfos(networkInfos: Array<NetworkInfo>): ShowDesktopNetworkResponse {
        this['network_infos'] = networkInfos;
        return this;
    }
    public set networkInfos(networkInfos: Array<NetworkInfo>  | undefined) {
        this['network_infos'] = networkInfos;
    }
    public get networkInfos(): Array<NetworkInfo> | undefined {
        return this['network_infos'];
    }
}