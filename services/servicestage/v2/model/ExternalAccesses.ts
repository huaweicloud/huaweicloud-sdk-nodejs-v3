import { ExternalAccessProtocol } from './ExternalAccessProtocol';
import { ExternalAccessStatus } from './ExternalAccessStatus';
import { ExternalAccessType } from './ExternalAccessType';


export class ExternalAccesses {
    public id?: string;
    public protocol?: ExternalAccessProtocol;
    public address?: string;
    private 'forward_port'?: number;
    public type?: ExternalAccessType;
    public status?: ExternalAccessStatus;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor(protocol?: ExternalAccessProtocol, address?: string, forwardPort?: number) { 
        this['protocol'] = protocol;
        this['address'] = address;
        this['forward_port'] = forwardPort;
    }
    public withId(id: string): ExternalAccesses {
        this['id'] = id;
        return this;
    }
    public withProtocol(protocol: ExternalAccessProtocol): ExternalAccesses {
        this['protocol'] = protocol;
        return this;
    }
    public withAddress(address: string): ExternalAccesses {
        this['address'] = address;
        return this;
    }
    public withForwardPort(forwardPort: number): ExternalAccesses {
        this['forward_port'] = forwardPort;
        return this;
    }
    public set forwardPort(forwardPort: number  | undefined) {
        this['forward_port'] = forwardPort;
    }
    public get forwardPort(): number | undefined {
        return this['forward_port'];
    }
    public withType(type: ExternalAccessType): ExternalAccesses {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ExternalAccessStatus): ExternalAccesses {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): ExternalAccesses {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ExternalAccesses {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}