

export class HandleExternalIncidentRequest {
    private 'incident_num'?: string;
    public operator?: string;
    private 'operate_key'?: string;
    public parameter?: { [key: string]: object; };
    public constructor(incidentNum?: string, operator?: string, operateKey?: string) { 
        this['incident_num'] = incidentNum;
        this['operator'] = operator;
        this['operate_key'] = operateKey;
    }
    public withIncidentNum(incidentNum: string): HandleExternalIncidentRequest {
        this['incident_num'] = incidentNum;
        return this;
    }
    public set incidentNum(incidentNum: string  | undefined) {
        this['incident_num'] = incidentNum;
    }
    public get incidentNum(): string | undefined {
        return this['incident_num'];
    }
    public withOperator(operator: string): HandleExternalIncidentRequest {
        this['operator'] = operator;
        return this;
    }
    public withOperateKey(operateKey: string): HandleExternalIncidentRequest {
        this['operate_key'] = operateKey;
        return this;
    }
    public set operateKey(operateKey: string  | undefined) {
        this['operate_key'] = operateKey;
    }
    public get operateKey(): string | undefined {
        return this['operate_key'];
    }
    public withParameter(parameter: { [key: string]: object; }): HandleExternalIncidentRequest {
        this['parameter'] = parameter;
        return this;
    }
}