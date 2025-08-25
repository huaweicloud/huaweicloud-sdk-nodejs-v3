import { AppResourceInfo } from './AppResourceInfo';
import { CcspServiceInfo } from './CcspServiceInfo';
import { CloudServiceInfo } from './CloudServiceInfo';
import { KmsResourceInfo } from './KmsResourceInfo';
import { VsmResourceInfo } from './VsmResourceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceInfoResponse extends SdkResponse {
    private 'cloud_service'?: CloudServiceInfo;
    private 'ccsp_service'?: CcspServiceInfo;
    public vsm?: VsmResourceInfo;
    public app?: AppResourceInfo;
    public kms?: KmsResourceInfo;
    public constructor() { 
        super();
    }
    public withCloudService(cloudService: CloudServiceInfo): ShowResourceInfoResponse {
        this['cloud_service'] = cloudService;
        return this;
    }
    public set cloudService(cloudService: CloudServiceInfo  | undefined) {
        this['cloud_service'] = cloudService;
    }
    public get cloudService(): CloudServiceInfo | undefined {
        return this['cloud_service'];
    }
    public withCcspService(ccspService: CcspServiceInfo): ShowResourceInfoResponse {
        this['ccsp_service'] = ccspService;
        return this;
    }
    public set ccspService(ccspService: CcspServiceInfo  | undefined) {
        this['ccsp_service'] = ccspService;
    }
    public get ccspService(): CcspServiceInfo | undefined {
        return this['ccsp_service'];
    }
    public withVsm(vsm: VsmResourceInfo): ShowResourceInfoResponse {
        this['vsm'] = vsm;
        return this;
    }
    public withApp(app: AppResourceInfo): ShowResourceInfoResponse {
        this['app'] = app;
        return this;
    }
    public withKms(kms: KmsResourceInfo): ShowResourceInfoResponse {
        this['kms'] = kms;
        return this;
    }
}