
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventSubResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'source_type'?: string | undefined;
    private 'source_id'?: string | undefined;
    public category?: string;
    public severity?: string;
    public tag?: string;
    public enable?: number;
    private 'project_id'?: string | undefined;
    private 'name_space'?: string | undefined;
    private 'notification_target'?: string | undefined;
    private 'notification_target_name'?: string | undefined;
    private 'notification_target_type'?: string | undefined;
    public language?: string;
    private 'time_zone'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEventSubResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateEventSubResponse {
        this['name'] = name;
        return this;
    }
    public withSourceType(sourceType: string): CreateEventSubResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): CreateEventSubResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withCategory(category: string): CreateEventSubResponse {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): CreateEventSubResponse {
        this['severity'] = severity;
        return this;
    }
    public withTag(tag: string): CreateEventSubResponse {
        this['tag'] = tag;
        return this;
    }
    public withEnable(enable: number): CreateEventSubResponse {
        this['enable'] = enable;
        return this;
    }
    public withProjectId(projectId: string): CreateEventSubResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withNameSpace(nameSpace: string): CreateEventSubResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
    public withNotificationTarget(notificationTarget: string): CreateEventSubResponse {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): CreateEventSubResponse {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): CreateEventSubResponse {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): CreateEventSubResponse {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): CreateEventSubResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone() {
        return this['time_zone'];
    }
}