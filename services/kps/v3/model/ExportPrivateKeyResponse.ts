import { ExportPrivateKeyKeypairBean } from './ExportPrivateKeyKeypairBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportPrivateKeyResponse extends SdkResponse {
    public keypair?: ExportPrivateKeyKeypairBean;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: ExportPrivateKeyKeypairBean): ExportPrivateKeyResponse {
        this['keypair'] = keypair;
        return this;
    }
}