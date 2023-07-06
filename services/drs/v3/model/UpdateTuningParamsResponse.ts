import { TuningParameter } from './TuningParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTuningParamsResponse extends SdkResponse {
    private 'full_sync'?: Array<TuningParameter> | undefined;
    private 'incre_capture'?: Array<TuningParameter> | undefined;
    private 'incre_apply'?: Array<TuningParameter> | undefined;
    private 'incre_relay'?: Array<TuningParameter> | undefined;
    private 'modify_result'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFullSync(fullSync: Array<TuningParameter>): UpdateTuningParamsResponse {
        this['full_sync'] = fullSync;
        return this;
    }
    public set fullSync(fullSync: Array<TuningParameter> | undefined) {
        this['full_sync'] = fullSync;
    }
    public get fullSync() {
        return this['full_sync'];
    }
    public withIncreCapture(increCapture: Array<TuningParameter>): UpdateTuningParamsResponse {
        this['incre_capture'] = increCapture;
        return this;
    }
    public set increCapture(increCapture: Array<TuningParameter> | undefined) {
        this['incre_capture'] = increCapture;
    }
    public get increCapture() {
        return this['incre_capture'];
    }
    public withIncreApply(increApply: Array<TuningParameter>): UpdateTuningParamsResponse {
        this['incre_apply'] = increApply;
        return this;
    }
    public set increApply(increApply: Array<TuningParameter> | undefined) {
        this['incre_apply'] = increApply;
    }
    public get increApply() {
        return this['incre_apply'];
    }
    public withIncreRelay(increRelay: Array<TuningParameter>): UpdateTuningParamsResponse {
        this['incre_relay'] = increRelay;
        return this;
    }
    public set increRelay(increRelay: Array<TuningParameter> | undefined) {
        this['incre_relay'] = increRelay;
    }
    public get increRelay() {
        return this['incre_relay'];
    }
    public withModifyResult(modifyResult: string): UpdateTuningParamsResponse {
        this['modify_result'] = modifyResult;
        return this;
    }
    public set modifyResult(modifyResult: string | undefined) {
        this['modify_result'] = modifyResult;
    }
    public get modifyResult() {
        return this['modify_result'];
    }
}