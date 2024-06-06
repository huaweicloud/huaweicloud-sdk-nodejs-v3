import { AccessPreview } from './AccessPreview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessPreviewResponse extends SdkResponse {
    private 'access_preview'?: AccessPreview;
    public constructor() { 
        super();
    }
    public withAccessPreview(accessPreview: AccessPreview): ShowAccessPreviewResponse {
        this['access_preview'] = accessPreview;
        return this;
    }
    public set accessPreview(accessPreview: AccessPreview  | undefined) {
        this['access_preview'] = accessPreview;
    }
    public get accessPreview(): AccessPreview | undefined {
        return this['access_preview'];
    }
}