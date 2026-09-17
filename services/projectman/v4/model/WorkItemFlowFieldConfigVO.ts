import { WorkItemFlowFieldRangeVO } from './WorkItemFlowFieldRangeVO';
import { WorkItemFlowFieldValueVO } from './WorkItemFlowFieldValueVO';


export class WorkItemFlowFieldConfigVO {
    private 'field_code'?: string;
    private 'value_type'?: string;
    private 'field_operation'?: string;
    private 'field_value'?: WorkItemFlowFieldValueVO;
    public required?: boolean;
    private 'field_range'?: WorkItemFlowFieldRangeVO;
    public constructor() { 
    }
    public withFieldCode(fieldCode: string): WorkItemFlowFieldConfigVO {
        this['field_code'] = fieldCode;
        return this;
    }
    public set fieldCode(fieldCode: string  | undefined) {
        this['field_code'] = fieldCode;
    }
    public get fieldCode(): string | undefined {
        return this['field_code'];
    }
    public withValueType(valueType: string): WorkItemFlowFieldConfigVO {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withFieldOperation(fieldOperation: string): WorkItemFlowFieldConfigVO {
        this['field_operation'] = fieldOperation;
        return this;
    }
    public set fieldOperation(fieldOperation: string  | undefined) {
        this['field_operation'] = fieldOperation;
    }
    public get fieldOperation(): string | undefined {
        return this['field_operation'];
    }
    public withFieldValue(fieldValue: WorkItemFlowFieldValueVO): WorkItemFlowFieldConfigVO {
        this['field_value'] = fieldValue;
        return this;
    }
    public set fieldValue(fieldValue: WorkItemFlowFieldValueVO  | undefined) {
        this['field_value'] = fieldValue;
    }
    public get fieldValue(): WorkItemFlowFieldValueVO | undefined {
        return this['field_value'];
    }
    public withRequired(required: boolean): WorkItemFlowFieldConfigVO {
        this['required'] = required;
        return this;
    }
    public withFieldRange(fieldRange: WorkItemFlowFieldRangeVO): WorkItemFlowFieldConfigVO {
        this['field_range'] = fieldRange;
        return this;
    }
    public set fieldRange(fieldRange: WorkItemFlowFieldRangeVO  | undefined) {
        this['field_range'] = fieldRange;
    }
    public get fieldRange(): WorkItemFlowFieldRangeVO | undefined {
        return this['field_range'];
    }
}