import { IpInfo } from './IpInfo';
import { ListenerRef } from './ListenerRef';


export class IpGroup {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'ip_list'?: Array<IpInfo>;
    public listeners?: Array<ListenerRef>;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(id?: string, name?: string, description?: string, ipList?: Array<IpInfo>, listeners?: Array<ListenerRef>, projectId?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['ip_list'] = ipList;
        this['listeners'] = listeners;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): IpGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IpGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): IpGroup {
        this['description'] = description;
        return this;
    }
    public withIpList(ipList: Array<IpInfo>): IpGroup {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
    public withListeners(listeners: Array<ListenerRef>): IpGroup {
        this['listeners'] = listeners;
        return this;
    }
    public withProjectId(projectId: string): IpGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): IpGroup {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: string): IpGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): IpGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}