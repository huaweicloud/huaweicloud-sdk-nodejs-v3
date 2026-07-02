import { StartKafkaLogTaskReqEntity } from './StartKafkaLogTaskReqEntity';


export class StartKafkaLogTaskReq {
    private 'log_task_list'?: Array<StartKafkaLogTaskReqEntity>;
    public constructor() { 
    }
    public withLogTaskList(logTaskList: Array<StartKafkaLogTaskReqEntity>): StartKafkaLogTaskReq {
        this['log_task_list'] = logTaskList;
        return this;
    }
    public set logTaskList(logTaskList: Array<StartKafkaLogTaskReqEntity>  | undefined) {
        this['log_task_list'] = logTaskList;
    }
    public get logTaskList(): Array<StartKafkaLogTaskReqEntity> | undefined {
        return this['log_task_list'];
    }
}