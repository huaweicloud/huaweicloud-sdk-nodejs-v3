import { ServerJobInfo } from './ServerJobInfo';
import { ServerJobInfos } from './ServerJobInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchChangeServerImageResponse extends SdkResponse {
    public items?: Array<ServerJobInfo>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ServerJobInfo>): BatchChangeServerImageResponse {
        this['items'] = items;
        return this;
    }
}