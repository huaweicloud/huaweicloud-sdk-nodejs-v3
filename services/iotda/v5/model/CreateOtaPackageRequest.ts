import { CreateOtaPackage } from './CreateOtaPackage';


export class CreateOtaPackageRequest {
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: CreateOtaPackage;
    public constructor() { 
    }
    public withSpAuthToken(spAuthToken: string): CreateOtaPackageRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withInstanceId(instanceId: string): CreateOtaPackageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: CreateOtaPackage): CreateOtaPackageRequest {
        this['body'] = body;
        return this;
    }
}