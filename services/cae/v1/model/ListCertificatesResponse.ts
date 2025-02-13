import { ApiVersionObj } from './ApiVersionObj';
import { CertItem } from './CertItem';
import { CertificateKindObj } from './CertificateKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: CertificateKindObj;
    public items?: Array<CertItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListCertificatesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: CertificateKindObj): ListCertificatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<CertItem>): ListCertificatesResponse {
        this['items'] = items;
        return this;
    }
}