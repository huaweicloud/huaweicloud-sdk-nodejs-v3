import { EsListenerResponse } from './EsListenerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEsListenerResponse extends SdkResponse {
    public listener?: EsListenerResponse;
    public constructor() { 
        super();
    }
    public withListener(listener: EsListenerResponse): UpdateEsListenerResponse {
        this['listener'] = listener;
        return this;
    }
}