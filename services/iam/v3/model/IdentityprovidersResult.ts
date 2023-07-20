import { IdentityprovidersLinks } from './IdentityprovidersLinks';


export class IdentityprovidersResult {
    private 'sso_type'?: string;
    public id?: string;
    public description?: string;
    public enabled?: boolean;
    private 'remote_ids'?: Array<string>;
    public links?: IdentityprovidersLinks;
    public constructor(ssoType?: string, id?: string, description?: string, enabled?: boolean, remoteIds?: Array<string>, links?: IdentityprovidersLinks) { 
        this['sso_type'] = ssoType;
        this['id'] = id;
        this['description'] = description;
        this['enabled'] = enabled;
        this['remote_ids'] = remoteIds;
        this['links'] = links;
    }
    public withSsoType(ssoType: string): IdentityprovidersResult {
        this['sso_type'] = ssoType;
        return this;
    }
    public set ssoType(ssoType: string  | undefined) {
        this['sso_type'] = ssoType;
    }
    public get ssoType(): string | undefined {
        return this['sso_type'];
    }
    public withId(id: string): IdentityprovidersResult {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): IdentityprovidersResult {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): IdentityprovidersResult {
        this['enabled'] = enabled;
        return this;
    }
    public withRemoteIds(remoteIds: Array<string>): IdentityprovidersResult {
        this['remote_ids'] = remoteIds;
        return this;
    }
    public set remoteIds(remoteIds: Array<string>  | undefined) {
        this['remote_ids'] = remoteIds;
    }
    public get remoteIds(): Array<string> | undefined {
        return this['remote_ids'];
    }
    public withLinks(links: IdentityprovidersLinks): IdentityprovidersResult {
        this['links'] = links;
        return this;
    }
}