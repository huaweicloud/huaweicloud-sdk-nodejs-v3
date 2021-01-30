import { IdentityprovidersLinks } from './IdentityprovidersLinks';


export class IdentityprovidersResult {
    public id: string;
    public description: string;
    public enabled: boolean;
    private 'remote_ids': Array<string> | undefined;
    public links: IdentityprovidersLinks;
    public constructor(id: any, description: any, enabled: any, remoteIds: any, links: any) { 
        this['id'] = id;
        this['description'] = description;
        this['enabled'] = enabled;
        this['remote_ids'] = remoteIds;
        this['links'] = links;
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
    public set remoteIds(remoteIds: Array<string> | undefined) {
        this['remote_ids'] = remoteIds;
    }
    public get remoteIds() {
        return this['remote_ids'];
    }
    public withLinks(links: IdentityprovidersLinks): IdentityprovidersResult {
        this['links'] = links;
        return this;
    }
}