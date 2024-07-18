import { CreateInsertHeadersConfig } from './CreateInsertHeadersConfig';
import { CreateRemoveHeadersConfig } from './CreateRemoveHeadersConfig';
import { CreateTrafficLimitConfig } from './CreateTrafficLimitConfig';


export class CreateFixtedResponseConfig {
    private 'status_code'?: string;
    private 'content_type'?: CreateFixtedResponseConfigContentTypeEnum | string;
    private 'message_body'?: string;
    private 'insert_headers_config'?: CreateInsertHeadersConfig;
    private 'remove_headers_config'?: CreateRemoveHeadersConfig;
    private 'traffic_limit_config'?: CreateTrafficLimitConfig;
    public constructor(statusCode?: string) { 
        this['status_code'] = statusCode;
    }
    public withStatusCode(statusCode: string): CreateFixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: CreateFixtedResponseConfigContentTypeEnum | string): CreateFixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateFixtedResponseConfigContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): CreateFixtedResponseConfigContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): CreateFixtedResponseConfig {
        this['message_body'] = messageBody;
        return this;
    }
    public set messageBody(messageBody: string  | undefined) {
        this['message_body'] = messageBody;
    }
    public get messageBody(): string | undefined {
        return this['message_body'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig): CreateFixtedResponseConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): CreateInsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig): CreateFixtedResponseConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): CreateRemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
    }
    public withTrafficLimitConfig(trafficLimitConfig: CreateTrafficLimitConfig): CreateFixtedResponseConfig {
        this['traffic_limit_config'] = trafficLimitConfig;
        return this;
    }
    public set trafficLimitConfig(trafficLimitConfig: CreateTrafficLimitConfig  | undefined) {
        this['traffic_limit_config'] = trafficLimitConfig;
    }
    public get trafficLimitConfig(): CreateTrafficLimitConfig | undefined {
        return this['traffic_limit_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
