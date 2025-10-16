
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckClusterPortResponse extends SdkResponse {
    public id?: string;
    private 'cluster_id'?: string;
    private 'elb_id'?: string;
    private 'elb_ip'?: string;
    public mode?: CheckClusterPortResponseModeEnum | string;
    private 'listener_port'?: number;
    private 'listener_id'?: string;
    private 'server_group_port'?: number;
    private 'server_group_id'?: string;
    private 'project_id'?: string;
    private 'validate_time'?: string;
    public wrong?: boolean;
    private 'wrong_msg'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CheckClusterPortResponse {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): CheckClusterPortResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withElbId(elbId: string): CheckClusterPortResponse {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withElbIp(elbIp: string): CheckClusterPortResponse {
        this['elb_ip'] = elbIp;
        return this;
    }
    public set elbIp(elbIp: string  | undefined) {
        this['elb_ip'] = elbIp;
    }
    public get elbIp(): string | undefined {
        return this['elb_ip'];
    }
    public withMode(mode: CheckClusterPortResponseModeEnum | string): CheckClusterPortResponse {
        this['mode'] = mode;
        return this;
    }
    public withListenerPort(listenerPort: number): CheckClusterPortResponse {
        this['listener_port'] = listenerPort;
        return this;
    }
    public set listenerPort(listenerPort: number  | undefined) {
        this['listener_port'] = listenerPort;
    }
    public get listenerPort(): number | undefined {
        return this['listener_port'];
    }
    public withListenerId(listenerId: string): CheckClusterPortResponse {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withServerGroupPort(serverGroupPort: number): CheckClusterPortResponse {
        this['server_group_port'] = serverGroupPort;
        return this;
    }
    public set serverGroupPort(serverGroupPort: number  | undefined) {
        this['server_group_port'] = serverGroupPort;
    }
    public get serverGroupPort(): number | undefined {
        return this['server_group_port'];
    }
    public withServerGroupId(serverGroupId: string): CheckClusterPortResponse {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withProjectId(projectId: string): CheckClusterPortResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withValidateTime(validateTime: string): CheckClusterPortResponse {
        this['validate_time'] = validateTime;
        return this;
    }
    public set validateTime(validateTime: string  | undefined) {
        this['validate_time'] = validateTime;
    }
    public get validateTime(): string | undefined {
        return this['validate_time'];
    }
    public withWrong(wrong: boolean): CheckClusterPortResponse {
        this['wrong'] = wrong;
        return this;
    }
    public withWrongMsg(wrongMsg: string): CheckClusterPortResponse {
        this['wrong_msg'] = wrongMsg;
        return this;
    }
    public set wrongMsg(wrongMsg: string  | undefined) {
        this['wrong_msg'] = wrongMsg;
    }
    public get wrongMsg(): string | undefined {
        return this['wrong_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckClusterPortResponseModeEnum {
    TUNNEL_FIXED = 'TUNNEL_FIXED',
    TUNNEL = 'TUNNEL',
    PROXY = 'PROXY'
}
