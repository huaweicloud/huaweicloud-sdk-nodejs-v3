
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRobotResponse extends SdkResponse {
    private 'robot_id'?: string;
    public name?: string;
    private 'app_id'?: string;
    private 'app_type'?: number;
    public concurrency?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public region?: number;
    private 'cbs_project_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRobotId(robotId: string): ShowRobotResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withName(name: string): ShowRobotResponse {
        this['name'] = name;
        return this;
    }
    public withAppId(appId: string): ShowRobotResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppType(appType: number): ShowRobotResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: number  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): number | undefined {
        return this['app_type'];
    }
    public withConcurrency(concurrency: number): ShowRobotResponse {
        this['concurrency'] = concurrency;
        return this;
    }
    public withCreateTime(createTime: string): ShowRobotResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowRobotResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withRegion(region: number): ShowRobotResponse {
        this['region'] = region;
        return this;
    }
    public withCbsProjectId(cbsProjectId: string): ShowRobotResponse {
        this['cbs_project_id'] = cbsProjectId;
        return this;
    }
    public set cbsProjectId(cbsProjectId: string  | undefined) {
        this['cbs_project_id'] = cbsProjectId;
    }
    public get cbsProjectId(): string | undefined {
        return this['cbs_project_id'];
    }
    public withXRequestId(xRequestId: string): ShowRobotResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}