
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupsStatisticsResponse extends SdkResponse {
    private 'count_backedup_server'?: number;
    private 'count_restored_task'?: number;
    private 'count_used_capacity'?: number;
    private 'count_total_capacity'?: number;
    private 'vault_status'?: string;
    public constructor() { 
        super();
    }
    public withCountBackedupServer(countBackedupServer: number): ShowBackupsStatisticsResponse {
        this['count_backedup_server'] = countBackedupServer;
        return this;
    }
    public set countBackedupServer(countBackedupServer: number  | undefined) {
        this['count_backedup_server'] = countBackedupServer;
    }
    public get countBackedupServer(): number | undefined {
        return this['count_backedup_server'];
    }
    public withCountRestoredTask(countRestoredTask: number): ShowBackupsStatisticsResponse {
        this['count_restored_task'] = countRestoredTask;
        return this;
    }
    public set countRestoredTask(countRestoredTask: number  | undefined) {
        this['count_restored_task'] = countRestoredTask;
    }
    public get countRestoredTask(): number | undefined {
        return this['count_restored_task'];
    }
    public withCountUsedCapacity(countUsedCapacity: number): ShowBackupsStatisticsResponse {
        this['count_used_capacity'] = countUsedCapacity;
        return this;
    }
    public set countUsedCapacity(countUsedCapacity: number  | undefined) {
        this['count_used_capacity'] = countUsedCapacity;
    }
    public get countUsedCapacity(): number | undefined {
        return this['count_used_capacity'];
    }
    public withCountTotalCapacity(countTotalCapacity: number): ShowBackupsStatisticsResponse {
        this['count_total_capacity'] = countTotalCapacity;
        return this;
    }
    public set countTotalCapacity(countTotalCapacity: number  | undefined) {
        this['count_total_capacity'] = countTotalCapacity;
    }
    public get countTotalCapacity(): number | undefined {
        return this['count_total_capacity'];
    }
    public withVaultStatus(vaultStatus: string): ShowBackupsStatisticsResponse {
        this['vault_status'] = vaultStatus;
        return this;
    }
    public set vaultStatus(vaultStatus: string  | undefined) {
        this['vault_status'] = vaultStatus;
    }
    public get vaultStatus(): string | undefined {
        return this['vault_status'];
    }
}