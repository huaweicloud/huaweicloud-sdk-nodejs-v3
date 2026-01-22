import { HcClient } from '@huaweicloud/huaweicloud-sdk-core/HcClient';
import { IHttpRequest } from '@huaweicloud/huaweicloud-sdk-core/http/IHttpRequest';
import { ICredential } from '@huaweicloud/huaweicloud-sdk-core/auth/ICredential';

export class IdentityCenterSCIMCredentials implements ICredential {
  public async processAuthRequest(hcClient: HcClient, httpRequest: IHttpRequest): Promise<IHttpRequest> {
    return Object.assign(httpRequest);
  }

  public async processAuthParams(hcClient: HcClient, region: string): Promise<ICredential> {
    return this;
  }
}
