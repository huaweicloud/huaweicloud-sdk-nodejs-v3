import { RemoteInfosResult } from './RemoteInfosResult';


export class Connection {
    private 'fixed_ips'?: Array<string>;
    public id?: string;
    private 'instance_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'remote_infos'?: Array<RemoteInfosResult>;
    public status?: string;
    private 'virsubnet_id'?: string;
    private 'vpc_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(fixedIps?: Array<string>, id?: string, instanceId?: string, name?: string, projectId?: string, remoteInfos?: Array<RemoteInfosResult>, status?: string, virsubnetId?: string, vpcId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['fixed_ips'] = fixedIps;
        this['id'] = id;
        this['instance_id'] = instanceId;
        this['name'] = name;
        this['project_id'] = projectId;
        this['remote_infos'] = remoteInfos;
        this['status'] = status;
        this['virsubnet_id'] = virsubnetId;
        this['vpc_id'] = vpcId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withFixedIps(fixedIps: Array<string>): Connection {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<string>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<string> | undefined {
        return this['fixed_ips'];
    }
    public withId(id: string): Connection {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): Connection {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): Connection {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Connection {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRemoteInfos(remoteInfos: Array<RemoteInfosResult>): Connection {
        this['remote_infos'] = remoteInfos;
        return this;
    }
    public set remoteInfos(remoteInfos: Array<RemoteInfosResult>  | undefined) {
        this['remote_infos'] = remoteInfos;
    }
    public get remoteInfos(): Array<RemoteInfosResult> | undefined {
        return this['remote_infos'];
    }
    public withStatus(status: string): Connection {
        this['status'] = status;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): Connection {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVpcId(vpcId: string): Connection {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreatedAt(createdAt: Date): Connection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Connection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}