import { OsVersionInfo } from './OsVersionInfo';


export class ListOsVersionsResponseBody {
    public platform: string;
    private 'version_list': Array<OsVersionInfo> | undefined;
    public constructor(platform?: any, versionList?: any) { 
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
    public set versionList(versionList: Array<OsVersionInfo> | undefined) {
        this['version_list'] = versionList;
    }
    public get versionList() {
        return this['version_list'];
    }
}