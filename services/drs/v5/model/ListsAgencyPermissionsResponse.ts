
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListsAgencyPermissionsResponse extends SdkResponse {
    private 'common_permissions'?: Array<string>;
    private 'engine_permissions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withCommonPermissions(commonPermissions: Array<string>): ListsAgencyPermissionsResponse {
        this['common_permissions'] = commonPermissions;
        return this;
    }
    public set commonPermissions(commonPermissions: Array<string>  | undefined) {
        this['common_permissions'] = commonPermissions;
    }
    public get commonPermissions(): Array<string> | undefined {
        return this['common_permissions'];
    }
    public withEnginePermissions(enginePermissions: Array<string>): ListsAgencyPermissionsResponse {
        this['engine_permissions'] = enginePermissions;
        return this;
    }
    public set enginePermissions(enginePermissions: Array<string>  | undefined) {
        this['engine_permissions'] = enginePermissions;
    }
    public get enginePermissions(): Array<string> | undefined {
        return this['engine_permissions'];
    }
}