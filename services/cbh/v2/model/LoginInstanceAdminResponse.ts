
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LoginInstanceAdminResponse extends SdkResponse {
    private 'admin_url'?: string;
    public constructor() { 
        super();
    }
    public withAdminUrl(adminUrl: string): LoginInstanceAdminResponse {
        this['admin_url'] = adminUrl;
        return this;
    }
    public set adminUrl(adminUrl: string  | undefined) {
        this['admin_url'] = adminUrl;
    }
    public get adminUrl(): string | undefined {
        return this['admin_url'];
    }
}