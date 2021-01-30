import { AssumeroleSessionuser } from './AssumeroleSessionuser';


export class IdentityAssumerole {
    private 'agency_name': string | undefined;
    private 'domain_id'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'duration_seconds'?: number | undefined;
    private 'session_user'?: AssumeroleSessionuser | undefined;
    public constructor(agencyName: any) { 
        this['agency_name'] = agencyName;
    }
    public withAgencyName(agencyName: string): IdentityAssumerole {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
    public withDomainId(domainId: string): IdentityAssumerole {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): IdentityAssumerole {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withDurationSeconds(durationSeconds: number): IdentityAssumerole {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds() {
        return this['duration_seconds'];
    }
    public withSessionUser(sessionUser: AssumeroleSessionuser): IdentityAssumerole {
        this['session_user'] = sessionUser;
        return this;
    }
    public set sessionUser(sessionUser: AssumeroleSessionuser | undefined) {
        this['session_user'] = sessionUser;
    }
    public get sessionUser() {
        return this['session_user'];
    }
}