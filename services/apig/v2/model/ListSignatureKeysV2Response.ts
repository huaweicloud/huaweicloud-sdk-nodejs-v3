import { BasePage } from './BasePage';
import { SignatureWithBindNum } from './SignatureWithBindNum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSignatureKeysV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public signs?: Array<SignatureWithBindNum>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListSignatureKeysV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListSignatureKeysV2Response {
        this['total'] = total;
        return this;
    }
    public withSigns(signs: Array<SignatureWithBindNum>): ListSignatureKeysV2Response {
        this['signs'] = signs;
        return this;
    }
}