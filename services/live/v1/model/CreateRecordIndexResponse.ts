
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRecordIndexResponse extends SdkResponse {
    private 'index_url'?: string;
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public duration?: number;
    public width?: number;
    public height?: number;
    public location?: CreateRecordIndexResponseLocationEnum | string;
    public bucket?: string;
    private 'object'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withIndexUrl(indexUrl: string): CreateRecordIndexResponse {
        this['index_url'] = indexUrl;
        return this;
    }
    public set indexUrl(indexUrl: string  | undefined) {
        this['index_url'] = indexUrl;
    }
    public get indexUrl(): string | undefined {
        return this['index_url'];
    }
    public withPublishDomain(publishDomain: string): CreateRecordIndexResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): CreateRecordIndexResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): CreateRecordIndexResponse {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: Date): CreateRecordIndexResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): CreateRecordIndexResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): CreateRecordIndexResponse {
        this['duration'] = duration;
        return this;
    }
    public withWidth(width: number): CreateRecordIndexResponse {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): CreateRecordIndexResponse {
        this['height'] = height;
        return this;
    }
    public withLocation(location: CreateRecordIndexResponseLocationEnum | string): CreateRecordIndexResponse {
        this['location'] = location;
        return this;
    }
    public withBucket(bucket: string): CreateRecordIndexResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): CreateRecordIndexResponse {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withXRequestId(xRequestId: string): CreateRecordIndexResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateRecordIndexResponseLocationEnum {
    CN_NORTH_4 = 'cn-north-4',
    CN_NORTH_5 = 'cn-north-5',
    CN_NORTH_6 = 'cn-north-6'
}
