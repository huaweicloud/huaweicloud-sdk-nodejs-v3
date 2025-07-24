import { AlertLevel } from './AlertLevel';


export class AlertTemplateVo {
    public alertLevels?: Array<AlertLevel>;
    private 'create_time'?: string;
    private 'create_user'?: string;
    public id?: string;
    public name?: string;
    public remarks?: string;
    private 'test_service_id'?: string;
    private 'update_time'?: string;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withAlertLevels(alertLevels: Array<AlertLevel>): AlertTemplateVo {
        this['alertLevels'] = alertLevels;
        return this;
    }
    public withCreateTime(createTime: string): AlertTemplateVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): AlertTemplateVo {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withId(id: string): AlertTemplateVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlertTemplateVo {
        this['name'] = name;
        return this;
    }
    public withRemarks(remarks: string): AlertTemplateVo {
        this['remarks'] = remarks;
        return this;
    }
    public withTestServiceId(testServiceId: string): AlertTemplateVo {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
    public withUpdateTime(updateTime: string): AlertTemplateVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): AlertTemplateVo {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}