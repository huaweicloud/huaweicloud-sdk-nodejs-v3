

export class ListQueriesDto {
    private 'virtual_cluster_id'?: number;
    public ctime?: number;
    public pid?: string;
    private 'inst_name'?: string;
    public waiting?: boolean;
    public enqueue?: string;
    public warning?: string;
    public query?: string;
    public lane?: string;
    private 'db_name'?: string;
    public priority?: string;
    private 'query_id'?: string;
    private 'query_band'?: string;
    private 'job_name'?: string;
    private 'job_inst'?: string;
    private 'user_name'?: string;
    private 'application_name'?: string;
    private 'client_address'?: string;
    private 'client_hostname'?: string;
    private 'client_port'?: string;
    private 'start_time'?: number;
    private 'block_time'?: number;
    public duration?: number;
    private 'estimate_total_time'?: number;
    private 'estimate_left_time'?: number;
    private 'resource_pool'?: string;
    private 'control_group'?: string;
    private 'min_peak_memory'?: number;
    private 'max_peak_memory'?: number;
    private 'average_peak_memory'?: number;
    private 'memory_skew_percent'?: number;
    private 'estimate_memory'?: number;
    private 'spill_info'?: string;
    private 'min_spill_size'?: number;
    private 'max_spill_size'?: number;
    private 'average_spill_size'?: number;
    private 'spill_skew_percent'?: number;
    private 'min_dn_time'?: number;
    private 'max_dn_time'?: number;
    private 'average_dn_time'?: number;
    private 'dntime_skew_percent'?: number;
    private 'min_cpu_time'?: number;
    private 'max_cpu_time'?: number;
    private 'total_cpu_time'?: number;
    private 'cpu_skew_percent'?: number;
    private 'average_peak_iops'?: number;
    private 'iops_skew_percent'?: number;
    private 'max_peak_iops'?: number;
    private 'min_peak_iops'?: number;
    private 'query_plan'?: string;
    private 'query_status'?: string;
    private 'wlm_status'?: string;
    private 'wlm_attrib'?: string;
    private 'system_query'?: boolean;
    private 'backend_start'?: number;
    private 'elapsed_time'?: number;
    private 'curr_xact_start'?: number;
    private 'state_change'?: number;
    private 'query_start'?: number;
    private 'query_elapsed_time'?: number;
    public constructor() { 
    }
    public withVirtualClusterId(virtualClusterId: number): ListQueriesDto {
        this['virtual_cluster_id'] = virtualClusterId;
        return this;
    }
    public set virtualClusterId(virtualClusterId: number  | undefined) {
        this['virtual_cluster_id'] = virtualClusterId;
    }
    public get virtualClusterId(): number | undefined {
        return this['virtual_cluster_id'];
    }
    public withCtime(ctime: number): ListQueriesDto {
        this['ctime'] = ctime;
        return this;
    }
    public withPid(pid: string): ListQueriesDto {
        this['pid'] = pid;
        return this;
    }
    public withInstName(instName: string): ListQueriesDto {
        this['inst_name'] = instName;
        return this;
    }
    public set instName(instName: string  | undefined) {
        this['inst_name'] = instName;
    }
    public get instName(): string | undefined {
        return this['inst_name'];
    }
    public withWaiting(waiting: boolean): ListQueriesDto {
        this['waiting'] = waiting;
        return this;
    }
    public withEnqueue(enqueue: string): ListQueriesDto {
        this['enqueue'] = enqueue;
        return this;
    }
    public withWarning(warning: string): ListQueriesDto {
        this['warning'] = warning;
        return this;
    }
    public withQuery(query: string): ListQueriesDto {
        this['query'] = query;
        return this;
    }
    public withLane(lane: string): ListQueriesDto {
        this['lane'] = lane;
        return this;
    }
    public withDbName(dbName: string): ListQueriesDto {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withPriority(priority: string): ListQueriesDto {
        this['priority'] = priority;
        return this;
    }
    public withQueryId(queryId: string): ListQueriesDto {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withQueryBand(queryBand: string): ListQueriesDto {
        this['query_band'] = queryBand;
        return this;
    }
    public set queryBand(queryBand: string  | undefined) {
        this['query_band'] = queryBand;
    }
    public get queryBand(): string | undefined {
        return this['query_band'];
    }
    public withJobName(jobName: string): ListQueriesDto {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobInst(jobInst: string): ListQueriesDto {
        this['job_inst'] = jobInst;
        return this;
    }
    public set jobInst(jobInst: string  | undefined) {
        this['job_inst'] = jobInst;
    }
    public get jobInst(): string | undefined {
        return this['job_inst'];
    }
    public withUserName(userName: string): ListQueriesDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withApplicationName(applicationName: string): ListQueriesDto {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withClientAddress(clientAddress: string): ListQueriesDto {
        this['client_address'] = clientAddress;
        return this;
    }
    public set clientAddress(clientAddress: string  | undefined) {
        this['client_address'] = clientAddress;
    }
    public get clientAddress(): string | undefined {
        return this['client_address'];
    }
    public withClientHostname(clientHostname: string): ListQueriesDto {
        this['client_hostname'] = clientHostname;
        return this;
    }
    public set clientHostname(clientHostname: string  | undefined) {
        this['client_hostname'] = clientHostname;
    }
    public get clientHostname(): string | undefined {
        return this['client_hostname'];
    }
    public withClientPort(clientPort: string): ListQueriesDto {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withStartTime(startTime: number): ListQueriesDto {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withBlockTime(blockTime: number): ListQueriesDto {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withDuration(duration: number): ListQueriesDto {
        this['duration'] = duration;
        return this;
    }
    public withEstimateTotalTime(estimateTotalTime: number): ListQueriesDto {
        this['estimate_total_time'] = estimateTotalTime;
        return this;
    }
    public set estimateTotalTime(estimateTotalTime: number  | undefined) {
        this['estimate_total_time'] = estimateTotalTime;
    }
    public get estimateTotalTime(): number | undefined {
        return this['estimate_total_time'];
    }
    public withEstimateLeftTime(estimateLeftTime: number): ListQueriesDto {
        this['estimate_left_time'] = estimateLeftTime;
        return this;
    }
    public set estimateLeftTime(estimateLeftTime: number  | undefined) {
        this['estimate_left_time'] = estimateLeftTime;
    }
    public get estimateLeftTime(): number | undefined {
        return this['estimate_left_time'];
    }
    public withResourcePool(resourcePool: string): ListQueriesDto {
        this['resource_pool'] = resourcePool;
        return this;
    }
    public set resourcePool(resourcePool: string  | undefined) {
        this['resource_pool'] = resourcePool;
    }
    public get resourcePool(): string | undefined {
        return this['resource_pool'];
    }
    public withControlGroup(controlGroup: string): ListQueriesDto {
        this['control_group'] = controlGroup;
        return this;
    }
    public set controlGroup(controlGroup: string  | undefined) {
        this['control_group'] = controlGroup;
    }
    public get controlGroup(): string | undefined {
        return this['control_group'];
    }
    public withMinPeakMemory(minPeakMemory: number): ListQueriesDto {
        this['min_peak_memory'] = minPeakMemory;
        return this;
    }
    public set minPeakMemory(minPeakMemory: number  | undefined) {
        this['min_peak_memory'] = minPeakMemory;
    }
    public get minPeakMemory(): number | undefined {
        return this['min_peak_memory'];
    }
    public withMaxPeakMemory(maxPeakMemory: number): ListQueriesDto {
        this['max_peak_memory'] = maxPeakMemory;
        return this;
    }
    public set maxPeakMemory(maxPeakMemory: number  | undefined) {
        this['max_peak_memory'] = maxPeakMemory;
    }
    public get maxPeakMemory(): number | undefined {
        return this['max_peak_memory'];
    }
    public withAveragePeakMemory(averagePeakMemory: number): ListQueriesDto {
        this['average_peak_memory'] = averagePeakMemory;
        return this;
    }
    public set averagePeakMemory(averagePeakMemory: number  | undefined) {
        this['average_peak_memory'] = averagePeakMemory;
    }
    public get averagePeakMemory(): number | undefined {
        return this['average_peak_memory'];
    }
    public withMemorySkewPercent(memorySkewPercent: number): ListQueriesDto {
        this['memory_skew_percent'] = memorySkewPercent;
        return this;
    }
    public set memorySkewPercent(memorySkewPercent: number  | undefined) {
        this['memory_skew_percent'] = memorySkewPercent;
    }
    public get memorySkewPercent(): number | undefined {
        return this['memory_skew_percent'];
    }
    public withEstimateMemory(estimateMemory: number): ListQueriesDto {
        this['estimate_memory'] = estimateMemory;
        return this;
    }
    public set estimateMemory(estimateMemory: number  | undefined) {
        this['estimate_memory'] = estimateMemory;
    }
    public get estimateMemory(): number | undefined {
        return this['estimate_memory'];
    }
    public withSpillInfo(spillInfo: string): ListQueriesDto {
        this['spill_info'] = spillInfo;
        return this;
    }
    public set spillInfo(spillInfo: string  | undefined) {
        this['spill_info'] = spillInfo;
    }
    public get spillInfo(): string | undefined {
        return this['spill_info'];
    }
    public withMinSpillSize(minSpillSize: number): ListQueriesDto {
        this['min_spill_size'] = minSpillSize;
        return this;
    }
    public set minSpillSize(minSpillSize: number  | undefined) {
        this['min_spill_size'] = minSpillSize;
    }
    public get minSpillSize(): number | undefined {
        return this['min_spill_size'];
    }
    public withMaxSpillSize(maxSpillSize: number): ListQueriesDto {
        this['max_spill_size'] = maxSpillSize;
        return this;
    }
    public set maxSpillSize(maxSpillSize: number  | undefined) {
        this['max_spill_size'] = maxSpillSize;
    }
    public get maxSpillSize(): number | undefined {
        return this['max_spill_size'];
    }
    public withAverageSpillSize(averageSpillSize: number): ListQueriesDto {
        this['average_spill_size'] = averageSpillSize;
        return this;
    }
    public set averageSpillSize(averageSpillSize: number  | undefined) {
        this['average_spill_size'] = averageSpillSize;
    }
    public get averageSpillSize(): number | undefined {
        return this['average_spill_size'];
    }
    public withSpillSkewPercent(spillSkewPercent: number): ListQueriesDto {
        this['spill_skew_percent'] = spillSkewPercent;
        return this;
    }
    public set spillSkewPercent(spillSkewPercent: number  | undefined) {
        this['spill_skew_percent'] = spillSkewPercent;
    }
    public get spillSkewPercent(): number | undefined {
        return this['spill_skew_percent'];
    }
    public withMinDnTime(minDnTime: number): ListQueriesDto {
        this['min_dn_time'] = minDnTime;
        return this;
    }
    public set minDnTime(minDnTime: number  | undefined) {
        this['min_dn_time'] = minDnTime;
    }
    public get minDnTime(): number | undefined {
        return this['min_dn_time'];
    }
    public withMaxDnTime(maxDnTime: number): ListQueriesDto {
        this['max_dn_time'] = maxDnTime;
        return this;
    }
    public set maxDnTime(maxDnTime: number  | undefined) {
        this['max_dn_time'] = maxDnTime;
    }
    public get maxDnTime(): number | undefined {
        return this['max_dn_time'];
    }
    public withAverageDnTime(averageDnTime: number): ListQueriesDto {
        this['average_dn_time'] = averageDnTime;
        return this;
    }
    public set averageDnTime(averageDnTime: number  | undefined) {
        this['average_dn_time'] = averageDnTime;
    }
    public get averageDnTime(): number | undefined {
        return this['average_dn_time'];
    }
    public withDntimeSkewPercent(dntimeSkewPercent: number): ListQueriesDto {
        this['dntime_skew_percent'] = dntimeSkewPercent;
        return this;
    }
    public set dntimeSkewPercent(dntimeSkewPercent: number  | undefined) {
        this['dntime_skew_percent'] = dntimeSkewPercent;
    }
    public get dntimeSkewPercent(): number | undefined {
        return this['dntime_skew_percent'];
    }
    public withMinCpuTime(minCpuTime: number): ListQueriesDto {
        this['min_cpu_time'] = minCpuTime;
        return this;
    }
    public set minCpuTime(minCpuTime: number  | undefined) {
        this['min_cpu_time'] = minCpuTime;
    }
    public get minCpuTime(): number | undefined {
        return this['min_cpu_time'];
    }
    public withMaxCpuTime(maxCpuTime: number): ListQueriesDto {
        this['max_cpu_time'] = maxCpuTime;
        return this;
    }
    public set maxCpuTime(maxCpuTime: number  | undefined) {
        this['max_cpu_time'] = maxCpuTime;
    }
    public get maxCpuTime(): number | undefined {
        return this['max_cpu_time'];
    }
    public withTotalCpuTime(totalCpuTime: number): ListQueriesDto {
        this['total_cpu_time'] = totalCpuTime;
        return this;
    }
    public set totalCpuTime(totalCpuTime: number  | undefined) {
        this['total_cpu_time'] = totalCpuTime;
    }
    public get totalCpuTime(): number | undefined {
        return this['total_cpu_time'];
    }
    public withCpuSkewPercent(cpuSkewPercent: number): ListQueriesDto {
        this['cpu_skew_percent'] = cpuSkewPercent;
        return this;
    }
    public set cpuSkewPercent(cpuSkewPercent: number  | undefined) {
        this['cpu_skew_percent'] = cpuSkewPercent;
    }
    public get cpuSkewPercent(): number | undefined {
        return this['cpu_skew_percent'];
    }
    public withAveragePeakIops(averagePeakIops: number): ListQueriesDto {
        this['average_peak_iops'] = averagePeakIops;
        return this;
    }
    public set averagePeakIops(averagePeakIops: number  | undefined) {
        this['average_peak_iops'] = averagePeakIops;
    }
    public get averagePeakIops(): number | undefined {
        return this['average_peak_iops'];
    }
    public withIopsSkewPercent(iopsSkewPercent: number): ListQueriesDto {
        this['iops_skew_percent'] = iopsSkewPercent;
        return this;
    }
    public set iopsSkewPercent(iopsSkewPercent: number  | undefined) {
        this['iops_skew_percent'] = iopsSkewPercent;
    }
    public get iopsSkewPercent(): number | undefined {
        return this['iops_skew_percent'];
    }
    public withMaxPeakIops(maxPeakIops: number): ListQueriesDto {
        this['max_peak_iops'] = maxPeakIops;
        return this;
    }
    public set maxPeakIops(maxPeakIops: number  | undefined) {
        this['max_peak_iops'] = maxPeakIops;
    }
    public get maxPeakIops(): number | undefined {
        return this['max_peak_iops'];
    }
    public withMinPeakIops(minPeakIops: number): ListQueriesDto {
        this['min_peak_iops'] = minPeakIops;
        return this;
    }
    public set minPeakIops(minPeakIops: number  | undefined) {
        this['min_peak_iops'] = minPeakIops;
    }
    public get minPeakIops(): number | undefined {
        return this['min_peak_iops'];
    }
    public withQueryPlan(queryPlan: string): ListQueriesDto {
        this['query_plan'] = queryPlan;
        return this;
    }
    public set queryPlan(queryPlan: string  | undefined) {
        this['query_plan'] = queryPlan;
    }
    public get queryPlan(): string | undefined {
        return this['query_plan'];
    }
    public withQueryStatus(queryStatus: string): ListQueriesDto {
        this['query_status'] = queryStatus;
        return this;
    }
    public set queryStatus(queryStatus: string  | undefined) {
        this['query_status'] = queryStatus;
    }
    public get queryStatus(): string | undefined {
        return this['query_status'];
    }
    public withWlmStatus(wlmStatus: string): ListQueriesDto {
        this['wlm_status'] = wlmStatus;
        return this;
    }
    public set wlmStatus(wlmStatus: string  | undefined) {
        this['wlm_status'] = wlmStatus;
    }
    public get wlmStatus(): string | undefined {
        return this['wlm_status'];
    }
    public withWlmAttrib(wlmAttrib: string): ListQueriesDto {
        this['wlm_attrib'] = wlmAttrib;
        return this;
    }
    public set wlmAttrib(wlmAttrib: string  | undefined) {
        this['wlm_attrib'] = wlmAttrib;
    }
    public get wlmAttrib(): string | undefined {
        return this['wlm_attrib'];
    }
    public withSystemQuery(systemQuery: boolean): ListQueriesDto {
        this['system_query'] = systemQuery;
        return this;
    }
    public set systemQuery(systemQuery: boolean  | undefined) {
        this['system_query'] = systemQuery;
    }
    public get systemQuery(): boolean | undefined {
        return this['system_query'];
    }
    public withBackendStart(backendStart: number): ListQueriesDto {
        this['backend_start'] = backendStart;
        return this;
    }
    public set backendStart(backendStart: number  | undefined) {
        this['backend_start'] = backendStart;
    }
    public get backendStart(): number | undefined {
        return this['backend_start'];
    }
    public withElapsedTime(elapsedTime: number): ListQueriesDto {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: number  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): number | undefined {
        return this['elapsed_time'];
    }
    public withCurrXactStart(currXactStart: number): ListQueriesDto {
        this['curr_xact_start'] = currXactStart;
        return this;
    }
    public set currXactStart(currXactStart: number  | undefined) {
        this['curr_xact_start'] = currXactStart;
    }
    public get currXactStart(): number | undefined {
        return this['curr_xact_start'];
    }
    public withStateChange(stateChange: number): ListQueriesDto {
        this['state_change'] = stateChange;
        return this;
    }
    public set stateChange(stateChange: number  | undefined) {
        this['state_change'] = stateChange;
    }
    public get stateChange(): number | undefined {
        return this['state_change'];
    }
    public withQueryStart(queryStart: number): ListQueriesDto {
        this['query_start'] = queryStart;
        return this;
    }
    public set queryStart(queryStart: number  | undefined) {
        this['query_start'] = queryStart;
    }
    public get queryStart(): number | undefined {
        return this['query_start'];
    }
    public withQueryElapsedTime(queryElapsedTime: number): ListQueriesDto {
        this['query_elapsed_time'] = queryElapsedTime;
        return this;
    }
    public set queryElapsedTime(queryElapsedTime: number  | undefined) {
        this['query_elapsed_time'] = queryElapsedTime;
    }
    public get queryElapsedTime(): number | undefined {
        return this['query_elapsed_time'];
    }
}