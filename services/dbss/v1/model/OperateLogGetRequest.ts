import { TimeRangeBean } from './TimeRangeBean';


export class OperateLogGetRequest {
    public time?: TimeRangeBean;
    private 'user_name'?: string;
    public action?: OperateLogGetRequestActionEnum | string;
    public result?: OperateLogGetRequestResultEnum | string;
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
    public withAction(action: OperateLogGetRequestActionEnum | string): OperateLogGetRequest {
        this['action'] = action;
        return this;
    }
    public withResult(result: OperateLogGetRequestResultEnum | string): OperateLogGetRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum OperateLogGetRequestActionEnum {
    CREATE = 'CREATE',
    DELETE = 'DELETE',
    DOWNLOAD = 'DOWNLOAD',
    UPDATE = 'UPDATE'
}
/**
    * @export
    * @enum {string}
    */
export enum OperateLogGetRequestResultEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
