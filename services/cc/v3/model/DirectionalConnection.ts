import { GcbLocalSiteCode } from './GcbLocalSiteCode';
import { GcbRemoteSiteCode } from './GcbRemoteSiteCode';
import { NonRequiredName } from './NonRequiredName';
import { UUID64Identifier } from './UUID64Identifier';


export class DirectionalConnection {
    public name?: string;
    public id?: string;
    private 'local_site_code'?: string;
    private 'remote_site_code'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withName(name: string): DirectionalConnection {
        this['name'] = name;
        return this;
    }
    public withId(id: string): DirectionalConnection {
        this['id'] = id;
        return this;
    }
    public withLocalSiteCode(localSiteCode: string): DirectionalConnection {
        this['local_site_code'] = localSiteCode;
        return this;
    }
    public set localSiteCode(localSiteCode: string  | undefined) {
        this['local_site_code'] = localSiteCode;
    }
    public get localSiteCode(): string | undefined {
        return this['local_site_code'];
    }
    public withRemoteSiteCode(remoteSiteCode: string): DirectionalConnection {
        this['remote_site_code'] = remoteSiteCode;
        return this;
    }
    public set remoteSiteCode(remoteSiteCode: string  | undefined) {
        this['remote_site_code'] = remoteSiteCode;
    }
    public get remoteSiteCode(): string | undefined {
        return this['remote_site_code'];
    }
}