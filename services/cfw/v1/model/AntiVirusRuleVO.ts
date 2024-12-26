import { ScanProtocolConfig } from './ScanProtocolConfig';


export class AntiVirusRuleVO {
    public id?: string;
    public name?: string;
    private 'scan_protocol_configs'?: Array<ScanProtocolConfig>;
    public total?: number;
    public constructor() { 
    }
    public withId(id: string): AntiVirusRuleVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AntiVirusRuleVO {
        this['name'] = name;
        return this;
    }
    public withScanProtocolConfigs(scanProtocolConfigs: Array<ScanProtocolConfig>): AntiVirusRuleVO {
        this['scan_protocol_configs'] = scanProtocolConfigs;
        return this;
    }
    public set scanProtocolConfigs(scanProtocolConfigs: Array<ScanProtocolConfig>  | undefined) {
        this['scan_protocol_configs'] = scanProtocolConfigs;
    }
    public get scanProtocolConfigs(): Array<ScanProtocolConfig> | undefined {
        return this['scan_protocol_configs'];
    }
    public withTotal(total: number): AntiVirusRuleVO {
        this['total'] = total;
        return this;
    }
}