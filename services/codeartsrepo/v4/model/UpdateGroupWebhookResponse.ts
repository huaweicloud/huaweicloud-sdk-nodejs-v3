import { WebhookParamsDto } from './WebhookParamsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGroupWebhookResponse extends SdkResponse {
    public url?: string;
    private 'push_events'?: boolean;
    private 'push_events_branch_regex_filter'?: string;
    private 'tag_push_events'?: boolean;
    private 'merge_requests_events'?: boolean;
    private 'note_events'?: boolean;
    public token?: string;
    private 'token_type'?: string;
    public name?: string;
    public description?: string;
    public id?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): UpdateGroupWebhookResponse {
        this['url'] = url;
        return this;
    }
    public withPushEvents(pushEvents: boolean): UpdateGroupWebhookResponse {
        this['push_events'] = pushEvents;
        return this;
    }
    public set pushEvents(pushEvents: boolean  | undefined) {
        this['push_events'] = pushEvents;
    }
    public get pushEvents(): boolean | undefined {
        return this['push_events'];
    }
    public withPushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string): UpdateGroupWebhookResponse {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
        return this;
    }
    public set pushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string  | undefined) {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
    }
    public get pushEventsBranchRegexFilter(): string | undefined {
        return this['push_events_branch_regex_filter'];
    }
    public withTagPushEvents(tagPushEvents: boolean): UpdateGroupWebhookResponse {
        this['tag_push_events'] = tagPushEvents;
        return this;
    }
    public set tagPushEvents(tagPushEvents: boolean  | undefined) {
        this['tag_push_events'] = tagPushEvents;
    }
    public get tagPushEvents(): boolean | undefined {
        return this['tag_push_events'];
    }
    public withMergeRequestsEvents(mergeRequestsEvents: boolean): UpdateGroupWebhookResponse {
        this['merge_requests_events'] = mergeRequestsEvents;
        return this;
    }
    public set mergeRequestsEvents(mergeRequestsEvents: boolean  | undefined) {
        this['merge_requests_events'] = mergeRequestsEvents;
    }
    public get mergeRequestsEvents(): boolean | undefined {
        return this['merge_requests_events'];
    }
    public withNoteEvents(noteEvents: boolean): UpdateGroupWebhookResponse {
        this['note_events'] = noteEvents;
        return this;
    }
    public set noteEvents(noteEvents: boolean  | undefined) {
        this['note_events'] = noteEvents;
    }
    public get noteEvents(): boolean | undefined {
        return this['note_events'];
    }
    public withToken(token: string): UpdateGroupWebhookResponse {
        this['token'] = token;
        return this;
    }
    public withTokenType(tokenType: string): UpdateGroupWebhookResponse {
        this['token_type'] = tokenType;
        return this;
    }
    public set tokenType(tokenType: string  | undefined) {
        this['token_type'] = tokenType;
    }
    public get tokenType(): string | undefined {
        return this['token_type'];
    }
    public withName(name: string): UpdateGroupWebhookResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGroupWebhookResponse {
        this['description'] = description;
        return this;
    }
    public withId(id: number): UpdateGroupWebhookResponse {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateGroupWebhookResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateGroupWebhookResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}