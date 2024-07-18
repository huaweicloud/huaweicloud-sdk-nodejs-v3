import { UpdateInsertHeadersConfig } from './UpdateInsertHeadersConfig';
import { UpdateRemoveHeadersConfig } from './UpdateRemoveHeadersConfig';
import { UpdateTrafficLimitConfig } from './UpdateTrafficLimitConfig';


export class UpdateFixtedResponseConfig {
    private 'status_code'?: string;
    private 'content_type'?: UpdateFixtedResponseConfigContentTypeEnum | string;
    private 'message_body'?: string;
    private 'insert_headers_config'?: UpdateInsertHeadersConfig;
    private 'remove_headers_config'?: UpdateRemoveHeadersConfig;
    private 'traffic_limit_config'?: UpdateTrafficLimitConfig;
    public constructor() { 
    }
    public withStatusCode(statusCode: string): UpdateFixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: UpdateFixtedResponseConfigContentTypeEnum | string): UpdateFixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateFixtedResponseConfigContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): UpdateFixtedResponseConfigContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): UpdateFixtedResponseConfig {
        this['message_body'] = messageBody;
        return this;
    }
    public set messageBody(messageBody: string  | undefined) {
        this['message_body'] = messageBody;
    }
    public get messageBody(): string | undefined {
        return this['message_body'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: UpdateInsertHeadersConfig): UpdateFixtedResponseConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: UpdateInsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): UpdateInsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: UpdateRemoveHeadersConfig): UpdateFixtedResponseConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: UpdateRemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): UpdateRemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
    }
    public withTrafficLimitConfig(trafficLimitConfig: UpdateTrafficLimitConfig): UpdateFixtedResponseConfig {
        this['traffic_limit_config'] = trafficLimitConfig;
        return this;
    }
    public set trafficLimitConfig(trafficLimitConfig: UpdateTrafficLimitConfig  | undefined) {
        this['traffic_limit_config'] = trafficLimitConfig;
    }
    public get trafficLimitConfig(): UpdateTrafficLimitConfig | undefined {
        return this['traffic_limit_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
