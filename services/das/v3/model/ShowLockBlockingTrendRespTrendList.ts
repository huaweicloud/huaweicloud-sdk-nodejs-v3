

export class ShowLockBlockingTrendRespTrendList {
    private 'collect_time'?: number;
    private 'total_lock_blocking_count'?: number;
    private 'async_io_completion_count'?: number;
    private 'async_network_io_count'?: number;
    private 'cxconsumer_count'?: number;
    private 'cxpacket_count'?: number;
    private 'dtc_count'?: number;
    private 'lck_m_bu_count'?: number;
    private 'lck_m_is_count'?: number;
    private 'lck_m_iu_count'?: number;
    private 'lck_m_ix_count'?: number;
    private 'other_count'?: number;
    public constructor() { 
    }
    public withCollectTime(collectTime: number): ShowLockBlockingTrendRespTrendList {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withTotalLockBlockingCount(totalLockBlockingCount: number): ShowLockBlockingTrendRespTrendList {
        this['total_lock_blocking_count'] = totalLockBlockingCount;
        return this;
    }
    public set totalLockBlockingCount(totalLockBlockingCount: number  | undefined) {
        this['total_lock_blocking_count'] = totalLockBlockingCount;
    }
    public get totalLockBlockingCount(): number | undefined {
        return this['total_lock_blocking_count'];
    }
    public withAsyncIoCompletionCount(asyncIoCompletionCount: number): ShowLockBlockingTrendRespTrendList {
        this['async_io_completion_count'] = asyncIoCompletionCount;
        return this;
    }
    public set asyncIoCompletionCount(asyncIoCompletionCount: number  | undefined) {
        this['async_io_completion_count'] = asyncIoCompletionCount;
    }
    public get asyncIoCompletionCount(): number | undefined {
        return this['async_io_completion_count'];
    }
    public withAsyncNetworkIoCount(asyncNetworkIoCount: number): ShowLockBlockingTrendRespTrendList {
        this['async_network_io_count'] = asyncNetworkIoCount;
        return this;
    }
    public set asyncNetworkIoCount(asyncNetworkIoCount: number  | undefined) {
        this['async_network_io_count'] = asyncNetworkIoCount;
    }
    public get asyncNetworkIoCount(): number | undefined {
        return this['async_network_io_count'];
    }
    public withCxconsumerCount(cxconsumerCount: number): ShowLockBlockingTrendRespTrendList {
        this['cxconsumer_count'] = cxconsumerCount;
        return this;
    }
    public set cxconsumerCount(cxconsumerCount: number  | undefined) {
        this['cxconsumer_count'] = cxconsumerCount;
    }
    public get cxconsumerCount(): number | undefined {
        return this['cxconsumer_count'];
    }
    public withCxpacketCount(cxpacketCount: number): ShowLockBlockingTrendRespTrendList {
        this['cxpacket_count'] = cxpacketCount;
        return this;
    }
    public set cxpacketCount(cxpacketCount: number  | undefined) {
        this['cxpacket_count'] = cxpacketCount;
    }
    public get cxpacketCount(): number | undefined {
        return this['cxpacket_count'];
    }
    public withDtcCount(dtcCount: number): ShowLockBlockingTrendRespTrendList {
        this['dtc_count'] = dtcCount;
        return this;
    }
    public set dtcCount(dtcCount: number  | undefined) {
        this['dtc_count'] = dtcCount;
    }
    public get dtcCount(): number | undefined {
        return this['dtc_count'];
    }
    public withLckMBuCount(lckMBuCount: number): ShowLockBlockingTrendRespTrendList {
        this['lck_m_bu_count'] = lckMBuCount;
        return this;
    }
    public set lckMBuCount(lckMBuCount: number  | undefined) {
        this['lck_m_bu_count'] = lckMBuCount;
    }
    public get lckMBuCount(): number | undefined {
        return this['lck_m_bu_count'];
    }
    public withLckMIsCount(lckMIsCount: number): ShowLockBlockingTrendRespTrendList {
        this['lck_m_is_count'] = lckMIsCount;
        return this;
    }
    public set lckMIsCount(lckMIsCount: number  | undefined) {
        this['lck_m_is_count'] = lckMIsCount;
    }
    public get lckMIsCount(): number | undefined {
        return this['lck_m_is_count'];
    }
    public withLckMIuCount(lckMIuCount: number): ShowLockBlockingTrendRespTrendList {
        this['lck_m_iu_count'] = lckMIuCount;
        return this;
    }
    public set lckMIuCount(lckMIuCount: number  | undefined) {
        this['lck_m_iu_count'] = lckMIuCount;
    }
    public get lckMIuCount(): number | undefined {
        return this['lck_m_iu_count'];
    }
    public withLckMIxCount(lckMIxCount: number): ShowLockBlockingTrendRespTrendList {
        this['lck_m_ix_count'] = lckMIxCount;
        return this;
    }
    public set lckMIxCount(lckMIxCount: number  | undefined) {
        this['lck_m_ix_count'] = lckMIxCount;
    }
    public get lckMIxCount(): number | undefined {
        return this['lck_m_ix_count'];
    }
    public withOtherCount(otherCount: number): ShowLockBlockingTrendRespTrendList {
        this['other_count'] = otherCount;
        return this;
    }
    public set otherCount(otherCount: number  | undefined) {
        this['other_count'] = otherCount;
    }
    public get otherCount(): number | undefined {
        return this['other_count'];
    }
}