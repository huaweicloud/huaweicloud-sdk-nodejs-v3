import { ListTaskResourcesResponseInfoScanDetailList } from './ListTaskResourcesResponseInfoScanDetailList';


export class ListTaskResourcesResponseInfoClusterScanDataList {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    private 'cluster_version'?: string;
    private 'scan_status'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'scan_detail_list'?: Array<ListTaskResourcesResponseInfoScanDetailList>;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ListTaskResourcesResponseInfoClusterScanDataList {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ListTaskResourcesResponseInfoClusterScanDataList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ListTaskResourcesResponseInfoClusterScanDataList {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterVersion(clusterVersion: string): ListTaskResourcesResponseInfoClusterScanDataList {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withScanStatus(scanStatus: string): ListTaskResourcesResponseInfoClusterScanDataList {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withStartTime(startTime: number): ListTaskResourcesResponseInfoClusterScanDataList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListTaskResourcesResponseInfoClusterScanDataList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withScanDetailList(scanDetailList: Array<ListTaskResourcesResponseInfoScanDetailList>): ListTaskResourcesResponseInfoClusterScanDataList {
        this['scan_detail_list'] = scanDetailList;
        return this;
    }
    public set scanDetailList(scanDetailList: Array<ListTaskResourcesResponseInfoScanDetailList>  | undefined) {
        this['scan_detail_list'] = scanDetailList;
    }
    public get scanDetailList(): Array<ListTaskResourcesResponseInfoScanDetailList> | undefined {
        return this['scan_detail_list'];
    }
}