import { WebhookLogDto } from './WebhookLogDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryWebhookLogResponse extends SdkResponse {
    public id?: number;
    private 'web_hook_id'?: number;
    public trigger?: string;
    public url?: string;
    private 'response_status'?: string;
    private 'execution_duration'?: number;
    public uuid?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'request_headers'?: object;
    private 'request_data'?: object;
    private 'response_headers'?: object;
    private 'response_body'?: object;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowRepositoryWebhookLogResponse {
        this['id'] = id;
        return this;
    }
    public withWebHookId(webHookId: number): ShowRepositoryWebhookLogResponse {
        this['web_hook_id'] = webHookId;
        return this;
    }
    public set webHookId(webHookId: number  | undefined) {
        this['web_hook_id'] = webHookId;
    }
    public get webHookId(): number | undefined {
        return this['web_hook_id'];
    }
    public withTrigger(trigger: string): ShowRepositoryWebhookLogResponse {
        this['trigger'] = trigger;
        return this;
    }
    public withUrl(url: string): ShowRepositoryWebhookLogResponse {
        this['url'] = url;
        return this;
    }
    public withResponseStatus(responseStatus: string): ShowRepositoryWebhookLogResponse {
        this['response_status'] = responseStatus;
        return this;
    }
    public set responseStatus(responseStatus: string  | undefined) {
        this['response_status'] = responseStatus;
    }
    public get responseStatus(): string | undefined {
        return this['response_status'];
    }
    public withExecutionDuration(executionDuration: number): ShowRepositoryWebhookLogResponse {
        this['execution_duration'] = executionDuration;
        return this;
    }
    public set executionDuration(executionDuration: number  | undefined) {
        this['execution_duration'] = executionDuration;
    }
    public get executionDuration(): number | undefined {
        return this['execution_duration'];
    }
    public withUuid(uuid: string): ShowRepositoryWebhookLogResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowRepositoryWebhookLogResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowRepositoryWebhookLogResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withRequestHeaders(requestHeaders: object): ShowRepositoryWebhookLogResponse {
        this['request_headers'] = requestHeaders;
        return this;
    }
    public set requestHeaders(requestHeaders: object  | undefined) {
        this['request_headers'] = requestHeaders;
    }
    public get requestHeaders(): object | undefined {
        return this['request_headers'];
    }
    public withRequestData(requestData: object): ShowRepositoryWebhookLogResponse {
        this['request_data'] = requestData;
        return this;
    }
    public set requestData(requestData: object  | undefined) {
        this['request_data'] = requestData;
    }
    public get requestData(): object | undefined {
        return this['request_data'];
    }
    public withResponseHeaders(responseHeaders: object): ShowRepositoryWebhookLogResponse {
        this['response_headers'] = responseHeaders;
        return this;
    }
    public set responseHeaders(responseHeaders: object  | undefined) {
        this['response_headers'] = responseHeaders;
    }
    public get responseHeaders(): object | undefined {
        return this['response_headers'];
    }
    public withResponseBody(responseBody: object): ShowRepositoryWebhookLogResponse {
        this['response_body'] = responseBody;
        return this;
    }
    public set responseBody(responseBody: object  | undefined) {
        this['response_body'] = responseBody;
    }
    public get responseBody(): object | undefined {
        return this['response_body'];
    }
}