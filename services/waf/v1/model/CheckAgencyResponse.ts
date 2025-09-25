
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckAgencyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public version?: string;
    public duration?: string;
    private 'domain_id'?: string;
    private 'is_valid'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): CheckAgencyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CheckAgencyResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CheckAgencyResponse {
        this['version'] = version;
        return this;
    }
    public withDuration(duration: string): CheckAgencyResponse {
        this['duration'] = duration;
        return this;
    }
    public withDomainId(domainId: string): CheckAgencyResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIsValid(isValid: boolean): CheckAgencyResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
}