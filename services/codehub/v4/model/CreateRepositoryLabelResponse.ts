import { LabelBasicDto } from './LabelBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRepositoryLabelResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public color?: string;
    public description?: string;
    private 'text_color'?: string;
    private 'expires_at'?: string;
    private 'is_expired'?: boolean;
    private 'open_merge_requests_count'?: number;
    private 'open_change_request_count'?: number;
    public priority?: number;
    private 'is_repository_label'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateRepositoryLabelResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateRepositoryLabelResponse {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): CreateRepositoryLabelResponse {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): CreateRepositoryLabelResponse {
        this['description'] = description;
        return this;
    }
    public withTextColor(textColor: string): CreateRepositoryLabelResponse {
        this['text_color'] = textColor;
        return this;
    }
    public set textColor(textColor: string  | undefined) {
        this['text_color'] = textColor;
    }
    public get textColor(): string | undefined {
        return this['text_color'];
    }
    public withExpiresAt(expiresAt: string): CreateRepositoryLabelResponse {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withIsExpired(isExpired: boolean): CreateRepositoryLabelResponse {
        this['is_expired'] = isExpired;
        return this;
    }
    public set isExpired(isExpired: boolean  | undefined) {
        this['is_expired'] = isExpired;
    }
    public get isExpired(): boolean | undefined {
        return this['is_expired'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): CreateRepositoryLabelResponse {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withOpenChangeRequestCount(openChangeRequestCount: number): CreateRepositoryLabelResponse {
        this['open_change_request_count'] = openChangeRequestCount;
        return this;
    }
    public set openChangeRequestCount(openChangeRequestCount: number  | undefined) {
        this['open_change_request_count'] = openChangeRequestCount;
    }
    public get openChangeRequestCount(): number | undefined {
        return this['open_change_request_count'];
    }
    public withPriority(priority: number): CreateRepositoryLabelResponse {
        this['priority'] = priority;
        return this;
    }
    public withIsRepositoryLabel(isRepositoryLabel: boolean): CreateRepositoryLabelResponse {
        this['is_repository_label'] = isRepositoryLabel;
        return this;
    }
    public set isRepositoryLabel(isRepositoryLabel: boolean  | undefined) {
        this['is_repository_label'] = isRepositoryLabel;
    }
    public get isRepositoryLabel(): boolean | undefined {
        return this['is_repository_label'];
    }
}