
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCertificateAuthorityResponse extends SdkResponse {
    private 'ca_id'?: string;
    public constructor() { 
        super();
    }
    public withCaId(caId: string): CreateCertificateAuthorityResponse {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
}