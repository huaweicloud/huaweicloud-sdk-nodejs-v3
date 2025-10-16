

export class CreateElbClusterPortRequestBody {
    private 'cluster_id'?: string;
    private 'elb_id'?: string;
    public mode?: CreateElbClusterPortRequestBodyModeEnum | string;
    private 'lb_listener_port'?: number;
    private 'server_port'?: number;
    private 'tunnel_lb_listener_port'?: number;
    private 'tunnel_server_port'?: number;
    public constructor(clusterId?: string, elbId?: string, mode?: string, lbListenerPort?: number, serverPort?: number) { 
        this['cluster_id'] = clusterId;
        this['elb_id'] = elbId;
        this['mode'] = mode;
        this['lb_listener_port'] = lbListenerPort;
        this['server_port'] = serverPort;
    }
    public withClusterId(clusterId: string): CreateElbClusterPortRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withElbId(elbId: string): CreateElbClusterPortRequestBody {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withMode(mode: CreateElbClusterPortRequestBodyModeEnum | string): CreateElbClusterPortRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withLbListenerPort(lbListenerPort: number): CreateElbClusterPortRequestBody {
        this['lb_listener_port'] = lbListenerPort;
        return this;
    }
    public set lbListenerPort(lbListenerPort: number  | undefined) {
        this['lb_listener_port'] = lbListenerPort;
    }
    public get lbListenerPort(): number | undefined {
        return this['lb_listener_port'];
    }
    public withServerPort(serverPort: number): CreateElbClusterPortRequestBody {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: number  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): number | undefined {
        return this['server_port'];
    }
    public withTunnelLbListenerPort(tunnelLbListenerPort: number): CreateElbClusterPortRequestBody {
        this['tunnel_lb_listener_port'] = tunnelLbListenerPort;
        return this;
    }
    public set tunnelLbListenerPort(tunnelLbListenerPort: number  | undefined) {
        this['tunnel_lb_listener_port'] = tunnelLbListenerPort;
    }
    public get tunnelLbListenerPort(): number | undefined {
        return this['tunnel_lb_listener_port'];
    }
    public withTunnelServerPort(tunnelServerPort: number): CreateElbClusterPortRequestBody {
        this['tunnel_server_port'] = tunnelServerPort;
        return this;
    }
    public set tunnelServerPort(tunnelServerPort: number  | undefined) {
        this['tunnel_server_port'] = tunnelServerPort;
    }
    public get tunnelServerPort(): number | undefined {
        return this['tunnel_server_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateElbClusterPortRequestBodyModeEnum {
    TUNNEL = 'TUNNEL',
    PROXY = 'PROXY'
}
