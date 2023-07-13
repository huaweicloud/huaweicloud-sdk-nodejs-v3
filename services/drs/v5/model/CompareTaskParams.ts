import { DatabaseObject } from './DatabaseObject';


export class CompareTaskParams {
    private 'compare_task_id'?: string | undefined;
    public type?: CompareTaskParamsTypeEnum;
    private 'start_time'?: string | undefined;
    public option?: { [key: string]: string; };
    private 'db_object'?: { [key: string]: DatabaseObject; } | undefined;
    public constructor() { 
    }
    public withCompareTaskId(compareTaskId: string): CompareTaskParams {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId() {
        return this['compare_task_id'];
    }
    public withType(type: CompareTaskParamsTypeEnum): CompareTaskParams {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): CompareTaskParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
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
    public set dbObject(dbObject: { [key: string]: DatabaseObject; } | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject() {
        return this['db_object'];
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
