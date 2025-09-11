
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SignSpecialAgreementResponse extends SdkResponse {
    private 'agreement_type'?: string;
    private 'current_version'?: string;
    private 'signed_version'?: string;
    private 'signed_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAgreementType(agreementType: string): SignSpecialAgreementResponse {
        this['agreement_type'] = agreementType;
        return this;
    }
    public set agreementType(agreementType: string  | undefined) {
        this['agreement_type'] = agreementType;
    }
    public get agreementType(): string | undefined {
        return this['agreement_type'];
    }
    public withCurrentVersion(currentVersion: string): SignSpecialAgreementResponse {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withSignedVersion(signedVersion: string): SignSpecialAgreementResponse {
        this['signed_version'] = signedVersion;
        return this;
    }
    public set signedVersion(signedVersion: string  | undefined) {
        this['signed_version'] = signedVersion;
    }
    public get signedVersion(): string | undefined {
        return this['signed_version'];
    }
    public withSignedTime(signedTime: string): SignSpecialAgreementResponse {
        this['signed_time'] = signedTime;
        return this;
    }
    public set signedTime(signedTime: string  | undefined) {
        this['signed_time'] = signedTime;
    }
    public get signedTime(): string | undefined {
        return this['signed_time'];
    }
    public withXRequestId(xRequestId: string): SignSpecialAgreementResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}