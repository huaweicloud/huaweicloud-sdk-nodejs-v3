import { CVEAllowlistItem } from './CVEAllowlistItem';


export class UpdateCVEAllowlistRequest {
    public id?: number;
    private 'namespace_id'?: number;
    private 'expires_at'?: number;
    public items?: Array<CVEAllowlistItem>;
    public constructor() { 
    }
    public withId(id: number): UpdateCVEAllowlistRequest {
        this['id'] = id;
        return this;
    }
    public withNamespaceId(namespaceId: number): UpdateCVEAllowlistRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withExpiresAt(expiresAt: number): UpdateCVEAllowlistRequest {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: number  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): number | undefined {
        return this['expires_at'];
    }
    public withItems(items: Array<CVEAllowlistItem>): UpdateCVEAllowlistRequest {
        this['items'] = items;
        return this;
    }
}