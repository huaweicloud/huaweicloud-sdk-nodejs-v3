import { OsVersionInfo } from './OsVersionInfo';


export class ListOsVersionsResponseBody {
    public platform?: string;
    private 'version_list'?: Array<OsVersionInfo>;
    public constructor(platform?: string, versionList?: Array<OsVersionInfo>) { 
        this['platform'] = platform;
        this['version_list'] = versionList;
    }
    public withPlatform(platform: string): ListOsVersionsResponseBody {
        this['platform'] = platform;
        return this;
    }
    public withVersionList(versionList: Array<OsVersionInfo>): ListOsVersionsResponseBody {
        this['version_list'] = versionList;
        return this;
    }
    public set versionList(versionList: Array<OsVersionInfo>  | undefined) {
        this['version_list'] = versionList;
    }
    public get versionList(): Array<OsVersionInfo> | undefined {
        return this['version_list'];
    }
}