
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEventSubResponse extends SdkResponse {
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
    public withId(id: string): DeleteEventSubResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteEventSubResponse {
        this['name'] = name;
        return this;
    }
    public withSourceType(sourceType: string): DeleteEventSubResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): DeleteEventSubResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withCategory(category: string): DeleteEventSubResponse {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): DeleteEventSubResponse {
        this['severity'] = severity;
        return this;
    }
    public withTag(tag: string): DeleteEventSubResponse {
        this['tag'] = tag;
        return this;
    }
    public withEnable(enable: number): DeleteEventSubResponse {
        this['enable'] = enable;
        return this;
    }
    public withProjectId(projectId: string): DeleteEventSubResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withNameSpace(nameSpace: string): DeleteEventSubResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
    public withNotificationTarget(notificationTarget: string): DeleteEventSubResponse {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): DeleteEventSubResponse {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): DeleteEventSubResponse {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): DeleteEventSubResponse {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): DeleteEventSubResponse {
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