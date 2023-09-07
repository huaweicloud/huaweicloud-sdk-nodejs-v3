
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitorDataResponse extends SdkResponse {
    public bandwidth?: string;
    private 'is_src_normal'?: boolean;
    private 'is_dst_normal'?: boolean;
    private 'src_offset'?: string;
    private 'node_offset'?: string;
    private 'dst_offset'?: string;
    private 'src_delay'?: number;
    private 'dst_delay'?: number;
    private 'src_rps'?: string;
    private 'src_io'?: string;
    private 'dst_rps'?: string;
    private 'dst_io'?: string;
    private 'trans_data'?: string;
    private 'trans_lines'?: string;
    private 'used_volumes'?: string;
    private 'used_memory'?: string;
    private 'used_cpu_percent'?: string;
    private 'node_volume_size'?: number;
    private 'node_memory_size'?: number;
    private 'update_time'?: string;
    private 'apply_rate'?: number;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: string): ShowMonitorDataResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withIsSrcNormal(isSrcNormal: boolean): ShowMonitorDataResponse {
        this['is_src_normal'] = isSrcNormal;
        return this;
    }
    public set isSrcNormal(isSrcNormal: boolean  | undefined) {
        this['is_src_normal'] = isSrcNormal;
    }
    public get isSrcNormal(): boolean | undefined {
        return this['is_src_normal'];
    }
    public withIsDstNormal(isDstNormal: boolean): ShowMonitorDataResponse {
        this['is_dst_normal'] = isDstNormal;
        return this;
    }
    public set isDstNormal(isDstNormal: boolean  | undefined) {
        this['is_dst_normal'] = isDstNormal;
    }
    public get isDstNormal(): boolean | undefined {
        return this['is_dst_normal'];
    }
    public withSrcOffset(srcOffset: string): ShowMonitorDataResponse {
        this['src_offset'] = srcOffset;
        return this;
    }
    public set srcOffset(srcOffset: string  | undefined) {
        this['src_offset'] = srcOffset;
    }
    public get srcOffset(): string | undefined {
        return this['src_offset'];
    }
    public withNodeOffset(nodeOffset: string): ShowMonitorDataResponse {
        this['node_offset'] = nodeOffset;
        return this;
    }
    public set nodeOffset(nodeOffset: string  | undefined) {
        this['node_offset'] = nodeOffset;
    }
    public get nodeOffset(): string | undefined {
        return this['node_offset'];
    }
    public withDstOffset(dstOffset: string): ShowMonitorDataResponse {
        this['dst_offset'] = dstOffset;
        return this;
    }
    public set dstOffset(dstOffset: string  | undefined) {
        this['dst_offset'] = dstOffset;
    }
    public get dstOffset(): string | undefined {
        return this['dst_offset'];
    }
    public withSrcDelay(srcDelay: number): ShowMonitorDataResponse {
        this['src_delay'] = srcDelay;
        return this;
    }
    public set srcDelay(srcDelay: number  | undefined) {
        this['src_delay'] = srcDelay;
    }
    public get srcDelay(): number | undefined {
        return this['src_delay'];
    }
    public withDstDelay(dstDelay: number): ShowMonitorDataResponse {
        this['dst_delay'] = dstDelay;
        return this;
    }
    public set dstDelay(dstDelay: number  | undefined) {
        this['dst_delay'] = dstDelay;
    }
    public get dstDelay(): number | undefined {
        return this['dst_delay'];
    }
    public withSrcRps(srcRps: string): ShowMonitorDataResponse {
        this['src_rps'] = srcRps;
        return this;
    }
    public set srcRps(srcRps: string  | undefined) {
        this['src_rps'] = srcRps;
    }
    public get srcRps(): string | undefined {
        return this['src_rps'];
    }
    public withSrcIo(srcIo: string): ShowMonitorDataResponse {
        this['src_io'] = srcIo;
        return this;
    }
    public set srcIo(srcIo: string  | undefined) {
        this['src_io'] = srcIo;
    }
    public get srcIo(): string | undefined {
        return this['src_io'];
    }
    public withDstRps(dstRps: string): ShowMonitorDataResponse {
        this['dst_rps'] = dstRps;
        return this;
    }
    public set dstRps(dstRps: string  | undefined) {
        this['dst_rps'] = dstRps;
    }
    public get dstRps(): string | undefined {
        return this['dst_rps'];
    }
    public withDstIo(dstIo: string): ShowMonitorDataResponse {
        this['dst_io'] = dstIo;
        return this;
    }
    public set dstIo(dstIo: string  | undefined) {
        this['dst_io'] = dstIo;
    }
    public get dstIo(): string | undefined {
        return this['dst_io'];
    }
    public withTransData(transData: string): ShowMonitorDataResponse {
        this['trans_data'] = transData;
        return this;
    }
    public set transData(transData: string  | undefined) {
        this['trans_data'] = transData;
    }
    public get transData(): string | undefined {
        return this['trans_data'];
    }
    public withTransLines(transLines: string): ShowMonitorDataResponse {
        this['trans_lines'] = transLines;
        return this;
    }
    public set transLines(transLines: string  | undefined) {
        this['trans_lines'] = transLines;
    }
    public get transLines(): string | undefined {
        return this['trans_lines'];
    }
    public withUsedVolumes(usedVolumes: string): ShowMonitorDataResponse {
        this['used_volumes'] = usedVolumes;
        return this;
    }
    public set usedVolumes(usedVolumes: string  | undefined) {
        this['used_volumes'] = usedVolumes;
    }
    public get usedVolumes(): string | undefined {
        return this['used_volumes'];
    }
    public withUsedMemory(usedMemory: string): ShowMonitorDataResponse {
        this['used_memory'] = usedMemory;
        return this;
    }
    public set usedMemory(usedMemory: string  | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory(): string | undefined {
        return this['used_memory'];
    }
    public withUsedCpuPercent(usedCpuPercent: string): ShowMonitorDataResponse {
        this['used_cpu_percent'] = usedCpuPercent;
        return this;
    }
    public set usedCpuPercent(usedCpuPercent: string  | undefined) {
        this['used_cpu_percent'] = usedCpuPercent;
    }
    public get usedCpuPercent(): string | undefined {
        return this['used_cpu_percent'];
    }
    public withNodeVolumeSize(nodeVolumeSize: number): ShowMonitorDataResponse {
        this['node_volume_size'] = nodeVolumeSize;
        return this;
    }
    public set nodeVolumeSize(nodeVolumeSize: number  | undefined) {
        this['node_volume_size'] = nodeVolumeSize;
    }
    public get nodeVolumeSize(): number | undefined {
        return this['node_volume_size'];
    }
    public withNodeMemorySize(nodeMemorySize: number): ShowMonitorDataResponse {
        this['node_memory_size'] = nodeMemorySize;
        return this;
    }
    public set nodeMemorySize(nodeMemorySize: number  | undefined) {
        this['node_memory_size'] = nodeMemorySize;
    }
    public get nodeMemorySize(): number | undefined {
        return this['node_memory_size'];
    }
    public withUpdateTime(updateTime: string): ShowMonitorDataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withApplyRate(applyRate: number): ShowMonitorDataResponse {
        this['apply_rate'] = applyRate;
        return this;
    }
    public set applyRate(applyRate: number  | undefined) {
        this['apply_rate'] = applyRate;
    }
    public get applyRate(): number | undefined {
        return this['apply_rate'];
    }
}