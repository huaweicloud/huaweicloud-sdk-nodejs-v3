
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBlockStatisticsResponse extends SdkResponse {
    private 'total_unblocking_times'?: number;
    private 'manual_unblocking_times'?: number;
    private 'automatic_unblocking_times'?: number;
    private 'current_blocked_ip_numbers'?: number;
    public constructor() { 
        super();
    }
    public withTotalUnblockingTimes(totalUnblockingTimes: number): ShowBlockStatisticsResponse {
        this['total_unblocking_times'] = totalUnblockingTimes;
        return this;
    }
    public set totalUnblockingTimes(totalUnblockingTimes: number  | undefined) {
        this['total_unblocking_times'] = totalUnblockingTimes;
    }
    public get totalUnblockingTimes(): number | undefined {
        return this['total_unblocking_times'];
    }
    public withManualUnblockingTimes(manualUnblockingTimes: number): ShowBlockStatisticsResponse {
        this['manual_unblocking_times'] = manualUnblockingTimes;
        return this;
    }
    public set manualUnblockingTimes(manualUnblockingTimes: number  | undefined) {
        this['manual_unblocking_times'] = manualUnblockingTimes;
    }
    public get manualUnblockingTimes(): number | undefined {
        return this['manual_unblocking_times'];
    }
    public withAutomaticUnblockingTimes(automaticUnblockingTimes: number): ShowBlockStatisticsResponse {
        this['automatic_unblocking_times'] = automaticUnblockingTimes;
        return this;
    }
    public set automaticUnblockingTimes(automaticUnblockingTimes: number  | undefined) {
        this['automatic_unblocking_times'] = automaticUnblockingTimes;
    }
    public get automaticUnblockingTimes(): number | undefined {
        return this['automatic_unblocking_times'];
    }
    public withCurrentBlockedIpNumbers(currentBlockedIpNumbers: number): ShowBlockStatisticsResponse {
        this['current_blocked_ip_numbers'] = currentBlockedIpNumbers;
        return this;
    }
    public set currentBlockedIpNumbers(currentBlockedIpNumbers: number  | undefined) {
        this['current_blocked_ip_numbers'] = currentBlockedIpNumbers;
    }
    public get currentBlockedIpNumbers(): number | undefined {
        return this['current_blocked_ip_numbers'];
    }
}