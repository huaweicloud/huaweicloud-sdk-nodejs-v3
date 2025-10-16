import { StatisticalCharacteristic } from './StatisticalCharacteristic';


export class ShowStatusClusterItem {
    private 'success_rate'?: number;
    private 'fail_rate'?: number;
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'average_value'?: number;
    private 'total_value'?: number;
    public limit?: boolean;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public constructor() { 
    }
    public withSuccessRate(successRate: number): ShowStatusClusterItem {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withFailRate(failRate: number): ShowStatusClusterItem {
        this['fail_rate'] = failRate;
        return this;
    }
    public set failRate(failRate: number  | undefined) {
        this['fail_rate'] = failRate;
    }
    public get failRate(): number | undefined {
        return this['fail_rate'];
    }
    public withSuccessCount(successCount: number): ShowStatusClusterItem {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): ShowStatusClusterItem {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAverageValue(averageValue: number): ShowStatusClusterItem {
        this['average_value'] = averageValue;
        return this;
    }
    public set averageValue(averageValue: number  | undefined) {
        this['average_value'] = averageValue;
    }
    public get averageValue(): number | undefined {
        return this['average_value'];
    }
    public withTotalValue(totalValue: number): ShowStatusClusterItem {
        this['total_value'] = totalValue;
        return this;
    }
    public set totalValue(totalValue: number  | undefined) {
        this['total_value'] = totalValue;
    }
    public get totalValue(): number | undefined {
        return this['total_value'];
    }
    public withLimit(limit: boolean): ShowStatusClusterItem {
        this['limit'] = limit;
        return this;
    }
    public withClusterId(clusterId: string): ShowStatusClusterItem {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ShowStatusClusterItem {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}