

export class DashboardDto {
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'data_type'?: string;
    public id?: string;
    public name?: string;
    private 'service_id'?: string;
    private 'task_ids'?: Array<string>;
    private 'task_type'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    private 'view_type'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: number): DashboardDto {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): DashboardDto {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDataType(dataType: string): DashboardDto {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withId(id: string): DashboardDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DashboardDto {
        this['name'] = name;
        return this;
    }
    public withServiceId(serviceId: string): DashboardDto {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withTaskIds(taskIds: Array<string>): DashboardDto {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<string> | undefined {
        return this['task_ids'];
    }
    public withTaskType(taskType: string): DashboardDto {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withUpdateTime(updateTime: number): DashboardDto {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): DashboardDto {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withViewType(viewType: string): DashboardDto {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): string | undefined {
        return this['view_type'];
    }
}