import { RespAddr } from './RespAddr';
import { RespFlavor } from './RespFlavor';
import { RespImage } from './RespImage';
import { RespMetadata } from './RespMetadata';


export class RespServer {
    public addresses?: { [key: string]: Array<RespAddr>; };
    public created?: string;
    public flavor?: RespFlavor;
    public id?: string;
    public name?: string;
    public status?: string;
    private 'tenant_id'?: string;
    public updated?: string;
    private 'user_id'?: string;
    private 'task_state'?: string;
    public image?: RespImage;
    public metadata?: RespMetadata;
    public constructor(addresses?: { [key: string]: Array<RespAddr>; }, created?: string, flavor?: RespFlavor, id?: string, name?: string, status?: string, tenantId?: string, updated?: string, userId?: string, taskState?: string, image?: RespImage, metadata?: RespMetadata) { 
        this['addresses'] = addresses;
        this['created'] = created;
        this['flavor'] = flavor;
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['updated'] = updated;
        this['user_id'] = userId;
        this['task_state'] = taskState;
        this['image'] = image;
        this['metadata'] = metadata;
    }
    public withAddresses(addresses: { [key: string]: Array<RespAddr>; }): RespServer {
        this['addresses'] = addresses;
        return this;
    }
    public withCreated(created: string): RespServer {
        this['created'] = created;
        return this;
    }
    public withFlavor(flavor: RespFlavor): RespServer {
        this['flavor'] = flavor;
        return this;
    }
    public withId(id: string): RespServer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RespServer {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): RespServer {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): RespServer {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withUpdated(updated: string): RespServer {
        this['updated'] = updated;
        return this;
    }
    public withUserId(userId: string): RespServer {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withTaskState(taskState: string): RespServer {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: string  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): string | undefined {
        return this['task_state'];
    }
    public withImage(image: RespImage): RespServer {
        this['image'] = image;
        return this;
    }
    public withMetadata(metadata: RespMetadata): RespServer {
        this['metadata'] = metadata;
        return this;
    }
}