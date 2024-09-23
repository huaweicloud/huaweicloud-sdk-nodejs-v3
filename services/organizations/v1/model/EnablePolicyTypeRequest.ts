import { PolicyTypeReqBody } from './PolicyTypeReqBody';


export class EnablePolicyTypeRequest {
    private 'X-Security-Token'?: string;
    public body?: PolicyTypeReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): EnablePolicyTypeRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: PolicyTypeReqBody): EnablePolicyTypeRequest {
        this['body'] = body;
        return this;
    }
}