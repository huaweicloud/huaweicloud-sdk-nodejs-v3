import { TuningParameter } from './TuningParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class QueryTuningParamsResponse extends SdkResponse {
    private 'full_sync'?: Array<TuningParameter>;
    private 'incre_capture'?: Array<TuningParameter>;
    private 'incre_apply'?: Array<TuningParameter>;
    private 'incre_relay'?: Array<TuningParameter>;
    private 'modify_result'?: string;
    public constructor() { 
        super();
    }
    public withFullSync(fullSync: Array<TuningParameter>): QueryTuningParamsResponse {
        this['full_sync'] = fullSync;
        return this;
    }
    public set fullSync(fullSync: Array<TuningParameter>  | undefined) {
        this['full_sync'] = fullSync;
    }
    public get fullSync(): Array<TuningParameter> | undefined {
        return this['full_sync'];
    }
    public withIncreCapture(increCapture: Array<TuningParameter>): QueryTuningParamsResponse {
        this['incre_capture'] = increCapture;
        return this;
    }
    public set increCapture(increCapture: Array<TuningParameter>  | undefined) {
        this['incre_capture'] = increCapture;
    }
    public get increCapture(): Array<TuningParameter> | undefined {
        return this['incre_capture'];
    }
    public withIncreApply(increApply: Array<TuningParameter>): QueryTuningParamsResponse {
        this['incre_apply'] = increApply;
        return this;
    }
    public set increApply(increApply: Array<TuningParameter>  | undefined) {
        this['incre_apply'] = increApply;
    }
    public get increApply(): Array<TuningParameter> | undefined {
        return this['incre_apply'];
    }
    public withIncreRelay(increRelay: Array<TuningParameter>): QueryTuningParamsResponse {
        this['incre_relay'] = increRelay;
        return this;
    }
    public set increRelay(increRelay: Array<TuningParameter>  | undefined) {
        this['incre_relay'] = increRelay;
    }
    public get increRelay(): Array<TuningParameter> | undefined {
        return this['incre_relay'];
    }
    public withModifyResult(modifyResult: string): QueryTuningParamsResponse {
        this['modify_result'] = modifyResult;
        return this;
    }
    public set modifyResult(modifyResult: string  | undefined) {
        this['modify_result'] = modifyResult;
    }
    public get modifyResult(): string | undefined {
        return this['modify_result'];
    }
}