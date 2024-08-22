import { CompareTaskParams } from './CompareTaskParams';
import { JobEndpointInfo } from './JobEndpointInfo';
import { PublicIpConfig } from './PublicIpConfig';
import { ReplayConfigInfo } from './ReplayConfigInfo';
import { SkipPreCheckInfo } from './SkipPreCheckInfo';


export class ActionParams {
    public endpoints?: Array<JobEndpointInfo>;
    private 'precheck_mode'?: string;
    private 'skip_precheck_info'?: SkipPreCheckInfo;
    private 'pause_mode'?: string;
    private 'start_time'?: string;
    private 'compare_task_param'?: CompareTaskParams;
    private 'is_sync_re_edit'?: boolean;
    private 'is_only_init_task'?: boolean;
    private 'force_delete'?: boolean;
    private 'public_ip_config'?: PublicIpConfig;
    private 'replay_config'?: ReplayConfigInfo;
    public constructor() { 
    }
    public withEndpoints(endpoints: Array<JobEndpointInfo>): ActionParams {
        this['endpoints'] = endpoints;
        return this;
    }
    public withPrecheckMode(precheckMode: string): ActionParams {
        this['precheck_mode'] = precheckMode;
        return this;
    }
    public set precheckMode(precheckMode: string  | undefined) {
        this['precheck_mode'] = precheckMode;
    }
    public get precheckMode(): string | undefined {
        return this['precheck_mode'];
    }
    public withSkipPrecheckInfo(skipPrecheckInfo: SkipPreCheckInfo): ActionParams {
        this['skip_precheck_info'] = skipPrecheckInfo;
        return this;
    }
    public set skipPrecheckInfo(skipPrecheckInfo: SkipPreCheckInfo  | undefined) {
        this['skip_precheck_info'] = skipPrecheckInfo;
    }
    public get skipPrecheckInfo(): SkipPreCheckInfo | undefined {
        return this['skip_precheck_info'];
    }
    public withPauseMode(pauseMode: string): ActionParams {
        this['pause_mode'] = pauseMode;
        return this;
    }
    public set pauseMode(pauseMode: string  | undefined) {
        this['pause_mode'] = pauseMode;
    }
    public get pauseMode(): string | undefined {
        return this['pause_mode'];
    }
    public withStartTime(startTime: string): ActionParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withCompareTaskParam(compareTaskParam: CompareTaskParams): ActionParams {
        this['compare_task_param'] = compareTaskParam;
        return this;
    }
    public set compareTaskParam(compareTaskParam: CompareTaskParams  | undefined) {
        this['compare_task_param'] = compareTaskParam;
    }
    public get compareTaskParam(): CompareTaskParams | undefined {
        return this['compare_task_param'];
    }
    public withIsSyncReEdit(isSyncReEdit: boolean): ActionParams {
        this['is_sync_re_edit'] = isSyncReEdit;
        return this;
    }
    public set isSyncReEdit(isSyncReEdit: boolean  | undefined) {
        this['is_sync_re_edit'] = isSyncReEdit;
    }
    public get isSyncReEdit(): boolean | undefined {
        return this['is_sync_re_edit'];
    }
    public withIsOnlyInitTask(isOnlyInitTask: boolean): ActionParams {
        this['is_only_init_task'] = isOnlyInitTask;
        return this;
    }
    public set isOnlyInitTask(isOnlyInitTask: boolean  | undefined) {
        this['is_only_init_task'] = isOnlyInitTask;
    }
    public get isOnlyInitTask(): boolean | undefined {
        return this['is_only_init_task'];
    }
    public withForceDelete(forceDelete: boolean): ActionParams {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: boolean  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): boolean | undefined {
        return this['force_delete'];
    }
    public withPublicIpConfig(publicIpConfig: PublicIpConfig): ActionParams {
        this['public_ip_config'] = publicIpConfig;
        return this;
    }
    public set publicIpConfig(publicIpConfig: PublicIpConfig  | undefined) {
        this['public_ip_config'] = publicIpConfig;
    }
    public get publicIpConfig(): PublicIpConfig | undefined {
        return this['public_ip_config'];
    }
    public withReplayConfig(replayConfig: ReplayConfigInfo): ActionParams {
        this['replay_config'] = replayConfig;
        return this;
    }
    public set replayConfig(replayConfig: ReplayConfigInfo  | undefined) {
        this['replay_config'] = replayConfig;
    }
    public get replayConfig(): ReplayConfigInfo | undefined {
        return this['replay_config'];
    }
}