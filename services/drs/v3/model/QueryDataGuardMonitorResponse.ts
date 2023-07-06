

export class QueryDataGuardMonitorResponse {
    public bandwidth?: string;
    private 'cpuUsed_percent'?: string | undefined;
    private 'dst_delay'?: number | undefined;
    private 'dst_io'?: string | undefined;
    private 'dst_normal'?: boolean | undefined;
    private 'dst_offset'?: string | undefined;
    private 'dst_rps'?: string | undefined;
    private 'mem_used_inMB'?: string | undefined;
    private 'node_mem_inMB'?: number | undefined;
    private 'node_offset'?: string | undefined;
    private 'node_volume_inGB'?: number | undefined;
    private 'sr_delay'?: number | undefined;
    private 'sr_offset'?: string | undefined;
    private 'src_io'?: string | undefined;
    private 'src_normal'?: boolean | undefined;
    private 'src_rps'?: string | undefined;
    private 'trans_inMB'?: string | undefined;
    private 'trans_lines'?: string | undefined;
    private 'volume_used_inGB'?: string | undefined;
    private 'migration_bytes_per_second'?: number | undefined;
    public constructor() { 
    }
    public withBandwidth(bandwidth: string): QueryDataGuardMonitorResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withCpuUsedPercent(cpuUsedPercent: string): QueryDataGuardMonitorResponse {
        this['cpuUsed_percent'] = cpuUsedPercent;
        return this;
    }
    public set cpuUsedPercent(cpuUsedPercent: string | undefined) {
        this['cpuUsed_percent'] = cpuUsedPercent;
    }
    public get cpuUsedPercent() {
        return this['cpuUsed_percent'];
    }
    public withDstDelay(dstDelay: number): QueryDataGuardMonitorResponse {
        this['dst_delay'] = dstDelay;
        return this;
    }
    public set dstDelay(dstDelay: number | undefined) {
        this['dst_delay'] = dstDelay;
    }
    public get dstDelay() {
        return this['dst_delay'];
    }
    public withDstIo(dstIo: string): QueryDataGuardMonitorResponse {
        this['dst_io'] = dstIo;
        return this;
    }
    public set dstIo(dstIo: string | undefined) {
        this['dst_io'] = dstIo;
    }
    public get dstIo() {
        return this['dst_io'];
    }
    public withDstNormal(dstNormal: boolean): QueryDataGuardMonitorResponse {
        this['dst_normal'] = dstNormal;
        return this;
    }
    public set dstNormal(dstNormal: boolean | undefined) {
        this['dst_normal'] = dstNormal;
    }
    public get dstNormal() {
        return this['dst_normal'];
    }
    public withDstOffset(dstOffset: string): QueryDataGuardMonitorResponse {
        this['dst_offset'] = dstOffset;
        return this;
    }
    public set dstOffset(dstOffset: string | undefined) {
        this['dst_offset'] = dstOffset;
    }
    public get dstOffset() {
        return this['dst_offset'];
    }
    public withDstRps(dstRps: string): QueryDataGuardMonitorResponse {
        this['dst_rps'] = dstRps;
        return this;
    }
    public set dstRps(dstRps: string | undefined) {
        this['dst_rps'] = dstRps;
    }
    public get dstRps() {
        return this['dst_rps'];
    }
    public withMemUsedInMB(memUsedInMB: string): QueryDataGuardMonitorResponse {
        this['mem_used_inMB'] = memUsedInMB;
        return this;
    }
    public set memUsedInMB(memUsedInMB: string | undefined) {
        this['mem_used_inMB'] = memUsedInMB;
    }
    public get memUsedInMB() {
        return this['mem_used_inMB'];
    }
    public withNodeMemInMB(nodeMemInMB: number): QueryDataGuardMonitorResponse {
        this['node_mem_inMB'] = nodeMemInMB;
        return this;
    }
    public set nodeMemInMB(nodeMemInMB: number | undefined) {
        this['node_mem_inMB'] = nodeMemInMB;
    }
    public get nodeMemInMB() {
        return this['node_mem_inMB'];
    }
    public withNodeOffset(nodeOffset: string): QueryDataGuardMonitorResponse {
        this['node_offset'] = nodeOffset;
        return this;
    }
    public set nodeOffset(nodeOffset: string | undefined) {
        this['node_offset'] = nodeOffset;
    }
    public get nodeOffset() {
        return this['node_offset'];
    }
    public withNodeVolumeInGB(nodeVolumeInGB: number): QueryDataGuardMonitorResponse {
        this['node_volume_inGB'] = nodeVolumeInGB;
        return this;
    }
    public set nodeVolumeInGB(nodeVolumeInGB: number | undefined) {
        this['node_volume_inGB'] = nodeVolumeInGB;
    }
    public get nodeVolumeInGB() {
        return this['node_volume_inGB'];
    }
    public withSrDelay(srDelay: number): QueryDataGuardMonitorResponse {
        this['sr_delay'] = srDelay;
        return this;
    }
    public set srDelay(srDelay: number | undefined) {
        this['sr_delay'] = srDelay;
    }
    public get srDelay() {
        return this['sr_delay'];
    }
    public withSrOffset(srOffset: string): QueryDataGuardMonitorResponse {
        this['sr_offset'] = srOffset;
        return this;
    }
    public set srOffset(srOffset: string | undefined) {
        this['sr_offset'] = srOffset;
    }
    public get srOffset() {
        return this['sr_offset'];
    }
    public withSrcIo(srcIo: string): QueryDataGuardMonitorResponse {
        this['src_io'] = srcIo;
        return this;
    }
    public set srcIo(srcIo: string | undefined) {
        this['src_io'] = srcIo;
    }
    public get srcIo() {
        return this['src_io'];
    }
    public withSrcNormal(srcNormal: boolean): QueryDataGuardMonitorResponse {
        this['src_normal'] = srcNormal;
        return this;
    }
    public set srcNormal(srcNormal: boolean | undefined) {
        this['src_normal'] = srcNormal;
    }
    public get srcNormal() {
        return this['src_normal'];
    }
    public withSrcRps(srcRps: string): QueryDataGuardMonitorResponse {
        this['src_rps'] = srcRps;
        return this;
    }
    public set srcRps(srcRps: string | undefined) {
        this['src_rps'] = srcRps;
    }
    public get srcRps() {
        return this['src_rps'];
    }
    public withTransInMB(transInMB: string): QueryDataGuardMonitorResponse {
        this['trans_inMB'] = transInMB;
        return this;
    }
    public set transInMB(transInMB: string | undefined) {
        this['trans_inMB'] = transInMB;
    }
    public get transInMB() {
        return this['trans_inMB'];
    }
    public withTransLines(transLines: string): QueryDataGuardMonitorResponse {
        this['trans_lines'] = transLines;
        return this;
    }
    public set transLines(transLines: string | undefined) {
        this['trans_lines'] = transLines;
    }
    public get transLines() {
        return this['trans_lines'];
    }
    public withVolumeUsedInGB(volumeUsedInGB: string): QueryDataGuardMonitorResponse {
        this['volume_used_inGB'] = volumeUsedInGB;
        return this;
    }
    public set volumeUsedInGB(volumeUsedInGB: string | undefined) {
        this['volume_used_inGB'] = volumeUsedInGB;
    }
    public get volumeUsedInGB() {
        return this['volume_used_inGB'];
    }
    public withMigrationBytesPerSecond(migrationBytesPerSecond: number): QueryDataGuardMonitorResponse {
        this['migration_bytes_per_second'] = migrationBytesPerSecond;
        return this;
    }
    public set migrationBytesPerSecond(migrationBytesPerSecond: number | undefined) {
        this['migration_bytes_per_second'] = migrationBytesPerSecond;
    }
    public get migrationBytesPerSecond() {
        return this['migration_bytes_per_second'];
    }
}