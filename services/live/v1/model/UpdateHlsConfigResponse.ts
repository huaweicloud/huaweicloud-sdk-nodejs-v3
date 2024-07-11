import { PushDomainApplication } from './PushDomainApplication';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHlsConfigResponse extends SdkResponse {
    private 'push_domain'?: string;
    public application?: Array<PushDomainApplication>;
    public constructor() { 
        super();
    }
    public withPushDomain(pushDomain: string): UpdateHlsConfigResponse {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string  | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain(): string | undefined {
        return this['push_domain'];
    }
    public withApplication(application: Array<PushDomainApplication>): UpdateHlsConfigResponse {
        this['application'] = application;
        return this;
    }
}