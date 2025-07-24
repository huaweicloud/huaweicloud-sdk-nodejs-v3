import { AwParam } from './AwParam';
import { AwVariable } from './AwVariable';
import { CheckPoint } from './CheckPoint';


export class UpdateBasicAwReq {
    public description?: string;
    private 'dft_check_point_list'?: Array<CheckPoint>;
    private 'dft_custom_header'?: Array<AwParam>;
    private 'dft_retry_interval'?: string;
    private 'dft_retry_times'?: string;
    private 'dft_variable_list'?: Array<AwVariable>;
    public name?: string;
    private 'param_type_and_dft_value'?: Array<AwParam>;
    public constructor() { 
    }
    public withDescription(description: string): UpdateBasicAwReq {
        this['description'] = description;
        return this;
    }
    public withDftCheckPointList(dftCheckPointList: Array<CheckPoint>): UpdateBasicAwReq {
        this['dft_check_point_list'] = dftCheckPointList;
        return this;
    }
    public set dftCheckPointList(dftCheckPointList: Array<CheckPoint>  | undefined) {
        this['dft_check_point_list'] = dftCheckPointList;
    }
    public get dftCheckPointList(): Array<CheckPoint> | undefined {
        return this['dft_check_point_list'];
    }
    public withDftCustomHeader(dftCustomHeader: Array<AwParam>): UpdateBasicAwReq {
        this['dft_custom_header'] = dftCustomHeader;
        return this;
    }
    public set dftCustomHeader(dftCustomHeader: Array<AwParam>  | undefined) {
        this['dft_custom_header'] = dftCustomHeader;
    }
    public get dftCustomHeader(): Array<AwParam> | undefined {
        return this['dft_custom_header'];
    }
    public withDftRetryInterval(dftRetryInterval: string): UpdateBasicAwReq {
        this['dft_retry_interval'] = dftRetryInterval;
        return this;
    }
    public set dftRetryInterval(dftRetryInterval: string  | undefined) {
        this['dft_retry_interval'] = dftRetryInterval;
    }
    public get dftRetryInterval(): string | undefined {
        return this['dft_retry_interval'];
    }
    public withDftRetryTimes(dftRetryTimes: string): UpdateBasicAwReq {
        this['dft_retry_times'] = dftRetryTimes;
        return this;
    }
    public set dftRetryTimes(dftRetryTimes: string  | undefined) {
        this['dft_retry_times'] = dftRetryTimes;
    }
    public get dftRetryTimes(): string | undefined {
        return this['dft_retry_times'];
    }
    public withDftVariableList(dftVariableList: Array<AwVariable>): UpdateBasicAwReq {
        this['dft_variable_list'] = dftVariableList;
        return this;
    }
    public set dftVariableList(dftVariableList: Array<AwVariable>  | undefined) {
        this['dft_variable_list'] = dftVariableList;
    }
    public get dftVariableList(): Array<AwVariable> | undefined {
        return this['dft_variable_list'];
    }
    public withName(name: string): UpdateBasicAwReq {
        this['name'] = name;
        return this;
    }
    public withParamTypeAndDftValue(paramTypeAndDftValue: Array<AwParam>): UpdateBasicAwReq {
        this['param_type_and_dft_value'] = paramTypeAndDftValue;
        return this;
    }
    public set paramTypeAndDftValue(paramTypeAndDftValue: Array<AwParam>  | undefined) {
        this['param_type_and_dft_value'] = paramTypeAndDftValue;
    }
    public get paramTypeAndDftValue(): Array<AwParam> | undefined {
        return this['param_type_and_dft_value'];
    }
}