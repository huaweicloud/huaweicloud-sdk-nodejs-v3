

export class UploadFileRes {
    public awInsId?: string;
    private 'create_time'?: string;
    private 'create_time_stamp'?: number;
    private 'create_time_string'?: string;
    private 'create_user'?: string;
    private 'current_size'?: number;
    public filePath?: string;
    public id?: string;
    public name?: string;
    public originName?: string;
    public projectId?: string;
    public region?: string;
    private 'testcase_id'?: string;
    private 'update_time'?: string;
    private 'update_time_stamp'?: number;
    private 'update_time_string'?: string;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withAwInsId(awInsId: string): UploadFileRes {
        this['awInsId'] = awInsId;
        return this;
    }
    public withCreateTime(createTime: string): UploadFileRes {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateTimeStamp(createTimeStamp: number): UploadFileRes {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withCreateTimeString(createTimeString: string): UploadFileRes {
        this['create_time_string'] = createTimeString;
        return this;
    }
    public set createTimeString(createTimeString: string  | undefined) {
        this['create_time_string'] = createTimeString;
    }
    public get createTimeString(): string | undefined {
        return this['create_time_string'];
    }
    public withCreateUser(createUser: string): UploadFileRes {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCurrentSize(currentSize: number): UploadFileRes {
        this['current_size'] = currentSize;
        return this;
    }
    public set currentSize(currentSize: number  | undefined) {
        this['current_size'] = currentSize;
    }
    public get currentSize(): number | undefined {
        return this['current_size'];
    }
    public withFilePath(filePath: string): UploadFileRes {
        this['filePath'] = filePath;
        return this;
    }
    public withId(id: string): UploadFileRes {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UploadFileRes {
        this['name'] = name;
        return this;
    }
    public withOriginName(originName: string): UploadFileRes {
        this['originName'] = originName;
        return this;
    }
    public withProjectId(projectId: string): UploadFileRes {
        this['projectId'] = projectId;
        return this;
    }
    public withRegion(region: string): UploadFileRes {
        this['region'] = region;
        return this;
    }
    public withTestcaseId(testcaseId: string): UploadFileRes {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withUpdateTime(updateTime: string): UploadFileRes {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): UploadFileRes {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withUpdateTimeString(updateTimeString: string): UploadFileRes {
        this['update_time_string'] = updateTimeString;
        return this;
    }
    public set updateTimeString(updateTimeString: string  | undefined) {
        this['update_time_string'] = updateTimeString;
    }
    public get updateTimeString(): string | undefined {
        return this['update_time_string'];
    }
    public withUpdateUser(updateUser: string): UploadFileRes {
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