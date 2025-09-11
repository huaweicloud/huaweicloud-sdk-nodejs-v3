
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SignAgreementResponse extends SdkResponse {
    private 'current_version'?: string;
    private 'need_to_sign'?: boolean;
    private 'signed_version'?: string;
    private 'signed_time'?: string;
    private 'resign_deadline'?: string;
    private 'resign_expire_process_mode'?: SignAgreementResponseResignExpireProcessModeEnum | string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCurrentVersion(currentVersion: string): SignAgreementResponse {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withNeedToSign(needToSign: boolean): SignAgreementResponse {
        this['need_to_sign'] = needToSign;
        return this;
    }
    public set needToSign(needToSign: boolean  | undefined) {
        this['need_to_sign'] = needToSign;
    }
    public get needToSign(): boolean | undefined {
        return this['need_to_sign'];
    }
    public withSignedVersion(signedVersion: string): SignAgreementResponse {
        this['signed_version'] = signedVersion;
        return this;
    }
    public set signedVersion(signedVersion: string  | undefined) {
        this['signed_version'] = signedVersion;
    }
    public get signedVersion(): string | undefined {
        return this['signed_version'];
    }
    public withSignedTime(signedTime: string): SignAgreementResponse {
        this['signed_time'] = signedTime;
        return this;
    }
    public set signedTime(signedTime: string  | undefined) {
        this['signed_time'] = signedTime;
    }
    public get signedTime(): string | undefined {
        return this['signed_time'];
    }
    public withResignDeadline(resignDeadline: string): SignAgreementResponse {
        this['resign_deadline'] = resignDeadline;
        return this;
    }
    public set resignDeadline(resignDeadline: string  | undefined) {
        this['resign_deadline'] = resignDeadline;
    }
    public get resignDeadline(): string | undefined {
        return this['resign_deadline'];
    }
    public withResignExpireProcessMode(resignExpireProcessMode: SignAgreementResponseResignExpireProcessModeEnum | string): SignAgreementResponse {
        this['resign_expire_process_mode'] = resignExpireProcessMode;
        return this;
    }
    public set resignExpireProcessMode(resignExpireProcessMode: SignAgreementResponseResignExpireProcessModeEnum | string  | undefined) {
        this['resign_expire_process_mode'] = resignExpireProcessMode;
    }
    public get resignExpireProcessMode(): SignAgreementResponseResignExpireProcessModeEnum | string | undefined {
        return this['resign_expire_process_mode'];
    }
    public withXRequestId(xRequestId: string): SignAgreementResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum SignAgreementResponseResignExpireProcessModeEnum {
    EXPIRE_AUTO_AGREE = 'EXPIRE_AUTO_AGREE',
    EXPIRE_STOP_SERVICE = 'EXPIRE_STOP_SERVICE'
}
