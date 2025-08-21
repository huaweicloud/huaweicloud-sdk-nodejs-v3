import { ItemVO } from './ItemVO';


export class Out2in {
    private 'dst_ip'?: Array<ItemVO>;
    private 'dst_port'?: Array<ItemVO>;
    private 'src_ip'?: Array<ItemVO>;
    public constructor() { 
    }
    public withDstIp(dstIp: Array<ItemVO>): Out2in {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: Array<ItemVO>  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): Array<ItemVO> | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: Array<ItemVO>): Out2in {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: Array<ItemVO>  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): Array<ItemVO> | undefined {
        return this['dst_port'];
    }
    public withSrcIp(srcIp: Array<ItemVO>): Out2in {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: Array<ItemVO>  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): Array<ItemVO> | undefined {
        return this['src_ip'];
    }
}