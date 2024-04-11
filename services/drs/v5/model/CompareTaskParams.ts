import { DataProcessInfo } from './DataProcessInfo';
import { DatabaseObject } from './DatabaseObject';


export class CompareTaskParams {
    private 'compare_task_id'?: string;
    public type?: CompareTaskParamsTypeEnum | string;
    private 'start_time'?: string;
    public option?: { [key: string]: string; };
    private 'db_object'?: { [key: string]: DatabaseObject; };
    private 'data_process_info'?: Array<DataProcessInfo>;
    public constructor() { 
    }
    public withCompareTaskId(compareTaskId: string): CompareTaskParams {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withType(type: CompareTaskParamsTypeEnum | string): CompareTaskParams {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): CompareTaskParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withOption(option: { [key: string]: string; }): CompareTaskParams {
        this['option'] = option;
        return this;
    }
    public withDbObject(dbObject: { [key: string]: DatabaseObject; }): CompareTaskParams {
        this['db_object'] = dbObject;
        return this;
    }
    public set dbObject(dbObject: { [key: string]: DatabaseObject; }  | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject(): { [key: string]: DatabaseObject; } | undefined {
        return this['db_object'];
    }
    public withDataProcessInfo(dataProcessInfo: Array<DataProcessInfo>): CompareTaskParams {
        this['data_process_info'] = dataProcessInfo;
        return this;
    }
    public set dataProcessInfo(dataProcessInfo: Array<DataProcessInfo>  | undefined) {
        this['data_process_info'] = dataProcessInfo;
    }
    public get dataProcessInfo(): Array<DataProcessInfo> | undefined {
        return this['data_process_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CompareTaskParamsTypeEnum {
    OBJECT = 'object',
    LINES = 'lines',
    CONTENTS = 'contents'
}
