import { HcClient } from '@huaweicloud/huaweicloud-sdk-core/HcClient';
import { IHttpRequest } from '@huaweicloud/huaweicloud-sdk-core/http/IHttpRequest';
import { AKSKSigner, RequiredError } from '@huaweicloud/huaweicloud-sdk-core/auth/AKSKSigner';
import { HttpRequestBuilder } from '@huaweicloud/huaweicloud-sdk-core/http/IHttpRequestBuilder';
import { isJsonContentType, ICredential } from '@huaweicloud/huaweicloud-sdk-core/auth/ICredential';

export class SMSApiCredentials implements ICredential {
  ak?: string;
  sk?: string;

  constructor(data?: Partial<SMSApiCredentials>) {
    this.ak = data?.ak;
    this.sk = data?.sk;
  }

  public withAk(this:SMSApiCredentials, ak?: string): SMSApiCredentials {
    this.ak = ak;
    return this;
  }

  public withSk(this:SMSApiCredentials, sk?: string): SMSApiCredentials {
    this.sk = sk;
    return this;
  }

  public getAk(): string | undefined {
    return this.ak;
  }

  public getSk(): string | undefined {
    return this.sk;
  }

  public async processAuthRequest(httpRequest: IHttpRequest): Promise<IHttpRequest> {
    if (!this.ak) {
      throw new RequiredError('AK cannot be empty or undefined.');
    }

    if (!this.sk) {
      throw new RequiredError('SK cannot be empty or undefined.');
    }

    const builder = new HttpRequestBuilder();

    // 替换所有的path参数
    let url = httpRequest.url;
    builder.withEndpoint(`${httpRequest.endpoint}${url}`);

    if (!isJsonContentType(httpRequest.headers)) {
      builder.addHeaders('X-Sdk-Content-Sha256', 'UNSIGNED-PAYLOAD');
    }

    builder.addAllHeaders(httpRequest.headers);
    Object.assign(httpRequest, builder.build());

    const headers = AKSKSigner.sign(httpRequest, this);

    builder.addAllHeaders(headers);

    return Object.assign(httpRequest, builder.build());
  }

  public async processAuthParams(hcClient: HcClient, region: string): Promise<ICredential> {
    return this;
  }
}
