import { AsymmetricSignatureWithDomainId } from './AsymmetricSignatureWithDomainId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAsymmetricSignatureSwitchV5Response extends SdkResponse {
    private 'asymmetric_signature'?: AsymmetricSignatureWithDomainId;
    public constructor() { 
        super();
    }
    public withAsymmetricSignature(asymmetricSignature: AsymmetricSignatureWithDomainId): GetAsymmetricSignatureSwitchV5Response {
        this['asymmetric_signature'] = asymmetricSignature;
        return this;
    }
    public set asymmetricSignature(asymmetricSignature: AsymmetricSignatureWithDomainId  | undefined) {
        this['asymmetric_signature'] = asymmetricSignature;
    }
    public get asymmetricSignature(): AsymmetricSignatureWithDomainId | undefined {
        return this['asymmetric_signature'];
    }
}