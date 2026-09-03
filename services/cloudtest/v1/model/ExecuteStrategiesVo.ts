import { AdvancedConfig } from './AdvancedConfig';
import { ExecutionTime } from './ExecutionTime';
import { OperateNotice } from './OperateNotice';
import { ProtocolTestVo } from './ProtocolTestVo';


export class ExecuteStrategiesVo {
    public advancedConfig?: AdvancedConfig;
    public dailyReportEnable?: string;
    public executeModel?: string;
    public executePeriodBegin?: string;
    public executePeriodEnd?: string;
    public executeStartTime?: number;
    public executionTime?: Array<ExecutionTime>;
    public executorOption?: { [key: string]: object; };
    public executorParameters?: { [key: string]: object; };
    public failedRetryTimes?: number;
    public intervalInSeconds?: number;
    public ipKey?: string;
    private 'location_ids'?: Array<string>;
    public operateNotice?: OperateNotice;
    public pbi?: string;
    private 'protocol_test'?: ProtocolTestVo;
    public repeatTimes?: number;
    public serviceNameCBG?: string;
    public serviceScopeCBG?: string;
    public serviceVersionCBG?: string;
    public testNodeServer?: string;
    public timeoutMilSec?: number;
    public timerExpression?: string;
    public token?: string;
    public constructor() { 
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): ExecuteStrategiesVo {
        this['advancedConfig'] = advancedConfig;
        return this;
    }
    public withDailyReportEnable(dailyReportEnable: string): ExecuteStrategiesVo {
        this['dailyReportEnable'] = dailyReportEnable;
        return this;
    }
    public withExecuteModel(executeModel: string): ExecuteStrategiesVo {
        this['executeModel'] = executeModel;
        return this;
    }
    public withExecutePeriodBegin(executePeriodBegin: string): ExecuteStrategiesVo {
        this['executePeriodBegin'] = executePeriodBegin;
        return this;
    }
    public withExecutePeriodEnd(executePeriodEnd: string): ExecuteStrategiesVo {
        this['executePeriodEnd'] = executePeriodEnd;
        return this;
    }
    public withExecuteStartTime(executeStartTime: number): ExecuteStrategiesVo {
        this['executeStartTime'] = executeStartTime;
        return this;
    }
    public withExecutionTime(executionTime: Array<ExecutionTime>): ExecuteStrategiesVo {
        this['executionTime'] = executionTime;
        return this;
    }
    public withExecutorOption(executorOption: { [key: string]: object; }): ExecuteStrategiesVo {
        this['executorOption'] = executorOption;
        return this;
    }
    public withExecutorParameters(executorParameters: { [key: string]: object; }): ExecuteStrategiesVo {
        this['executorParameters'] = executorParameters;
        return this;
    }
    public withFailedRetryTimes(failedRetryTimes: number): ExecuteStrategiesVo {
        this['failedRetryTimes'] = failedRetryTimes;
        return this;
    }
    public withIntervalInSeconds(intervalInSeconds: number): ExecuteStrategiesVo {
        this['intervalInSeconds'] = intervalInSeconds;
        return this;
    }
    public withIpKey(ipKey: string): ExecuteStrategiesVo {
        this['ipKey'] = ipKey;
        return this;
    }
    public withLocationIds(locationIds: Array<string>): ExecuteStrategiesVo {
        this['location_ids'] = locationIds;
        return this;
    }
    public set locationIds(locationIds: Array<string>  | undefined) {
        this['location_ids'] = locationIds;
    }
    public get locationIds(): Array<string> | undefined {
        return this['location_ids'];
    }
    public withOperateNotice(operateNotice: OperateNotice): ExecuteStrategiesVo {
        this['operateNotice'] = operateNotice;
        return this;
    }
    public withPbi(pbi: string): ExecuteStrategiesVo {
        this['pbi'] = pbi;
        return this;
    }
    public withProtocolTest(protocolTest: ProtocolTestVo): ExecuteStrategiesVo {
        this['protocol_test'] = protocolTest;
        return this;
    }
    public set protocolTest(protocolTest: ProtocolTestVo  | undefined) {
        this['protocol_test'] = protocolTest;
    }
    public get protocolTest(): ProtocolTestVo | undefined {
        return this['protocol_test'];
    }
    public withRepeatTimes(repeatTimes: number): ExecuteStrategiesVo {
        this['repeatTimes'] = repeatTimes;
        return this;
    }
    public withServiceNameCBG(serviceNameCBG: string): ExecuteStrategiesVo {
        this['serviceNameCBG'] = serviceNameCBG;
        return this;
    }
    public withServiceScopeCBG(serviceScopeCBG: string): ExecuteStrategiesVo {
        this['serviceScopeCBG'] = serviceScopeCBG;
        return this;
    }
    public withServiceVersionCBG(serviceVersionCBG: string): ExecuteStrategiesVo {
        this['serviceVersionCBG'] = serviceVersionCBG;
        return this;
    }
    public withTestNodeServer(testNodeServer: string): ExecuteStrategiesVo {
        this['testNodeServer'] = testNodeServer;
        return this;
    }
    public withTimeoutMilSec(timeoutMilSec: number): ExecuteStrategiesVo {
        this['timeoutMilSec'] = timeoutMilSec;
        return this;
    }
    public withTimerExpression(timerExpression: string): ExecuteStrategiesVo {
        this['timerExpression'] = timerExpression;
        return this;
    }
    public withToken(token: string): ExecuteStrategiesVo {
        this['token'] = token;
        return this;
    }
}