import { AccessControlUrls } from './AccessControlUrls';


export class UrlAccessControlTaskRequestBody {
    private 'access_control_urls'?: AccessControlUrls;
    public constructor(accessControlUrls?: AccessControlUrls) { 
        this['access_control_urls'] = accessControlUrls;
    }
    public withAccessControlUrls(accessControlUrls: AccessControlUrls): UrlAccessControlTaskRequestBody {
        this['access_control_urls'] = accessControlUrls;
        return this;
    }
    public set accessControlUrls(accessControlUrls: AccessControlUrls  | undefined) {
        this['access_control_urls'] = accessControlUrls;
    }
    public get accessControlUrls(): AccessControlUrls | undefined {
        return this['access_control_urls'];
    }
}