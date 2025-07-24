import { AwParam } from './AwParam';
import { AwVariable } from './AwVariable';
import { CheckPoint } from './CheckPoint';
import { ExtraInfo } from './ExtraInfo';


export class CreateBasicAwReq {
    private 'body_param_type'?: string;
    public description?: string;
    private 'dft_check_point_list'?: Array<CheckPoint>;
    private 'dft_custom_header'?: Array<AwParam>;
    private 'dft_variable_list'?: Array<AwVariable>;
    private 'extra_info'?: ExtraInfo;
    private 'group_name'?: string;
    public name?: string;
    private 'param_type_and_dft_value'?: Array<AwParam>;
    public constructor() { 
    }
    public withBodyParamType(bodyParamType: string): CreateBasicAwReq {
        this['body_param_type'] = bodyParamType;
        return this;
    }
    public set bodyParamType(bodyParamType: string  | undefined) {
        this['body_param_type'] = bodyParamType;
    }
    public get bodyParamType(): string | undefined {
        return this['body_param_type'];
    }
    public withDescription(description: string): CreateBasicAwReq {
        this['description'] = description;
        return this;
    }
    public withDftCheckPointList(dftCheckPointList: Array<CheckPoint>): CreateBasicAwReq {
        this['dft_check_point_list'] = dftCheckPointList;
        return this;
    }
    public set dftCheckPointList(dftCheckPointList: Array<CheckPoint>  | undefined) {
        this['dft_check_point_list'] = dftCheckPointList;
    }
    public get dftCheckPointList(): Array<CheckPoint> | undefined {
        return this['dft_check_point_list'];
    }
    public withDftCustomHeader(dftCustomHeader: Array<AwParam>): CreateBasicAwReq {
        this['dft_custom_header'] = dftCustomHeader;
        return this;
    }
    public set dftCustomHeader(dftCustomHeader: Array<AwParam>  | undefined) {
        this['dft_custom_header'] = dftCustomHeader;
    }
    public get dftCustomHeader(): Array<AwParam> | undefined {
        return this['dft_custom_header'];
    }
    public withDftVariableList(dftVariableList: Array<AwVariable>): CreateBasicAwReq {
        this['dft_variable_list'] = dftVariableList;
        return this;
    }
    public set dftVariableList(dftVariableList: Array<AwVariable>  | undefined) {
        this['dft_variable_list'] = dftVariableList;
    }
    public get dftVariableList(): Array<AwVariable> | undefined {
        return this['dft_variable_list'];
    }
    public withExtraInfo(extraInfo: ExtraInfo): CreateBasicAwReq {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ExtraInfo | undefined {
        return this['extra_info'];
    }
    public withGroupName(groupName: string): CreateBasicAwReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withName(name: string): CreateBasicAwReq {
        this['name'] = name;
        return this;
    }
    public withParamTypeAndDftValue(paramTypeAndDftValue: Array<AwParam>): CreateBasicAwReq {
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