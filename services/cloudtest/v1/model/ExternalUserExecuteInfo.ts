import { NameAndIdVo } from './NameAndIdVo';


export class ExternalUserExecuteInfo {
    public executor?: NameAndIdVo;
    private 'execute_count'?: number;
    public constructor() { 
    }
    public withExecutor(executor: NameAndIdVo): ExternalUserExecuteInfo {
        this['executor'] = executor;
        return this;
    }
    public withExecuteCount(executeCount: number): ExternalUserExecuteInfo {
        this['execute_count'] = executeCount;
        return this;
    }
    public set executeCount(executeCount: number  | undefined) {
        this['execute_count'] = executeCount;
    }
    public get executeCount(): number | undefined {
        return this['execute_count'];
    }
}