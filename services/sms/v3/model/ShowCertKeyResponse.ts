
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertKeyResponse extends SdkResponse {
    public cert?: string;
    private 'private_key'?: string;
    public ca?: string;
    private 'target_mgmt_cert'?: string;
    private 'target_mgmt_private_key'?: string;
    private 'target_data_cert'?: string;
    private 'target_data_private_key'?: string;
    public constructor() { 
        super();
    }
    public withCert(cert: string): ShowCertKeyResponse {
        this['cert'] = cert;
        return this;
    }
    public withPrivateKey(privateKey: string): ShowCertKeyResponse {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCa(ca: string): ShowCertKeyResponse {
        this['ca'] = ca;
        return this;
    }
    public withTargetMgmtCert(targetMgmtCert: string): ShowCertKeyResponse {
        this['target_mgmt_cert'] = targetMgmtCert;
        return this;
    }
    public set targetMgmtCert(targetMgmtCert: string  | undefined) {
        this['target_mgmt_cert'] = targetMgmtCert;
    }
    public get targetMgmtCert(): string | undefined {
        return this['target_mgmt_cert'];
    }
    public withTargetMgmtPrivateKey(targetMgmtPrivateKey: string): ShowCertKeyResponse {
        this['target_mgmt_private_key'] = targetMgmtPrivateKey;
        return this;
    }
    public set targetMgmtPrivateKey(targetMgmtPrivateKey: string  | undefined) {
        this['target_mgmt_private_key'] = targetMgmtPrivateKey;
    }
    public get targetMgmtPrivateKey(): string | undefined {
        return this['target_mgmt_private_key'];
    }
    public withTargetDataCert(targetDataCert: string): ShowCertKeyResponse {
        this['target_data_cert'] = targetDataCert;
        return this;
    }
    public set targetDataCert(targetDataCert: string  | undefined) {
        this['target_data_cert'] = targetDataCert;
    }
    public get targetDataCert(): string | undefined {
        return this['target_data_cert'];
    }
    public withTargetDataPrivateKey(targetDataPrivateKey: string): ShowCertKeyResponse {
        this['target_data_private_key'] = targetDataPrivateKey;
        return this;
    }
    public set targetDataPrivateKey(targetDataPrivateKey: string  | undefined) {
        this['target_data_private_key'] = targetDataPrivateKey;
    }
    public get targetDataPrivateKey(): string | undefined {
        return this['target_data_private_key'];
    }
}