import { ObsBuckets } from './ObsBuckets';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificateAuthorityObsBucketResponse extends SdkResponse {
    public total?: number;
    private 'obs_buckets'?: Array<ObsBuckets>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCertificateAuthorityObsBucketResponse {
        this['total'] = total;
        return this;
    }
    public withObsBuckets(obsBuckets: Array<ObsBuckets>): ListCertificateAuthorityObsBucketResponse {
        this['obs_buckets'] = obsBuckets;
        return this;
    }
    public set obsBuckets(obsBuckets: Array<ObsBuckets>  | undefined) {
        this['obs_buckets'] = obsBuckets;
    }
    public get obsBuckets(): Array<ObsBuckets> | undefined {
        return this['obs_buckets'];
    }
}