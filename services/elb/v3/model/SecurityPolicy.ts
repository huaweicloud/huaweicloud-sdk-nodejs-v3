import { ListenerRef } from './ListenerRef';


export class SecurityPolicy {
    public id: string;
    private 'project_id': string | undefined;
    public name: string;
    public description: string;
    public listeners: Array<ListenerRef>;
    public protocols: Array<string>;
    public ciphers: Array<string>;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    public constructor(id?: any, projectId?: any, name?: any, description?: any, listeners?: any, protocols?: any, ciphers?: any, createdAt?: any, updatedAt?: any) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['name'] = name;
        this['description'] = description;
        this['listeners'] = listeners;
        this['protocols'] = protocols;
        this['ciphers'] = ciphers;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): SecurityPolicy {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): SecurityPolicy {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withName(name: string): SecurityPolicy {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SecurityPolicy {
        this['description'] = description;
        return this;
    }
    public withListeners(listeners: Array<ListenerRef>): SecurityPolicy {
        this['listeners'] = listeners;
        return this;
    }
    public withProtocols(protocols: Array<string>): SecurityPolicy {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: Array<string>): SecurityPolicy {
        this['ciphers'] = ciphers;
        return this;
    }
    public withCreatedAt(createdAt: string): SecurityPolicy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SecurityPolicy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}