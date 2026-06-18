

export class WebhookParamsRequestDto {
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
    public constructor(url?: string, name?: string) { 
        this['url'] = url;
        this['name'] = name;
    }
    public withUrl(url: string): WebhookParamsRequestDto {
        this['url'] = url;
        return this;
    }
    public withPushEvents(pushEvents: boolean): WebhookParamsRequestDto {
        this['push_events'] = pushEvents;
        return this;
    }
    public set pushEvents(pushEvents: boolean  | undefined) {
        this['push_events'] = pushEvents;
    }
    public get pushEvents(): boolean | undefined {
        return this['push_events'];
    }
    public withPushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string): WebhookParamsRequestDto {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
        return this;
    }
    public set pushEventsBranchRegexFilter(pushEventsBranchRegexFilter: string  | undefined) {
        this['push_events_branch_regex_filter'] = pushEventsBranchRegexFilter;
    }
    public get pushEventsBranchRegexFilter(): string | undefined {
        return this['push_events_branch_regex_filter'];
    }
    public withNotePlainTextFilter(notePlainTextFilter: Array<string>): WebhookParamsRequestDto {
        this['note_plain_text_filter'] = notePlainTextFilter;
        return this;
    }
    public set notePlainTextFilter(notePlainTextFilter: Array<string>  | undefined) {
        this['note_plain_text_filter'] = notePlainTextFilter;
    }
    public get notePlainTextFilter(): Array<string> | undefined {
        return this['note_plain_text_filter'];
    }
    public withTagPushEvents(tagPushEvents: boolean): WebhookParamsRequestDto {
        this['tag_push_events'] = tagPushEvents;
        return this;
    }
    public set tagPushEvents(tagPushEvents: boolean  | undefined) {
        this['tag_push_events'] = tagPushEvents;
    }
    public get tagPushEvents(): boolean | undefined {
        return this['tag_push_events'];
    }
    public withMergeRequestsEvents(mergeRequestsEvents: boolean): WebhookParamsRequestDto {
        this['merge_requests_events'] = mergeRequestsEvents;
        return this;
    }
    public set mergeRequestsEvents(mergeRequestsEvents: boolean  | undefined) {
        this['merge_requests_events'] = mergeRequestsEvents;
    }
    public get mergeRequestsEvents(): boolean | undefined {
        return this['merge_requests_events'];
    }
    public withNoteEvents(noteEvents: boolean): WebhookParamsRequestDto {
        this['note_events'] = noteEvents;
        return this;
    }
    public set noteEvents(noteEvents: boolean  | undefined) {
        this['note_events'] = noteEvents;
    }
    public get noteEvents(): boolean | undefined {
        return this['note_events'];
    }
    public withToken(token: string): WebhookParamsRequestDto {
        this['token'] = token;
        return this;
    }
    public withTokenType(tokenType: string): WebhookParamsRequestDto {
        this['token_type'] = tokenType;
        return this;
    }
    public set tokenType(tokenType: string  | undefined) {
        this['token_type'] = tokenType;
    }
    public get tokenType(): string | undefined {
        return this['token_type'];
    }
    public withName(name: string): WebhookParamsRequestDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WebhookParamsRequestDto {
        this['description'] = description;
        return this;
    }
}