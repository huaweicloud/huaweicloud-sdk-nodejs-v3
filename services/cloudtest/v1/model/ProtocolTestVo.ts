import { HttpVo } from './HttpVo';
import { PingVo } from './PingVo';


export class ProtocolTestVo {
    public http?: HttpVo;
    public ping?: Array<PingVo>;
    private 'point_host'?: Array<string>;
    public protocol?: string;
    public constructor() { 
    }
    public withHttp(http: HttpVo): ProtocolTestVo {
        this['http'] = http;
        return this;
    }
    public withPing(ping: Array<PingVo>): ProtocolTestVo {
        this['ping'] = ping;
        return this;
    }
    public withPointHost(pointHost: Array<string>): ProtocolTestVo {
        this['point_host'] = pointHost;
        return this;
    }
    public set pointHost(pointHost: Array<string>  | undefined) {
        this['point_host'] = pointHost;
    }
    public get pointHost(): Array<string> | undefined {
        return this['point_host'];
    }
    public withProtocol(protocol: string): ProtocolTestVo {
        this['protocol'] = protocol;
        return this;
    }
}