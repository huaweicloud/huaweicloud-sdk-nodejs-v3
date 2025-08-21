import { LabelSimpleDto } from './LabelSimpleDto';


export class LabelBasicDto {
    public id?: number;
    public name?: string;
    public color?: string;
    public description?: string;
    private 'text_color'?: string;
    private 'expires_at'?: string;
    private 'is_expired'?: boolean;
    private 'open_merge_requests_count'?: number;
    private 'open_change_request_count'?: number;
    public constructor() { 
    }
    public withId(id: number): LabelBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LabelBasicDto {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): LabelBasicDto {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): LabelBasicDto {
        this['description'] = description;
        return this;
    }
    public withTextColor(textColor: string): LabelBasicDto {
        this['text_color'] = textColor;
        return this;
    }
    public set textColor(textColor: string  | undefined) {
        this['text_color'] = textColor;
    }
    public get textColor(): string | undefined {
        return this['text_color'];
    }
    public withExpiresAt(expiresAt: string): LabelBasicDto {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withIsExpired(isExpired: boolean): LabelBasicDto {
        this['is_expired'] = isExpired;
        return this;
    }
    public set isExpired(isExpired: boolean  | undefined) {
        this['is_expired'] = isExpired;
    }
    public get isExpired(): boolean | undefined {
        return this['is_expired'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): LabelBasicDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withOpenChangeRequestCount(openChangeRequestCount: number): LabelBasicDto {
        this['open_change_request_count'] = openChangeRequestCount;
        return this;
    }
    public set openChangeRequestCount(openChangeRequestCount: number  | undefined) {
        this['open_change_request_count'] = openChangeRequestCount;
    }
    public get openChangeRequestCount(): number | undefined {
        return this['open_change_request_count'];
    }
}