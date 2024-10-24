import { OpExternalInfo } from './OpExternalInfo';


export class OperationLogItem {
    public time?: number;
    public action?: string;
    public operator?: string;
    private 'external_info'?: OpExternalInfo;
    public constructor() { 
    }
    public withTime(time: number): OperationLogItem {
        this['time'] = time;
        return this;
    }
    public withAction(action: string): OperationLogItem {
        this['action'] = action;
        return this;
    }
    public withOperator(operator: string): OperationLogItem {
        this['operator'] = operator;
        return this;
    }
    public withExternalInfo(externalInfo: OpExternalInfo): OperationLogItem {
        this['external_info'] = externalInfo;
        return this;
    }
    public set externalInfo(externalInfo: OpExternalInfo  | undefined) {
        this['external_info'] = externalInfo;
    }
    public get externalInfo(): OpExternalInfo | undefined {
        return this['external_info'];
    }
}