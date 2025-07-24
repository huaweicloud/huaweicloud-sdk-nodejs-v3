

export class PublicAwLib {
    private 'create_time'?: Date;
    private 'create_time_stamp'?: number;
    private 'create_time_string'?: string;
    private 'create_user'?: string;
    private 'document_link'?: string;
    public id?: string;
    public name?: string;
    private 'net_area'?: Array<string>;
    private 'obs_temp_url'?: string;
    private 'product_line'?: string;
    private 'repo_branch'?: string;
    private 'repo_lib_path'?: string;
    private 'repo_password'?: string;
    private 'repo_private_key'?: string;
    private 'repo_url'?: string;
    private 'repo_username'?: string;
    private 'update_time'?: Date;
    private 'update_time_stamp'?: number;
    private 'update_time_string'?: string;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: Date): PublicAwLib {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimeStamp(createTimeStamp: number): PublicAwLib {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withCreateTimeString(createTimeString: string): PublicAwLib {
        this['create_time_string'] = createTimeString;
        return this;
    }
    public set createTimeString(createTimeString: string  | undefined) {
        this['create_time_string'] = createTimeString;
    }
    public get createTimeString(): string | undefined {
        return this['create_time_string'];
    }
    public withCreateUser(createUser: string): PublicAwLib {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDocumentLink(documentLink: string): PublicAwLib {
        this['document_link'] = documentLink;
        return this;
    }
    public set documentLink(documentLink: string  | undefined) {
        this['document_link'] = documentLink;
    }
    public get documentLink(): string | undefined {
        return this['document_link'];
    }
    public withId(id: string): PublicAwLib {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PublicAwLib {
        this['name'] = name;
        return this;
    }
    public withNetArea(netArea: Array<string>): PublicAwLib {
        this['net_area'] = netArea;
        return this;
    }
    public set netArea(netArea: Array<string>  | undefined) {
        this['net_area'] = netArea;
    }
    public get netArea(): Array<string> | undefined {
        return this['net_area'];
    }
    public withObsTempUrl(obsTempUrl: string): PublicAwLib {
        this['obs_temp_url'] = obsTempUrl;
        return this;
    }
    public set obsTempUrl(obsTempUrl: string  | undefined) {
        this['obs_temp_url'] = obsTempUrl;
    }
    public get obsTempUrl(): string | undefined {
        return this['obs_temp_url'];
    }
    public withProductLine(productLine: string): PublicAwLib {
        this['product_line'] = productLine;
        return this;
    }
    public set productLine(productLine: string  | undefined) {
        this['product_line'] = productLine;
    }
    public get productLine(): string | undefined {
        return this['product_line'];
    }
    public withRepoBranch(repoBranch: string): PublicAwLib {
        this['repo_branch'] = repoBranch;
        return this;
    }
    public set repoBranch(repoBranch: string  | undefined) {
        this['repo_branch'] = repoBranch;
    }
    public get repoBranch(): string | undefined {
        return this['repo_branch'];
    }
    public withRepoLibPath(repoLibPath: string): PublicAwLib {
        this['repo_lib_path'] = repoLibPath;
        return this;
    }
    public set repoLibPath(repoLibPath: string  | undefined) {
        this['repo_lib_path'] = repoLibPath;
    }
    public get repoLibPath(): string | undefined {
        return this['repo_lib_path'];
    }
    public withRepoPassword(repoPassword: string): PublicAwLib {
        this['repo_password'] = repoPassword;
        return this;
    }
    public set repoPassword(repoPassword: string  | undefined) {
        this['repo_password'] = repoPassword;
    }
    public get repoPassword(): string | undefined {
        return this['repo_password'];
    }
    public withRepoPrivateKey(repoPrivateKey: string): PublicAwLib {
        this['repo_private_key'] = repoPrivateKey;
        return this;
    }
    public set repoPrivateKey(repoPrivateKey: string  | undefined) {
        this['repo_private_key'] = repoPrivateKey;
    }
    public get repoPrivateKey(): string | undefined {
        return this['repo_private_key'];
    }
    public withRepoUrl(repoUrl: string): PublicAwLib {
        this['repo_url'] = repoUrl;
        return this;
    }
    public set repoUrl(repoUrl: string  | undefined) {
        this['repo_url'] = repoUrl;
    }
    public get repoUrl(): string | undefined {
        return this['repo_url'];
    }
    public withRepoUsername(repoUsername: string): PublicAwLib {
        this['repo_username'] = repoUsername;
        return this;
    }
    public set repoUsername(repoUsername: string  | undefined) {
        this['repo_username'] = repoUsername;
    }
    public get repoUsername(): string | undefined {
        return this['repo_username'];
    }
    public withUpdateTime(updateTime: Date): PublicAwLib {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): PublicAwLib {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withUpdateTimeString(updateTimeString: string): PublicAwLib {
        this['update_time_string'] = updateTimeString;
        return this;
    }
    public set updateTimeString(updateTimeString: string  | undefined) {
        this['update_time_string'] = updateTimeString;
    }
    public get updateTimeString(): string | undefined {
        return this['update_time_string'];
    }
    public withUpdateUser(updateUser: string): PublicAwLib {
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