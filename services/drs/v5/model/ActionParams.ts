import { CompareTaskParams } from './CompareTaskParams';
import { JobEndpointInfo } from './JobEndpointInfo';
import { SkipPreCheckInfo } from './SkipPreCheckInfo';


export class ActionParams {
    public endpoints?: Array<JobEndpointInfo>;
    private 'precheck_mode'?: string | undefined;
    private 'skip_precheck_info'?: SkipPreCheckInfo | undefined;
    private 'pause_mode'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'compare_task_param'?: CompareTaskParams | undefined;
    private 'is_sync_re_edit'?: boolean | undefined;
    private 'force_delete'?: boolean | undefined;
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
    public set precheckMode(precheckMode: string | undefined) {
        this['precheck_mode'] = precheckMode;
    }
    public get precheckMode() {
        return this['precheck_mode'];
    }
    public withSkipPrecheckInfo(skipPrecheckInfo: SkipPreCheckInfo): ActionParams {
        this['skip_precheck_info'] = skipPrecheckInfo;
        return this;
    }
    public set skipPrecheckInfo(skipPrecheckInfo: SkipPreCheckInfo | undefined) {
        this['skip_precheck_info'] = skipPrecheckInfo;
    }
    public get skipPrecheckInfo() {
        return this['skip_precheck_info'];
    }
    public withPauseMode(pauseMode: string): ActionParams {
        this['pause_mode'] = pauseMode;
        return this;
    }
    public set pauseMode(pauseMode: string | undefined) {
        this['pause_mode'] = pauseMode;
    }
    public get pauseMode() {
        return this['pause_mode'];
    }
    public withStartTime(startTime: string): ActionParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withCompareTaskParam(compareTaskParam: CompareTaskParams): ActionParams {
        this['compare_task_param'] = compareTaskParam;
        return this;
    }
    public set compareTaskParam(compareTaskParam: CompareTaskParams | undefined) {
        this['compare_task_param'] = compareTaskParam;
    }
    public get compareTaskParam() {
        return this['compare_task_param'];
    }
    public withIsSyncReEdit(isSyncReEdit: boolean): ActionParams {
        this['is_sync_re_edit'] = isSyncReEdit;
        return this;
    }
    public set isSyncReEdit(isSyncReEdit: boolean | undefined) {
        this['is_sync_re_edit'] = isSyncReEdit;
    }
    public get isSyncReEdit() {
        return this['is_sync_re_edit'];
    }
    public withForceDelete(forceDelete: boolean): ActionParams {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: boolean | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete() {
        return this['force_delete'];
    }
}