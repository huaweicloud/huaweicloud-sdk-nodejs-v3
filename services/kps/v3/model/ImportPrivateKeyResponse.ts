import { ImportPrivateKeyAction } from './ImportPrivateKeyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportPrivateKeyResponse extends SdkResponse {
    public keypair?: ImportPrivateKeyAction;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: ImportPrivateKeyAction): ImportPrivateKeyResponse {
        this['keypair'] = keypair;
        return this;
    }
}