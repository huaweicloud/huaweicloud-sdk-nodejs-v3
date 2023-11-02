import { TimeRangeBean } from './TimeRangeBean';


export class OperateLogGetRequest {
    public time?: TimeRangeBean;
    private 'user_name'?: string;
    private 'operate_name'?: string;
    public result?: string;
    public page?: string;
    public size?: string;
    public constructor() { 
    }
    public withTime(time: TimeRangeBean): OperateLogGetRequest {
        this['time'] = time;
        return this;
    }
    public withUserName(userName: string): OperateLogGetRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOperateName(operateName: string): OperateLogGetRequest {
        this['operate_name'] = operateName;
        return this;
    }
    public set operateName(operateName: string  | undefined) {
        this['operate_name'] = operateName;
    }
    public get operateName(): string | undefined {
        return this['operate_name'];
    }
    public withResult(result: string): OperateLogGetRequest {
        this['result'] = result;
        return this;
    }
    public withPage(page: string): OperateLogGetRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: string): OperateLogGetRequest {
        this['size'] = size;
        return this;
    }
}