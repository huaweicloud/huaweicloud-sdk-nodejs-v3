
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSslCertDownloadLinkResponse extends SdkResponse {
    private 'download_link'?: string;
    public constructor() { 
        super();
    }
    public withDownloadLink(downloadLink: string): ShowSslCertDownloadLinkResponse {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
}