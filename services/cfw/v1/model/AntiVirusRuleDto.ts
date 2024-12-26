import { ScanProtocolConfig } from './ScanProtocolConfig';


export class AntiVirusRuleDto {
    private 'object_id'?: string;
    private 'scan_protocol_configs'?: Array<ScanProtocolConfig>;
    public constructor() { 
    }
    public withObjectId(objectId: string): AntiVirusRuleDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withScanProtocolConfigs(scanProtocolConfigs: Array<ScanProtocolConfig>): AntiVirusRuleDto {
        this['scan_protocol_configs'] = scanProtocolConfigs;
        return this;
    }
    public set scanProtocolConfigs(scanProtocolConfigs: Array<ScanProtocolConfig>  | undefined) {
        this['scan_protocol_configs'] = scanProtocolConfigs;
    }
    public get scanProtocolConfigs(): Array<ScanProtocolConfig> | undefined {
        return this['scan_protocol_configs'];
    }
}