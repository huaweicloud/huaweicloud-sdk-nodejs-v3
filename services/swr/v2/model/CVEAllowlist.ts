import { CVEAllowlistItem } from './CVEAllowlistItem';


export class CVEAllowlist {
    public id?: number;
    private 'namespace_id'?: number;
    private 'expires_at'?: number;
    public items?: Array<CVEAllowlistItem>;
    private 'creation_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: number): CVEAllowlist {
        this['id'] = id;
        return this;
    }
    public withNamespaceId(namespaceId: number): CVEAllowlist {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withExpiresAt(expiresAt: number): CVEAllowlist {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: number  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): number | undefined {
        return this['expires_at'];
    }
    public withItems(items: Array<CVEAllowlistItem>): CVEAllowlist {
        this['items'] = items;
        return this;
    }
    public withCreationTime(creationTime: string): CVEAllowlist {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withUpdateTime(updateTime: string): CVEAllowlist {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}