import { Bw } from './Bw';


export class PopPolicy {
    private 'block_location'?: Array<string>;
    private 'block_protocol'?: Array<string>;
    private 'bw_list'?: Bw;
    private 'connection_protection'?: boolean;
    private 'connection_protection_list'?: Array<string>;
    private 'fingerprint_count'?: number;
    private 'port_block_count'?: number;
    private 'watermark_count'?: number;
    private 'if_exist_traffic'?: boolean;
    public pop?: PopPolicyPopEnum | string;
    public constructor(blockLocation?: Array<string>, blockProtocol?: Array<string>, bwList?: Bw, connectionProtection?: boolean, connectionProtectionList?: Array<string>, fingerprintCount?: number, portBlockCount?: number, watermarkCount?: number, ifExistTraffic?: boolean, pop?: string) { 
        this['block_location'] = blockLocation;
        this['block_protocol'] = blockProtocol;
        this['bw_list'] = bwList;
        this['connection_protection'] = connectionProtection;
        this['connection_protection_list'] = connectionProtectionList;
        this['fingerprint_count'] = fingerprintCount;
        this['port_block_count'] = portBlockCount;
        this['watermark_count'] = watermarkCount;
        this['if_exist_traffic'] = ifExistTraffic;
        this['pop'] = pop;
    }
    public withBlockLocation(blockLocation: Array<string>): PopPolicy {
        this['block_location'] = blockLocation;
        return this;
    }
    public set blockLocation(blockLocation: Array<string>  | undefined) {
        this['block_location'] = blockLocation;
    }
    public get blockLocation(): Array<string> | undefined {
        return this['block_location'];
    }
    public withBlockProtocol(blockProtocol: Array<string>): PopPolicy {
        this['block_protocol'] = blockProtocol;
        return this;
    }
    public set blockProtocol(blockProtocol: Array<string>  | undefined) {
        this['block_protocol'] = blockProtocol;
    }
    public get blockProtocol(): Array<string> | undefined {
        return this['block_protocol'];
    }
    public withBwList(bwList: Bw): PopPolicy {
        this['bw_list'] = bwList;
        return this;
    }
    public set bwList(bwList: Bw  | undefined) {
        this['bw_list'] = bwList;
    }
    public get bwList(): Bw | undefined {
        return this['bw_list'];
    }
    public withConnectionProtection(connectionProtection: boolean): PopPolicy {
        this['connection_protection'] = connectionProtection;
        return this;
    }
    public set connectionProtection(connectionProtection: boolean  | undefined) {
        this['connection_protection'] = connectionProtection;
    }
    public get connectionProtection(): boolean | undefined {
        return this['connection_protection'];
    }
    public withConnectionProtectionList(connectionProtectionList: Array<string>): PopPolicy {
        this['connection_protection_list'] = connectionProtectionList;
        return this;
    }
    public set connectionProtectionList(connectionProtectionList: Array<string>  | undefined) {
        this['connection_protection_list'] = connectionProtectionList;
    }
    public get connectionProtectionList(): Array<string> | undefined {
        return this['connection_protection_list'];
    }
    public withFingerprintCount(fingerprintCount: number): PopPolicy {
        this['fingerprint_count'] = fingerprintCount;
        return this;
    }
    public set fingerprintCount(fingerprintCount: number  | undefined) {
        this['fingerprint_count'] = fingerprintCount;
    }
    public get fingerprintCount(): number | undefined {
        return this['fingerprint_count'];
    }
    public withPortBlockCount(portBlockCount: number): PopPolicy {
        this['port_block_count'] = portBlockCount;
        return this;
    }
    public set portBlockCount(portBlockCount: number  | undefined) {
        this['port_block_count'] = portBlockCount;
    }
    public get portBlockCount(): number | undefined {
        return this['port_block_count'];
    }
    public withWatermarkCount(watermarkCount: number): PopPolicy {
        this['watermark_count'] = watermarkCount;
        return this;
    }
    public set watermarkCount(watermarkCount: number  | undefined) {
        this['watermark_count'] = watermarkCount;
    }
    public get watermarkCount(): number | undefined {
        return this['watermark_count'];
    }
    public withIfExistTraffic(ifExistTraffic: boolean): PopPolicy {
        this['if_exist_traffic'] = ifExistTraffic;
        return this;
    }
    public set ifExistTraffic(ifExistTraffic: boolean  | undefined) {
        this['if_exist_traffic'] = ifExistTraffic;
    }
    public get ifExistTraffic(): boolean | undefined {
        return this['if_exist_traffic'];
    }
    public withPop(pop: PopPolicyPopEnum | string): PopPolicy {
        this['pop'] = pop;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PopPolicyPopEnum {
    ALL = 'ALL'
}
