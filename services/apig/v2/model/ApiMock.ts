import { ApiMockCreate } from './ApiMockCreate';


export class ApiMock {
    public remark?: string;
    private 'result_content'?: string;
    public version?: string;
    private 'authorizer_id'?: string;
    public id?: string;
    private 'register_time'?: Date;
    public status?: number;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withRemark(remark: string): ApiMock {
        this['remark'] = remark;
        return this;
    }
    public withResultContent(resultContent: string): ApiMock {
        this['result_content'] = resultContent;
        return this;
    }
    public set resultContent(resultContent: string  | undefined) {
        this['result_content'] = resultContent;
    }
    public get resultContent(): string | undefined {
        return this['result_content'];
    }
    public withVersion(version: string): ApiMock {
        this['version'] = version;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiMock {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withId(id: string): ApiMock {
        this['id'] = id;
        return this;
    }
    public withRegisterTime(registerTime: Date): ApiMock {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: number): ApiMock {
        this['status'] = status;
        return this;
    }
    public withUpdateTime(updateTime: Date): ApiMock {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}