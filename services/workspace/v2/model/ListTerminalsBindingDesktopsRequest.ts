

export class ListTerminalsBindingDesktopsRequest {
    private 'computer_name'?: string;
    private 'computer_names'?: Array<string>;
    public mac?: string;
    private 'mac_list'?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'count_only'?: boolean;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withComputerName(computerName: string): ListTerminalsBindingDesktopsRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withComputerNames(computerNames: Array<string>): ListTerminalsBindingDesktopsRequest {
        this['computer_names'] = computerNames;
        return this;
    }
    public set computerNames(computerNames: Array<string>  | undefined) {
        this['computer_names'] = computerNames;
    }
    public get computerNames(): Array<string> | undefined {
        return this['computer_names'];
    }
    public withMac(mac: string): ListTerminalsBindingDesktopsRequest {
        this['mac'] = mac;
        return this;
    }
    public withMacList(macList: Array<string>): ListTerminalsBindingDesktopsRequest {
        this['mac_list'] = macList;
        return this;
    }
    public set macList(macList: Array<string>  | undefined) {
        this['mac_list'] = macList;
    }
    public get macList(): Array<string> | undefined {
        return this['mac_list'];
    }
    public withOffset(offset: number): ListTerminalsBindingDesktopsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTerminalsBindingDesktopsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCountOnly(countOnly: boolean): ListTerminalsBindingDesktopsRequest {
        this['count_only'] = countOnly;
        return this;
    }
    public set countOnly(countOnly: boolean  | undefined) {
        this['count_only'] = countOnly;
    }
    public get countOnly(): boolean | undefined {
        return this['count_only'];
    }
}