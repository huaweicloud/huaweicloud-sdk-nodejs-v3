import { AppCodeBaseInfo } from './AppCodeBaseInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppCodesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'app_codes'?: Array<AppCodeBaseInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAppCodesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAppCodesV2Response {
        this['total'] = total;
        return this;
    }
    public withAppCodes(appCodes: Array<AppCodeBaseInfo>): ListAppCodesV2Response {
        this['app_codes'] = appCodes;
        return this;
    }
    public set appCodes(appCodes: Array<AppCodeBaseInfo>  | undefined) {
        this['app_codes'] = appCodes;
    }
    public get appCodes(): Array<AppCodeBaseInfo> | undefined {
        return this['app_codes'];
    }
}