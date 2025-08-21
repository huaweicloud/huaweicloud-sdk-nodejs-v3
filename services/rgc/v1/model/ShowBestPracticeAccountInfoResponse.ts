
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBestPracticeAccountInfoResponse extends SdkResponse {
    private 'account_type'?: string;
    private 'effective_start_time'?: Date;
    private 'effective_expiration_time'?: Date;
    private 'current_time'?: Date;
    public constructor() { 
        super();
    }
    public withAccountType(accountType: string): ShowBestPracticeAccountInfoResponse {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): string | undefined {
        return this['account_type'];
    }
    public withEffectiveStartTime(effectiveStartTime: Date): ShowBestPracticeAccountInfoResponse {
        this['effective_start_time'] = effectiveStartTime;
        return this;
    }
    public set effectiveStartTime(effectiveStartTime: Date  | undefined) {
        this['effective_start_time'] = effectiveStartTime;
    }
    public get effectiveStartTime(): Date | undefined {
        return this['effective_start_time'];
    }
    public withEffectiveExpirationTime(effectiveExpirationTime: Date): ShowBestPracticeAccountInfoResponse {
        this['effective_expiration_time'] = effectiveExpirationTime;
        return this;
    }
    public set effectiveExpirationTime(effectiveExpirationTime: Date  | undefined) {
        this['effective_expiration_time'] = effectiveExpirationTime;
    }
    public get effectiveExpirationTime(): Date | undefined {
        return this['effective_expiration_time'];
    }
    public withCurrentTime(currentTime: Date): ShowBestPracticeAccountInfoResponse {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: Date  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): Date | undefined {
        return this['current_time'];
    }
}