import { GpgSubKeyDto } from './GpgSubKeyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserGpgKeysResponse extends SdkResponse {
    public id?: number;
    private 'created_at'?: string;
    private 'emails_with_verified_status'?: { [key: string]: boolean; };
    public fingerprint?: string;
    public key?: string;
    public description?: string;
    public title?: string;
    private 'primary_keyid'?: string;
    public active?: boolean;
    public subkeys?: Array<GpgSubKeyDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): ListUserGpgKeysResponse {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: string): ListUserGpgKeysResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withEmailsWithVerifiedStatus(emailsWithVerifiedStatus: { [key: string]: boolean; }): ListUserGpgKeysResponse {
        this['emails_with_verified_status'] = emailsWithVerifiedStatus;
        return this;
    }
    public set emailsWithVerifiedStatus(emailsWithVerifiedStatus: { [key: string]: boolean; }  | undefined) {
        this['emails_with_verified_status'] = emailsWithVerifiedStatus;
    }
    public get emailsWithVerifiedStatus(): { [key: string]: boolean; } | undefined {
        return this['emails_with_verified_status'];
    }
    public withFingerprint(fingerprint: string): ListUserGpgKeysResponse {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withKey(key: string): ListUserGpgKeysResponse {
        this['key'] = key;
        return this;
    }
    public withDescription(description: string): ListUserGpgKeysResponse {
        this['description'] = description;
        return this;
    }
    public withTitle(title: string): ListUserGpgKeysResponse {
        this['title'] = title;
        return this;
    }
    public withPrimaryKeyid(primaryKeyid: string): ListUserGpgKeysResponse {
        this['primary_keyid'] = primaryKeyid;
        return this;
    }
    public set primaryKeyid(primaryKeyid: string  | undefined) {
        this['primary_keyid'] = primaryKeyid;
    }
    public get primaryKeyid(): string | undefined {
        return this['primary_keyid'];
    }
    public withActive(active: boolean): ListUserGpgKeysResponse {
        this['active'] = active;
        return this;
    }
    public withSubkeys(subkeys: Array<GpgSubKeyDto>): ListUserGpgKeysResponse {
        this['subkeys'] = subkeys;
        return this;
    }
}