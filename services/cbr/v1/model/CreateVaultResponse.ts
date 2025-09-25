import { CbcOrderResult } from './CbcOrderResult';
import { VaultCreateResource } from './VaultCreateResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVaultResponse extends SdkResponse {
    public vault?: VaultCreateResource;
    public orders?: Array<CbcOrderResult>;
    public retCode?: number;
    public errText?: string;
    private 'error_code'?: string;
    public constructor() { 
        super();
    }
    public withVault(vault: VaultCreateResource): CreateVaultResponse {
        this['vault'] = vault;
        return this;
    }
    public withOrders(orders: Array<CbcOrderResult>): CreateVaultResponse {
        this['orders'] = orders;
        return this;
    }
    public withRetCode(retCode: number): CreateVaultResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withErrText(errText: string): CreateVaultResponse {
        this['errText'] = errText;
        return this;
    }
    public withErrorCode(errorCode: string): CreateVaultResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}