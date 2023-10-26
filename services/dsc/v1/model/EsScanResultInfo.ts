import { EsMatchInfo } from './EsMatchInfo';


export class EsScanResultInfo {
    private 'task_id'?: string;
    private 'index_name'?: string;
    private 'type_id'?: string;
    private 'type_name'?: string;
    private 'risk_level'?: number;
    private 'sensitive_data_type'?: Array<string>;
    private 'match_info'?: Array<EsMatchInfo>;
    public constructor() { 
    }
    public withTaskId(taskId: string): EsScanResultInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withIndexName(indexName: string): EsScanResultInfo {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withTypeId(typeId: string): EsScanResultInfo {
        this['type_id'] = typeId;
        return this;
    }
    public set typeId(typeId: string  | undefined) {
        this['type_id'] = typeId;
    }
    public get typeId(): string | undefined {
        return this['type_id'];
    }
    public withTypeName(typeName: string): EsScanResultInfo {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withRiskLevel(riskLevel: number): EsScanResultInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withSensitiveDataType(sensitiveDataType: Array<string>): EsScanResultInfo {
        this['sensitive_data_type'] = sensitiveDataType;
        return this;
    }
    public set sensitiveDataType(sensitiveDataType: Array<string>  | undefined) {
        this['sensitive_data_type'] = sensitiveDataType;
    }
    public get sensitiveDataType(): Array<string> | undefined {
        return this['sensitive_data_type'];
    }
    public withMatchInfo(matchInfo: Array<EsMatchInfo>): EsScanResultInfo {
        this['match_info'] = matchInfo;
        return this;
    }
    public set matchInfo(matchInfo: Array<EsMatchInfo>  | undefined) {
        this['match_info'] = matchInfo;
    }
    public get matchInfo(): Array<EsMatchInfo> | undefined {
        return this['match_info'];
    }
}