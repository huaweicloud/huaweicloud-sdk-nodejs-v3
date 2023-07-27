import { ConnectState } from './ConnectState';


export class TunnelInfo {
    private 'tunnel_id'?: string;
    private 'device_id'?: string;
    private 'create_time'?: string;
    private 'closed_time'?: string;
    public status?: string;
    private 'source_connect_state'?: ConnectState;
    private 'device_connect_state'?: ConnectState;
    public constructor() { 
    }
    public withTunnelId(tunnelId: string): TunnelInfo {
        this['tunnel_id'] = tunnelId;
        return this;
    }
    public set tunnelId(tunnelId: string  | undefined) {
        this['tunnel_id'] = tunnelId;
    }
    public get tunnelId(): string | undefined {
        return this['tunnel_id'];
    }
    public withDeviceId(deviceId: string): TunnelInfo {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withCreateTime(createTime: string): TunnelInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withClosedTime(closedTime: string): TunnelInfo {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withStatus(status: string): TunnelInfo {
        this['status'] = status;
        return this;
    }
    public withSourceConnectState(sourceConnectState: ConnectState): TunnelInfo {
        this['source_connect_state'] = sourceConnectState;
        return this;
    }
    public set sourceConnectState(sourceConnectState: ConnectState  | undefined) {
        this['source_connect_state'] = sourceConnectState;
    }
    public get sourceConnectState(): ConnectState | undefined {
        return this['source_connect_state'];
    }
    public withDeviceConnectState(deviceConnectState: ConnectState): TunnelInfo {
        this['device_connect_state'] = deviceConnectState;
        return this;
    }
    public set deviceConnectState(deviceConnectState: ConnectState  | undefined) {
        this['device_connect_state'] = deviceConnectState;
    }
    public get deviceConnectState(): ConnectState | undefined {
        return this['device_connect_state'];
    }
}