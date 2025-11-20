import { Page } from './Page';
import { ServerCertificateDTO } from './ServerCertificateDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerCertificateResponse extends SdkResponse {
    private 'server_certificates'?: Array<ServerCertificateDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withServerCertificates(serverCertificates: Array<ServerCertificateDTO>): ListServerCertificateResponse {
        this['server_certificates'] = serverCertificates;
        return this;
    }
    public set serverCertificates(serverCertificates: Array<ServerCertificateDTO>  | undefined) {
        this['server_certificates'] = serverCertificates;
    }
    public get serverCertificates(): Array<ServerCertificateDTO> | undefined {
        return this['server_certificates'];
    }
    public withPage(page: Page): ListServerCertificateResponse {
        this['page'] = page;
        return this;
    }
}