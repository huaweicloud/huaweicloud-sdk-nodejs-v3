

export class LogConfigDto {
    private 'fw_instance_id'?: string;
    private 'lts_enable'?: number;
    private 'lts_log_group_id'?: string;
    private 'lts_attack_log_stream_id'?: string;
    private 'lts_attack_log_stream_enable'?: number;
    private 'lts_access_log_stream_id'?: string;
    private 'lts_access_log_stream_enable'?: number;
    private 'lts_flow_log_stream_id'?: string;
    private 'lts_flow_log_stream_enable'?: number;
    public constructor(fwInstanceId?: string, ltsEnable?: number, ltsLogGroupId?: string) { 
        this['fw_instance_id'] = fwInstanceId;
        this['lts_enable'] = ltsEnable;
        this['lts_log_group_id'] = ltsLogGroupId;
    }
    public withFwInstanceId(fwInstanceId: string): LogConfigDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLtsEnable(ltsEnable: number): LogConfigDto {
        this['lts_enable'] = ltsEnable;
        return this;
    }
    public set ltsEnable(ltsEnable: number  | undefined) {
        this['lts_enable'] = ltsEnable;
    }
    public get ltsEnable(): number | undefined {
        return this['lts_enable'];
    }
    public withLtsLogGroupId(ltsLogGroupId: string): LogConfigDto {
        this['lts_log_group_id'] = ltsLogGroupId;
        return this;
    }
    public set ltsLogGroupId(ltsLogGroupId: string  | undefined) {
        this['lts_log_group_id'] = ltsLogGroupId;
    }
    public get ltsLogGroupId(): string | undefined {
        return this['lts_log_group_id'];
    }
    public withLtsAttackLogStreamId(ltsAttackLogStreamId: string): LogConfigDto {
        this['lts_attack_log_stream_id'] = ltsAttackLogStreamId;
        return this;
    }
    public set ltsAttackLogStreamId(ltsAttackLogStreamId: string  | undefined) {
        this['lts_attack_log_stream_id'] = ltsAttackLogStreamId;
    }
    public get ltsAttackLogStreamId(): string | undefined {
        return this['lts_attack_log_stream_id'];
    }
    public withLtsAttackLogStreamEnable(ltsAttackLogStreamEnable: number): LogConfigDto {
        this['lts_attack_log_stream_enable'] = ltsAttackLogStreamEnable;
        return this;
    }
    public set ltsAttackLogStreamEnable(ltsAttackLogStreamEnable: number  | undefined) {
        this['lts_attack_log_stream_enable'] = ltsAttackLogStreamEnable;
    }
    public get ltsAttackLogStreamEnable(): number | undefined {
        return this['lts_attack_log_stream_enable'];
    }
    public withLtsAccessLogStreamId(ltsAccessLogStreamId: string): LogConfigDto {
        this['lts_access_log_stream_id'] = ltsAccessLogStreamId;
        return this;
    }
    public set ltsAccessLogStreamId(ltsAccessLogStreamId: string  | undefined) {
        this['lts_access_log_stream_id'] = ltsAccessLogStreamId;
    }
    public get ltsAccessLogStreamId(): string | undefined {
        return this['lts_access_log_stream_id'];
    }
    public withLtsAccessLogStreamEnable(ltsAccessLogStreamEnable: number): LogConfigDto {
        this['lts_access_log_stream_enable'] = ltsAccessLogStreamEnable;
        return this;
    }
    public set ltsAccessLogStreamEnable(ltsAccessLogStreamEnable: number  | undefined) {
        this['lts_access_log_stream_enable'] = ltsAccessLogStreamEnable;
    }
    public get ltsAccessLogStreamEnable(): number | undefined {
        return this['lts_access_log_stream_enable'];
    }
    public withLtsFlowLogStreamId(ltsFlowLogStreamId: string): LogConfigDto {
        this['lts_flow_log_stream_id'] = ltsFlowLogStreamId;
        return this;
    }
    public set ltsFlowLogStreamId(ltsFlowLogStreamId: string  | undefined) {
        this['lts_flow_log_stream_id'] = ltsFlowLogStreamId;
    }
    public get ltsFlowLogStreamId(): string | undefined {
        return this['lts_flow_log_stream_id'];
    }
    public withLtsFlowLogStreamEnable(ltsFlowLogStreamEnable: number): LogConfigDto {
        this['lts_flow_log_stream_enable'] = ltsFlowLogStreamEnable;
        return this;
    }
    public set ltsFlowLogStreamEnable(ltsFlowLogStreamEnable: number  | undefined) {
        this['lts_flow_log_stream_enable'] = ltsFlowLogStreamEnable;
    }
    public get ltsFlowLogStreamEnable(): number | undefined {
        return this['lts_flow_log_stream_enable'];
    }
}