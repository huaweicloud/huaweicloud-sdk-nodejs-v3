import { ChangeRequestHookCfgDto } from './ChangeRequestHookCfgDto';
import { WebHookBranchCfgDto } from './WebHookBranchCfgDto';
import { WebHookEventCfgDto } from './WebHookEventCfgDto';
import { WebhookParamsDto } from './WebhookParamsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddGroupWebhookResponse extends SdkResponse {
    public url?: string;
    private 'push_events'?: boolean;
    private 'push_events_branch_regex_filter'?: string;
    private 'note_plain_text_filter'?: Array<string>;
    private 'tag_push_events'?: boolean;
    private 'merge_requests_events'?: boolean;
    private 'note_events'?: boolean;
    public token?: string;
    private 'token_type'?: string;
    public name?: string;
    public description?: string;
    private 'event_cfgs'?: Array<WebHookEventCfgDto>;
    private 'project_cfgs'?: Array<WebHookBranchCfgDto>;
    private 'branch_cfgs'?: Array<WebHookBranchCfgDto>;
    public id?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public service?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): AddGroupWebhookResponse {
        this['url'] = url;
        return this;
    }
    public withPushEvents(pushEvents: boolean): AddGroupWebhookResponse {
        this['push_events'] = pushEvents;
        return this;
    }
    public set pushEvents(pushEvents: boolean  | undefined) {
        this['push_events'] = pushEvents;
    }
    public get pushEvents(): boolean | undefined {
        return this['push_events'];
    }
    public withPushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string): AddGroupWebhookResponse {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
        return this;
    }
    public set pushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string  | undefined) {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
    }
    public get pushEventsBranchRegexFilter(): string | undefined {
        return this['push_events_branch_regex_filter'];
    }
    public withNotePlainTextFilter(notePlainTextFilter: Array<string>): AddGroupWebhookResponse {
        this['note_plain_text_filter'] = notePlainTextFilter;
        return this;
    }
    public set notePlainTextFilter(notePlainTextFilter: Array<string>  | undefined) {
        this['note_plain_text_filter'] = notePlainTextFilter;
    }
    public get notePlainTextFilter(): Array<string> | undefined {
        return this['note_plain_text_filter'];
    }
    public withTagPushEvents(tagPushEvents: boolean): AddGroupWebhookResponse {
        this['tag_push_events'] = tagPushEvents;
        return this;
    }
    public set tagPushEvents(tagPushEvents: boolean  | undefined) {
        this['tag_push_events'] = tagPushEvents;
    }
    public get tagPushEvents(): boolean | undefined {
        return this['tag_push_events'];
    }
    public withMergeRequestsEvents(mergeRequestsEvents: boolean): AddGroupWebhookResponse {
        this['merge_requests_events'] = mergeRequestsEvents;
        return this;
    }
    public set mergeRequestsEvents(mergeRequestsEvents: boolean  | undefined) {
        this['merge_requests_events'] = mergeRequestsEvents;
    }
    public get mergeRequestsEvents(): boolean | undefined {
        return this['merge_requests_events'];
    }
    public withNoteEvents(noteEvents: boolean): AddGroupWebhookResponse {
        this['note_events'] = noteEvents;
        return this;
    }
    public set noteEvents(noteEvents: boolean  | undefined) {
        this['note_events'] = noteEvents;
    }
    public get noteEvents(): boolean | undefined {
        return this['note_events'];
    }
    public withToken(token: string): AddGroupWebhookResponse {
        this['token'] = token;
        return this;
    }
    public withTokenType(tokenType: string): AddGroupWebhookResponse {
        this['token_type'] = tokenType;
        return this;
    }
    public set tokenType(tokenType: string  | undefined) {
        this['token_type'] = tokenType;
    }
    public get tokenType(): string | undefined {
        return this['token_type'];
    }
    public withName(name: string): AddGroupWebhookResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddGroupWebhookResponse {
        this['description'] = description;
        return this;
    }
    public withEventCfgs(eventCfgs: Array<WebHookEventCfgDto>): AddGroupWebhookResponse {
        this['event_cfgs'] = eventCfgs;
        return this;
    }
    public set eventCfgs(eventCfgs: Array<WebHookEventCfgDto>  | undefined) {
        this['event_cfgs'] = eventCfgs;
    }
    public get eventCfgs(): Array<WebHookEventCfgDto> | undefined {
        return this['event_cfgs'];
    }
    public withProjectCfgs(projectCfgs: Array<WebHookBranchCfgDto>): AddGroupWebhookResponse {
        this['project_cfgs'] = projectCfgs;
        return this;
    }
    public set projectCfgs(projectCfgs: Array<WebHookBranchCfgDto>  | undefined) {
        this['project_cfgs'] = projectCfgs;
    }
    public get projectCfgs(): Array<WebHookBranchCfgDto> | undefined {
        return this['project_cfgs'];
    }
    public withBranchCfgs(branchCfgs: Array<WebHookBranchCfgDto>): AddGroupWebhookResponse {
        this['branch_cfgs'] = branchCfgs;
        return this;
    }
    public set branchCfgs(branchCfgs: Array<WebHookBranchCfgDto>  | undefined) {
        this['branch_cfgs'] = branchCfgs;
    }
    public get branchCfgs(): Array<WebHookBranchCfgDto> | undefined {
        return this['branch_cfgs'];
    }
    public withId(id: number): AddGroupWebhookResponse {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: string): AddGroupWebhookResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): AddGroupWebhookResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withService(service: string): AddGroupWebhookResponse {
        this['service'] = service;
        return this;
    }
}