
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryTaskOverviewResponse extends SdkResponse {
    private 'fail_count'?: number;
    private 'force_success_count'?: number;
    private 'freeze_count'?: number;
    private 'ignore_success_count'?: number;
    private 'manual_stop_count'?: number;
    private 'pause_count'?: number;
    private 'running_count'?: number;
    private 'running_exception_count'?: number;
    private 'skip_count'?: number;
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'waiting_confirm_count'?: number;
    private 'waiting_count'?: number;
    public constructor() { 
        super();
    }
    public withFailCount(failCount: number): ListFactoryTaskOverviewResponse {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: number  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): number | undefined {
        return this['fail_count'];
    }
    public withForceSuccessCount(forceSuccessCount: number): ListFactoryTaskOverviewResponse {
        this['force_success_count'] = forceSuccessCount;
        return this;
    }
    public set forceSuccessCount(forceSuccessCount: number  | undefined) {
        this['force_success_count'] = forceSuccessCount;
    }
    public get forceSuccessCount(): number | undefined {
        return this['force_success_count'];
    }
    public withFreezeCount(freezeCount: number): ListFactoryTaskOverviewResponse {
        this['freeze_count'] = freezeCount;
        return this;
    }
    public set freezeCount(freezeCount: number  | undefined) {
        this['freeze_count'] = freezeCount;
    }
    public get freezeCount(): number | undefined {
        return this['freeze_count'];
    }
    public withIgnoreSuccessCount(ignoreSuccessCount: number): ListFactoryTaskOverviewResponse {
        this['ignore_success_count'] = ignoreSuccessCount;
        return this;
    }
    public set ignoreSuccessCount(ignoreSuccessCount: number  | undefined) {
        this['ignore_success_count'] = ignoreSuccessCount;
    }
    public get ignoreSuccessCount(): number | undefined {
        return this['ignore_success_count'];
    }
    public withManualStopCount(manualStopCount: number): ListFactoryTaskOverviewResponse {
        this['manual_stop_count'] = manualStopCount;
        return this;
    }
    public set manualStopCount(manualStopCount: number  | undefined) {
        this['manual_stop_count'] = manualStopCount;
    }
    public get manualStopCount(): number | undefined {
        return this['manual_stop_count'];
    }
    public withPauseCount(pauseCount: number): ListFactoryTaskOverviewResponse {
        this['pause_count'] = pauseCount;
        return this;
    }
    public set pauseCount(pauseCount: number  | undefined) {
        this['pause_count'] = pauseCount;
    }
    public get pauseCount(): number | undefined {
        return this['pause_count'];
    }
    public withRunningCount(runningCount: number): ListFactoryTaskOverviewResponse {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: number  | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount(): number | undefined {
        return this['running_count'];
    }
    public withRunningExceptionCount(runningExceptionCount: number): ListFactoryTaskOverviewResponse {
        this['running_exception_count'] = runningExceptionCount;
        return this;
    }
    public set runningExceptionCount(runningExceptionCount: number  | undefined) {
        this['running_exception_count'] = runningExceptionCount;
    }
    public get runningExceptionCount(): number | undefined {
        return this['running_exception_count'];
    }
    public withSkipCount(skipCount: number): ListFactoryTaskOverviewResponse {
        this['skip_count'] = skipCount;
        return this;
    }
    public set skipCount(skipCount: number  | undefined) {
        this['skip_count'] = skipCount;
    }
    public get skipCount(): number | undefined {
        return this['skip_count'];
    }
    public withSuccessCount(successCount: number): ListFactoryTaskOverviewResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): ListFactoryTaskOverviewResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withWaitingConfirmCount(waitingConfirmCount: number): ListFactoryTaskOverviewResponse {
        this['waiting_confirm_count'] = waitingConfirmCount;
        return this;
    }
    public set waitingConfirmCount(waitingConfirmCount: number  | undefined) {
        this['waiting_confirm_count'] = waitingConfirmCount;
    }
    public get waitingConfirmCount(): number | undefined {
        return this['waiting_confirm_count'];
    }
    public withWaitingCount(waitingCount: number): ListFactoryTaskOverviewResponse {
        this['waiting_count'] = waitingCount;
        return this;
    }
    public set waitingCount(waitingCount: number  | undefined) {
        this['waiting_count'] = waitingCount;
    }
    public get waitingCount(): number | undefined {
        return this['waiting_count'];
    }
}