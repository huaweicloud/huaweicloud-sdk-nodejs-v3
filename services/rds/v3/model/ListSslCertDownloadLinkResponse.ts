import { DownloadInfoRsp } from './DownloadInfoRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSslCertDownloadLinkResponse extends SdkResponse {
    private 'cert_info_list'?: Array<DownloadInfoRsp>;
    public constructor() { 
        super();
    }
    public withCertInfoList(certInfoList: Array<DownloadInfoRsp>): ListSslCertDownloadLinkResponse {
        this['cert_info_list'] = certInfoList;
        return this;
    }
    public set certInfoList(certInfoList: Array<DownloadInfoRsp>  | undefined) {
        this['cert_info_list'] = certInfoList;
    }
    public get certInfoList(): Array<DownloadInfoRsp> | undefined {
        return this['cert_info_list'];
    }
}