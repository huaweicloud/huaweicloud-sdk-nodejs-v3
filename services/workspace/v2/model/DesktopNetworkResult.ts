import { NetworkInfo } from './NetworkInfo';


export class DesktopNetworkResult {
    private 'computer_name'?: string;
    private 'computer_id'?: string;
    private 'computer_ip'?: string;
    private 'network_infos'?: Array<NetworkInfo>;
    public constructor() { 
    }
    public withComputerName(computerName: string): DesktopNetworkResult {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withComputerId(computerId: string): DesktopNetworkResult {
        this['computer_id'] = computerId;
        return this;
    }
    public set computerId(computerId: string  | undefined) {
        this['computer_id'] = computerId;
    }
    public get computerId(): string | undefined {
        return this['computer_id'];
    }
    public withComputerIp(computerIp: string): DesktopNetworkResult {
        this['computer_ip'] = computerIp;
        return this;
    }
    public set computerIp(computerIp: string  | undefined) {
        this['computer_ip'] = computerIp;
    }
    public get computerIp(): string | undefined {
        return this['computer_ip'];
    }
    public withNetworkInfos(networkInfos: Array<NetworkInfo>): DesktopNetworkResult {
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